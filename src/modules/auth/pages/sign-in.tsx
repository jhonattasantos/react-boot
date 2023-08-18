import React from 'react';

const SignIn: React.FC = () => {
    return (
        <div className="">
            <h4 className="">Área de Login</h4>
            <p className="">
                Digite seu endereço de usuário e senha para acessar a conta.
            </p>

            <form action="#">
                <div className="form-group">
                    <label htmlFor="emailaddress">Login</label>
                    <input
                        className="form-control"
                        type="text"
                        id="login"
                        value=""
                        required
                        placeholder="Digite seu Login"
                    />
                </div>

                <div className="form-group">
                    <a
                        href="/auth/forgot-password"
                        className="text-muted float-right"
                    >
                        <small>Esqueceu sua senha?</small>
                    </a>
                    <label htmlFor="password">Senha</label>
                    <div className="input-group input-group-merge">
                        <input
                            type="text"
                            id="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            autoComplete=""
                        />
                        <div>
                            <div className="input-group-text">
                                <span className="password-eye" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group mb-3 text-center">
                    <button className="btn btn-primary btn-block" type="button">
                        Entrar
                    </button>
                </div>

            </form>
        </div>
    )
}

export default SignIn