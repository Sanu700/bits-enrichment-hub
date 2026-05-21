import { Button as BaseButton, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends ButtonProps {
  label: string;
}

const CTAButton = ({ label, className = "", ...props }: CTAButtonProps) => (
  <BaseButton
    {...props}
    className={`rounded-full bg-gradient-to-r from-amber to-amber-light text-white px-7 py-3.5 font-semibold shadow-lg shadow-amber/20 hover:shadow-amber/30 transition-all duration-300 ${className}`}
  >
    {label}
    <ArrowRight className="w-4 h-4 ml-2" />
  </BaseButton>
);

export default CTAButton;
