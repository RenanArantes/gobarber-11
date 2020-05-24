export default interface IHashProvider {
  generateHash(paylod: string): Promise<string>;
  compareHash(paylod: string, hashed: string): Promise<boolean>;
}
