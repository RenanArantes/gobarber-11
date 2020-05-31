import IParseTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}
