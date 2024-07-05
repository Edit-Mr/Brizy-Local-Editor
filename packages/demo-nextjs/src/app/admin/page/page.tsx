import { Editor } from "@/components/Editor";
import { getEditorConfig } from "@/lib/editorConfig";
import { pageId, projectId } from "@/utils/mock";
import { Modes } from "@builder/core/build/es/types/types";
import React from "react";

export default async function EditorPage() {
  const editorConfig = await getEditorConfig({ pageId, projectId, mode: Modes.page });
  return <Editor config={editorConfig} />;
}
