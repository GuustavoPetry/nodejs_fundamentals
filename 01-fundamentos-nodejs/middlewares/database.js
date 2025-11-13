export class Database {
    // # -> define uma propriedade de classe como Private, não pode ser acessada por outros arquivos
    #database = {};

    select(table) {
        const data = this.#database[table] ?? [];
        return data;
    }

    insert(table, data) {
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
        } else {
            this.#database[table] = [data];
        }
        return data
    }
}