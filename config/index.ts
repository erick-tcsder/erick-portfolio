export class NextConfig{
  public static get spaceSecret():string{
    return process.env['NEXT_PUBLIC_CONTENTFUL_SPACE_ID'] ?? '';
  }
  public get contentfulApiToken():string{
    return process.env['CONTENTFUL_ACCESS_TOKEN'] ?? ''
  }
}