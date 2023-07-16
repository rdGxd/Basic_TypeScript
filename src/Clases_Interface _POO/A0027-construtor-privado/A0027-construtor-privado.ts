// Singleton - GoF | Factory Method - GoF

export class Database {
  private static database: Database;

  // Construtor privado para criar um Singleton
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Factory Method -> Quando um método de uma classe cria um novo objeto
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log(`Retornando instância já criada.`);
      return Database.database;
    }
    console.log(`Criando nova instância.`);

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
