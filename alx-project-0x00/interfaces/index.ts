export interface PillProps {
  title: string
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    size?: 'small' | 'medium' | 'large'|'extralarge';
    shapes?: 'rounded-sm' | 'rounded-md'|'rounded-lg'|'rounded-full';
    className?: string;
    style?: React.CSSProperties;
}