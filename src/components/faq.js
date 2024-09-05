import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box>
            <h4>
                Quid du Fonarev ?
            </h4>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          Le Fonds National des Réparations des Victimes des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l'humanité (FONAREV), est un établissement public novateur dédié à la protection et à la réparation des victimes de violences sexuelles, placé sous tutelle du ministère des Droits Humains, le Fonarev a pour missions essentielles :
            <ul>
                <li>
                Identifier les victimes ;
                </li>
                <li>
                Aider les victimes à avoir accès à la justice, aider les victimes à être indemnisées et à recouvrer les dommages intérêts leur alloué ; 
                </li>
                <li>
                Aider les victimes à bénéficier gratuitement d'un accompagnement et d'une assistance judiciaire appropriée assurée par des avocats ;
                </li>
                <li>
                Allouer des réparations aux victimes. 
                </li>
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Box>
            <h4>
                Quel est le statut du Fonarev ? est-ce un organisme ? est-ce une ONG ?
            </h4>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Le Fonarev est un établissement public institué par la loi n°22/065 du 26 décembre 2022. Il est sous tutelle du ministère ayant les Droits Humains dans ses attributions. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Box>
            <h4>
            Quelles sont les sources de financement du Fonarev ?
            </h4>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          Les ressources du Fond proviennent de plusieurs sources notamment de 
          <ul>
                <li>
                    11% de la redevance minière versée par le titulaire du titre minier ;
                </li>
                <li>
                    2% de la partie réservée à l'Etat congolais de bénéfices résultant de la vente par les opérateurs économiques privés des certificats du carbone ; 
                </li>
                <li>
                    Sommes collectées exceptionnellement par l'élan de solidarité nationale et internationale ;
                </li>
                <li>
                    Contribution des bailleurs de fonds, organisation internationale et philanthropiques ;
                </li>
                <li>
                    Les dons et legs
                </li>
            </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Box>
            <h4>
            Quel est le champ d'action du Fonarev ?
            </h4>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <p>
          Le Fonarev s'occupe des victimes de toute l'étendue de la République et ce, à partir de 1993 à ce jour.
            </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Box>
            <h4>
            Quels sont les types de victimes prises en charge par le Fonarev ?
            </h4>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
        Il existe deux types de victimes : les victimes directes et les victimes indirectes 
          <ul>
                <li>
                Les victimes directes sont les victimes des violences sexuelles liées aux conflits, les victimes des crimes contre la paix et la sécurité de l'humanité, les victimes de tortures et de tout dommage ayant entrainé ou non une invalidité en temps de conflits., les personnes qui, en période de conflit, ont connu des actes de pillages, de destruction de leurs biens immeubles et meubles tandis que
                </li>
                <li>
                Les victimes indirectes sont les parents de victimes directes (le conjoint survivant, les enfants, frères, sœurs… de cujus). 
                </li>
            </ul>
   



        </AccordionDetails>
      </Accordion>
    </div>
  );
}
