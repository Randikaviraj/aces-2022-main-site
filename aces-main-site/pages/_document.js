import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() { 
        return (
            <Html>
                <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
                integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
 
export default MyDocument;