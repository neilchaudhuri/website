import '../../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import seo from '../../seo.config'
import type {AppProps, NextWebVitalsMetric} from 'next/app'
import ReactGA from "react-ga4"
import {useEffect} from "react";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        ReactGA.initialize("G-SV6CZCPD3B")
    }, [])

    return (
        <>
            <DefaultSeo {...seo} />
            <Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
            <Script type="text/javascript" src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9ebbff15106c8f" strategy="lazyOnload"/>
            <Component {...pageProps} />
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const body = JSON.stringify(metric)
    ReactGA.send(body)
}

export default MyApp
