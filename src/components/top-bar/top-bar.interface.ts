export default interface TopBarProps {
  onBack?: (step: number) => void;
  onClose?: () => void;
  step?: number;
}
