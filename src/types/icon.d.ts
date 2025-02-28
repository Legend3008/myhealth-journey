
import { LucideProps } from 'lucide-react';

declare module '@/types' {
  interface IconProps extends Omit<LucideProps, 'ref'> {
    size?: number | string;
  }
}
