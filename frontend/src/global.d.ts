import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      l: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}