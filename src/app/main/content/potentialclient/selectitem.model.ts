export class SelectItem {
  label: string;
  value: number;

  constructor(SelectedItem?) {
    this.label = SelectedItem.Label;
    this.value = SelectedItem.Value;
  }
}
