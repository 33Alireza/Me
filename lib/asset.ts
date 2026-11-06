export function getAssetPath(path: string): string {
    const isProd = process.env.NODE_ENV === "production";
    const repoName = "Me";
    const basePath = isProd ? `/${repoName}` : "";
    if (!path) return path;
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (cleanPath.startsWith(basePath)) {
        return cleanPath;
    }
    return `${basePath}${cleanPath}`;
}