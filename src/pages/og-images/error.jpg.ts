import ogImage from "@utils/og-image";
import { useTranslations, getLangFromUrl } from "@i18n/utils";

export const GET = async function get({ request: {url}}) {
    const lang = getLangFromUrl(new URL(url));
    const t = useTranslations(lang);

    const png = await ogImage({
        title: '404 - Pelagornis',
        header: '404 - Not found',
        footer: 'Page not found',
        lang: lang
    });

    return new Response(png, {
        headers: {
            "Content-Type": "image/jpg",
        }
    });
};