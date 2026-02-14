import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";

export function render(url: string) {
  const helmetContext = {} as { helmet?: Record<string, { toString(): string }> };
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: Infinity, retry: false } },
  });

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );

  const { helmet } = helmetContext as { helmet: Record<string, { toString(): string }> };
  const dehydratedState = dehydrate(queryClient);
  return { html, helmet, dehydratedState };
}
