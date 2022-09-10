import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe("Greet", () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })

    test('renders with a name', () => {
        render(<Greet name="Huseyin" />)
        const textElement = screen.getByText('Hello Huseyin')
        expect(textElement).toBeInTheDocument()
    })
})


