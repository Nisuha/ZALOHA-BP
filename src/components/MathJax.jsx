import { MathJax, MathJaxContext } from 'better-react-mathjax';


const configMathjax = {
    loader: { load: ["[tex]/bussproofs"] },
    tex: { packages: { "[+]": ["bussproofs"] } },
  };

const Math = ({content}) => {

    return (
        <div>
            <MathJaxContext config={configMathjax}>
            <MathJax>{content}</MathJax>
            </MathJaxContext>
        </div>
    );
}

export default Math;
