import React from 'react';

const emptySquare = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  </svg>
);
const slashSquare = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-slash-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>
);
const xSquare = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
);
const fillSquare = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
  </svg>
);

export enum HealthSquareType {
  EmptySquare,
  SlashSquare,
  XSquare,
  FillSquare,
}

export interface HealthSquareProps {
  initialIcon: HealthSquareType
}

const healthTypeToIcon = (healthType: HealthSquareType) => {
  switch(healthType) {
    case HealthSquareType.EmptySquare:
      return emptySquare;
    case HealthSquareType.SlashSquare:
      return slashSquare;
    case HealthSquareType.XSquare:
      return xSquare;
    case HealthSquareType.FillSquare:
      return fillSquare;
    default:
      throw new Error(`Unknown health type: ${healthType}`);
  }
}

export const HealthSquare: React.FunctionComponent<HealthSquareProps> = (props) => {
  const [iconType, setIconType] = React.useState(props.initialIcon);
  const icon = React.useMemo(() => {
    return healthTypeToIcon(iconType);
  }, [iconType]);

  return (
    <div className="dropdown health-square">
      <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {icon}
      </button>
      <ul className="dropdown-menu">
        <li><button onClick={() => setIconType(HealthSquareType.EmptySquare)} className="dropdown-item" type="button">{emptySquare}</button></li>
        <li><button onClick={() => setIconType(HealthSquareType.SlashSquare)} className="dropdown-item" type="button">{slashSquare}</button></li>
        <li><button onClick={() => setIconType(HealthSquareType.XSquare)}     className="dropdown-item" type="button">{xSquare}</button></li>
        <li><button onClick={() => setIconType(HealthSquareType.FillSquare)}  className="dropdown-item" type="button">{fillSquare}</button></li>
      </ul>
    </div>
  );
}