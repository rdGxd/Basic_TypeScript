// Singleton - GoF | Factory Method - GoF

/*
Em TypeScript, o construtor privado é uma técnica usada para restringir a criação direta de instâncias de uma classe fora do seu escopo. Quando um construtor é declarado como privado, ele não pode ser acessado ou invocado por código externo à classe, limitando a criação de objetos apenas dentro da própria classe ou de métodos estáticos.

O construtor privado é útil para implementar padrões de projeto como o Singleton e o Factory Method, bem como para controlar a inicialização e instância de classes mais complexas.

Para definir um construtor privado em TypeScript, basta usar o modificador private antes do nome do construtor, como no exemplo abaixo:
*/

export class Database {
  private static database: Database;

  /*
Neste exemplo, a classe Database possui um construtor privado, o que significa que não é possível criar diretamente instâncias dela usando new Database(). No entanto, para criar instâncias, você pode usar o método estático getDatabase, que tem acesso ao construtor privado.
  */

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

/*
Dessa forma, o construtor privado permite que você controle como as instâncias da classe são criadas e evita que outras partes do código criem objetos de forma não intencional ou inadequada, garantindo maior encapsulamento e segurança no design da classe.
*/

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
