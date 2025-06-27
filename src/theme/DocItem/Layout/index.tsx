import React, { type ReactNode } from "react";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import type { WrapperProps } from "@docusaurus/types";
import Giscus from "@site/src/components/Giscus";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <Layout {...props} />
      <div className="margin-top--xl">
        <Giscus />
      </div>
    </>
  );
}
