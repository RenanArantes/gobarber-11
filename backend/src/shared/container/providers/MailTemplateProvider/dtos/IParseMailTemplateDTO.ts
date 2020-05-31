interface ITemplatesVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  template: string;
  variables: ITemplatesVariables;
}
