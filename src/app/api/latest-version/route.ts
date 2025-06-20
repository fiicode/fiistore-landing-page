import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Récupérer les informations de release depuis l'API GitHub
    const response = await fetch(
      "https://api.github.com/repos/fiicode/erb/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalider le cache toutes les heures
      }
    );

    if (!response.ok) {
      throw new Error("Échec de récupération des données GitHub");
    }

    const data = await response.json();

    // Extraire les informations nécessaires
    const version = data.tag_name.replace("v", ""); // Enlève le "v" du tag
    const downloadUrlBase = `https://github.com/fiicode/erb/releases/download/v${version}`;
    const windowsDownloadUrl = `${downloadUrlBase}/fiistore-Setup-${version}.exe`;
    const macDownloadUrl = `${downloadUrlBase}/fiistore-${version}.dmg`;

    // Extraire la taille du fichier à partir des assets si disponible
    let fileSize = "128 MB"; // Taille par défaut
    if (data.assets && data.assets.length > 0) {
      // Définition du type pour l'asset
      interface GithubAsset {
        name: string;
        size: number;
        browser_download_url: string;
      }

      // Chercher l'asset Windows
      const windowsAsset = data.assets.find(
        (asset: GithubAsset) =>
          asset.name.endsWith(".exe") && asset.name.includes("Setup")
      );

      if (windowsAsset) {
        // Convertir la taille en MB si trouvée
        const sizeInBytes = windowsAsset.size;
        const sizeInMB = Math.round(sizeInBytes / (1024 * 1024));
        fileSize = `${sizeInMB} MB`;
      }
    }

    return NextResponse.json({
      version,
      downloadUrlBase,
      windowsDownloadUrl,
      macDownloadUrl,
      fileSize,
      publishedAt: data.published_at,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de la version:", error);

    // En cas d'erreur, retourner les informations hardcodées par défaut
    return NextResponse.json({
      version: "1.2.36",
      downloadUrlBase:
        "https://github.com/fiicode/erb/releases/download/v1.2.36",
      windowsDownloadUrl:
        "https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-Setup-1.2.36.exe",
      macDownloadUrl:
        "https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-1.2.36.dmg",
      fileSize: "128 MB",
      error:
        "Impossible de récupérer la dernière version. Utilisation de la version par défaut.",
    });
  }
}
