import './mylabel.css';


export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Opciones para el tamaño de la fuente de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Indica si quieres que el texto este en capitalizado.
     */
    allCaps?: boolean;
    /**
     * Opciones para el color de texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color dinamico de las fuente
     */
    fontColor?: string;
}



const MyLabel = ({

    allCaps = false,
    color = 'primary',
    fontColor = '#000',
    label = 'No label',
    size = 'normal',

}: Props) => {
    return (
        <span
            className={`label text-${color} ${size} ${allCaps && 'uppercase'}  `}
            style={{ color: fontColor }}
        >
            {label}
        </span>
    )
}

export { MyLabel }

