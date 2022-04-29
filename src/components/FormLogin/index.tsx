import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";

import { FormValues } from "../../types/FormLogin";
import { ISession } from "../../types/Session";

import { CREATE_SESSION } from "../../store/sessionSlice";

import { Box, Title, AccessAccount, Form, InputEmail, InputPassword, FormOptions, NoAccount, ButtonSubmit } from './style';

export default function FormLogin(): ReactElement {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const dispatch = useDispatch();
    const session = useSelector(({session}: {session: ISession}) => session);

    if(session.isLogged) {
        return <Navigate to="/characters" />
    }

    const onSubmit = handleSubmit<FormValues>( sessionData => {
        dispatch(CREATE_SESSION(sessionData));
    });

    return (
        <Box>
            <Title>Bem vindo(a) de volta!</Title>
            <AccessAccount>Acesso sua conta:</AccessAccount>
            <Form onSubmit={onSubmit}>
                <label htmlFor="email">
                    <InputEmail 
                        type="email" 
                        {...register("email", {
                            required: "Campo obrigatório!",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Formato invalido, digite um e-mail válido!"
                            }
                        })} 
                        placeholder="Usuário"
                        />
                    {errors?.email && <p className="error-message"> {errors.email.message} </p>}
                </label>
                <label htmlFor="password">
                    <InputPassword 
                        type="password" 
                        {...register("password", {
                            required: "Campo obrigatório!",
                            minLength: {
                                value: 5,
                                message: "A senha precisa ter ao minímo 8 caracteres"
                              }
                        })}  
                        placeholder="Senha"
                    />
                    {errors?.password && <p className="error-message"> {errors.password.message}  </p>}
                </label>
                <FormOptions>
                    <div className="save-login">
                        <label htmlFor="saveLogin">
                            <input type="checkbox" name="saveLogin" />
                        </label>
                        <span>Savar login</span>
                    </div>
                    <a href="#" className="forgot-password">Esquecia a senha</a>
                </FormOptions>
                <ButtonSubmit type="submit">Entrar</ButtonSubmit>
            </Form>
            <NoAccount> Ainda nao tem o login? <a href="" className="signup">Cadastre-se</a></NoAccount>
        </Box>
    )
}