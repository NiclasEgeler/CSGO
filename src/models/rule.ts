export interface Rules {
  /** Always equal to 'E' (0x45).*/
  header: string;

  /** Number of rules in the response.*/
  ruleCount: number;

  /** List of rules.*/
  rules: Rule[];
}

interface Rule {
  /** Name of the rule.*/
  name: string;

  /** Value of the rule.*/
  value: string;
}
