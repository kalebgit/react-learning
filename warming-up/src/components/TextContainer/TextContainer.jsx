

export default function TextContainer({container = 'p', children, ...props}){
    const Container = container
    return <Container {...props}>{children}</Container>
}