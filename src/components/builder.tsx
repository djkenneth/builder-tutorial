"use client";
import {  Builder, BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import { BuilderContent, builder } from '@builder.io/sdk';
import DefaultErrorPage from "next/error";

import Header from '@/components/Header'
import NotFound from '@/components/NotFound'
import CTA from '@/components/CTA'
import HeaderWithStats from "./HeaderWithStats";
import ProductList from "./ProductList";

interface BuilderPageProps { 
  content?: BuilderContent;
  model?: string
}

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
builder.init(BUILDER_API_KEY);

Builder.registerBlock

Builder.registerComponent(Header, { 
  name: 'Header',
  inputs: [{ name: 'title', type: 'text' }],
  screenshot: 'https://cdn.builder.io/api/v1/image/assets%2Fcdb3c2054c0f495082e97ff7be63f37d%2Fff3aedd7375f4430b288a8ad7ab11025',
  tag: 'my-dynamic-component',
  defaultStyles: {
    marginTop: '0'
  },
})

Builder.registerComponent(NotFound, {
  name: 'Not Found',
  inputs: [{ name: 'title', type: 'text' }],
  defaultStyles: {
    marginTop: '0'
  },
})

Builder.registerComponent(CTA, {
  name: 'CTA',
  inputs: [{ name: 'title', type: 'text' }],
  defaultStyles: {
    marginTop: '0'
  },
})

Builder.registerComponent(HeaderWithStats, {
  name: 'Header With Stats',
  defaultStyles: {
    marginTop: '0'
  },
})

Builder.registerComponent(ProductList, {
  name: 'Product List',
  defaultStyles: {
    marginTop: '0'
  },
})

export function RenderBuilderContent({ content, model = 'page' }: BuilderPageProps) { 
  // Call the useIsPreviewing hook to determine if 
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing(); 
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }
  // If the `content` is falsy and the page is 
  // not being previewed in Builder, render the 
  // DefaultErrorPage with a 404.
  return <NotFound />
}
