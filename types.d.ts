interface Rule {
  id?: string;
  field: string;
  operator: string;
  parameters: string[];
  revenue: number;
}

interface RevenueGroup {
  name: string;
  description: string;
  special: boolean;
  rules: Rule[];
}

interface RulesMod {
  editRule: (rule: Rule) => void
  deleteRule: (rule: Rule) => void
}