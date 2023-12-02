import { ToolProvider} from "@/components/commons/context/context";
import { prefix} from "../../conifg/config";
import { Layout } from "../layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <ToolProvider value={ prefix }>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ToolProvider>
    )
}