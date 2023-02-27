import { buildConfig } from 'payload/config';
import path from 'path';
import Translations from './collections/Translations';
import Users from './collections/Users';
import AfterNavLinks from './customComponents/AfterNavLinks';


export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    components: {
            afterNavLinks: [
                AfterNavLinks,
              ],
        },
  },
  collections: [
    Users,
    Translations,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
