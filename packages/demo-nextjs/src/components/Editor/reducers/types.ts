import { Response } from "@builder/core/build/es/types/common";
import type { BaseDCItem } from "@builder/core/build/es/types/dynamicContent";

export type Action =
  | {
      type: "update";
      data: string;
    }
  | {
      type: "loading";
    }
  | {
      type: "error";
      message: string;
    }
  | {
      type: "modal";
      res: Response<BaseDCItem>;
      rej: Response<string>;
    }
  | {
      type: "resolvePlaceholder";
      data: string;
    }
  | {
      type: "rejectPlaceholder";
      data: string;
    };

export interface State {
  output: string;
  loading?: boolean;
  error?: string;
  modal: {
    opened: boolean;
    resolve: Response<BaseDCItem>;
    reject: Response<string>;
  };
}
