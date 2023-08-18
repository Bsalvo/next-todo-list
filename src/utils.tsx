
/**
 * Verifica qual tipo de erro foi retornado pelo throw Error()
 * e retorna o erro em formato string
 * 
 * @author  Bruno Salvo
 * @since   1.0.0 17/08/2023
 * @version 1.0.0
 */
export const getErrorMessage = (error: unknown): string => {

    let message: string

    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message)
    } else if (typeof error === 'string') {
        message = error
    } else {
        message = 'Alguma coisa deu errado'
    }
    return message

}