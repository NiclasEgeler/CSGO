export interface Challenge {
  /** Always equal to 'A' (0x41).*/
  header: string;

  /** Challenge number.*/
  challange: Uint8Array;
}
