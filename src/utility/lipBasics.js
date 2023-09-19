export function withDefault(value, defaultValue = false, undefinedValue = undefined) {
    return (value === undefinedValue ? defaultValue : value);
}
