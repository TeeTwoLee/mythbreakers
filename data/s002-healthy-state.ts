import { HealthSquareProps, HealthSquareType } from "../components/HealthSquare";

export const healthyState: HealthSquareProps[] = [];
healthyState.length = 12;
healthyState.fill({ initialIcon: HealthSquareType.EmptySquare });
