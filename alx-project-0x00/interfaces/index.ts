export interface PillProps {
  title: string
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shapes?: 'rounded-sm' | 'rounded-md'|'rounded-lg';
    className?: string;
    style?: React.CSSProperties;
}