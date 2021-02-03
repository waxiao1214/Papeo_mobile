export default interface TopBarProps {
  onBack?: (step: number) => void;
  onClose?: () => void;
  step?: number;
  title?: string;
  date?: string;
}
