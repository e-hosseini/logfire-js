import { registerOTel, OTLPHttpJsonTraceExporter } from '@vercel/otel';
import { LogfireVercelAISpanProcessor } from '@pydantic/logfire-vercel-ai-span-processor';
import * as logfire from 'logfire';
export function register() {
    logfire.configure({
      additionalSpanProcessors: [new LogfireVercelAISpanProcessor() as unknown as any],
      serviceName: 'langfuse-vercel-ai-nextjs-example',
      serviceVersion: '1.0.0',
      sendToLogfire: true,
      token: 'pylf_v1_local_rQNKTkn1hDmhgwGy5MLqlknRkV1vb2J0KM6ZRbZC8K8s',
      advanced: {
        baseUrl: 'http://localhost:8000',
      }
    });
    
    // registerOTel({
    //   serviceName: 'logfire-vercel-ai-app',
    //   autoDetectResources: true,
    //   spanProcessors: [new LogfireVercelAISpanProcessor()],
    //   traceExporter: new OTLPHttpJsonTraceExporter({
    //     url: 'http://localhost:8000/v1/traces',
    //     headers: {
    //       'Authorization': 'pylf_v1_us_0rlK0vZK709DxCs55NrpvtM1pFzkBBSrzkh1l6XqMMvc'
    //     },
    //   }),

    // });
}  

register()