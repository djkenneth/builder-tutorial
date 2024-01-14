"use client";
import {  Builder, BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import { BuilderContent, builder } from '@builder.io/sdk';
import DefaultErrorPage from "next/error";

import Header from '@/components/Header'
import NotFound from '@/components/NotFound'
import CTA from '@/components/CTA'

interface BuilderPageProps { 
  content?: BuilderContent;
  model?: string
}

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
builder.init(BUILDER_API_KEY);

Builder.registerComponent(Header, { 
  name: 'Header',
  inputs: [{ name: 'title', type: 'text' }],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
})

Builder.registerComponent(NotFound, {
  name: 'Not Found',
  inputs: [{ name: 'title', type: 'text' }],
})

Builder.registerComponent(CTA, {
  name: 'CTA',
  inputs: [{ name: 'title', type: 'text' }],
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
