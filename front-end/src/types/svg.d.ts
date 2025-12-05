declare module "*.svg" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
}