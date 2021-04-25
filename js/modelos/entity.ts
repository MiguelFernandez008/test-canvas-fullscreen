export interface GameEntity {
    render(): void;
    update(delta: number): void;
    resize(): void;
}