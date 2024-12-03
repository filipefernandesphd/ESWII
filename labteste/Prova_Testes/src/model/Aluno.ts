export class Aluno {
    private nome!: string;
    private matricula!: string;
    private cpf!: string;
    private email!: string;
    private senha!: string;

    // Getters e Setters
    getNome(): string {
        if (this.nome === undefined) { throw new Error('O nome não pode estar indefinido!'); }
        return this.nome;
    }

    setNome(valor: string) {
        if (valor == '') { throw new Error('O nome não pode estar vazio!'); }
        this.nome = valor;
    }

    // Getters e Setters
    getMatricula(): string {
        if (this.matricula === undefined) { throw new Error('A matrícula não pode estar indefinida!'); }
        return this.matricula;
    }

    setMatricula(valor: string) {
        if (valor === '' || !this.validarMatricula(valor)) { throw new Error('A matrícula deve ser válida!'); }
        this.matricula = valor;
    }

    // Validar Matrícula
    /* istanbul ignore next */
    private validarMatricula(matricula: string): boolean {
        // Expressão regular para validar o padrão
        const regex = /^(198[5-9]|19[9]\d|20\d{2})\d{4}$/;

        // Verifica se o número corresponde ao padrão
        return regex.test(matricula);
    }

    // Getters e Setters
    getCpf(): string {
        if (this.cpf === undefined) { throw new Error('O CPF não pode estar indefinido!'); }
        return this.cpf;
    }

    setCpf(valor: string) {
        if (valor === '' || !this.validarCPF(valor)) { throw new Error('O CPF deve ser válido!'); }
        this.cpf = valor;
    }

    // Validar CPF
    /* istanbul ignore next */
    private validarCPF(cpf: string): boolean {
        // Verifica se o CPF tem exatamente 11 dígitos e se é numérico
        if (!/^\d{11}$/.test(cpf)) {
            return false;
        }

        // Verifica se todos os dígitos são iguais (ex: "11111111111")
        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Função para calcular um dígito verificador
        const calcularDigito = (base: string, pesoInicial: number): number => {
            const soma = base
                .split('')
                .map((num, index) => parseInt(num) * (pesoInicial - index))
                .reduce((acc, curr) => acc + curr, 0);

            const resto = soma % 11;
            return resto < 2 ? 0 : 11 - resto;
        };

        // Calcula o primeiro e segundo dígitos verificadores
        const base = cpf.substring(0, 9); // Os 9 primeiros dígitos
        const digito1 = calcularDigito(base, 10);
        const digito2 = calcularDigito(base + digito1, 11);

        // Compara os dígitos calculados com os do CPF
        return cpf === base + digito1.toString() + digito2.toString();
    }

    // Getters e Setters
    getEmail(): string {
        if (this.email === undefined) { throw new Error('O email não pode estar indefinido!'); }
        return this.email;
    }

    setEmail(valor: string) {
        if (valor === '' || !this.validarEmail(valor)) { throw new Error('O email deve ser válido!'); }
        this.email = valor;
    }

    // Validar E-mail
    /* istanbul ignore next */
    private validarEmail(email: string): boolean {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        // Testa o e-mail contra a expressão regular
        return regex.test(email);
    }

    // Getters e Setters
    getSenha(): string {
        if (this.senha === undefined) { throw new Error('A senha não pode estar indefinida!'); }
        return this.senha;
    }

    setSenha(valor: string) {
        if (valor === '' || !this.validarSenha(valor)) { throw new Error('A senha deve ser válida!'); }
        this.senha = valor;
    }

    // Validar Senha
    /* istanbul ignore next */
    private validarSenha(senha: string): boolean {
        // Verifica se a senha tem no mínimo 8 caracteres
        if (senha.length < 8) {
            return false;
        }

        // Expressão regular para verificar os critérios
        const temLetraMaiuscula = /[A-Z]/.test(senha);
        const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
        const temNumero = /\d/.test(senha);

        // Retorna true se todos os critérios forem atendidos
        return temLetraMaiuscula && temCaractereEspecial && temNumero;
    }
}
