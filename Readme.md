- Comando **TYPEORM** para gerar nova migração:

  `yarn typeorm migration:create ./src/database/migrations/nomeDaMigracao`

- Comando **TYPEORM** para executar migração:

  `yarn typeorm-ts-node-commonjs migration:run -- -d ./src/database/connect.ts`
