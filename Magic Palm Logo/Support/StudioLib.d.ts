/**
 * @module Built-In
 * Lens API Version: 356
 * Client Version: 13.86
*/
/**
 * Returns the time in seconds since the lens was started.
 * 
 * @constant
 */
declare function getTime(): number;
/**
 * Get current time in nanoseconds. Useful when optimizing a Lens to understand its performance.
 * 
 * @constant
 */
declare function getRealTimeNanos(): number;
/**
 * Returns the time difference in seconds between the current frame and previous frame.
 * 
 * @constant
 */
declare function getDeltaTime(): number;
/**
 * The start time of the Lens since UNIX Epoch in seconds.
 * 
 * @constant
 */
declare function getAbsoluteStartTime(): number;
/**
 * Unhandled Promise rejections are silently ignored by default.
 * `failAsync` rethrows the error, ensuring it results in an unhandled exception.
 * 
 * @remarks
 * Note: error is not rethrown immediately, some pending JS code might still be executed.
 * Use it as a default `.catch()` handler when no other error handling is provided.
 * 
 * @example
 * ```js
 * someAsyncFunction().catch(failAsync);
 * ```
 * 
 */
declare function failAsync(error: any): void;
/**
 * Load a JavaScript module. Used for importing another JavaScript file found in the Resources panel to be used in the current script. Similar to `require` found in CommonJS specification. @remarks You can access Lens Studio specific modules (like `RemoteServiceModule`) using the `LensStudio` prefix, such as: `require("LensStudio:RemoteServiceModule)`. @remarks You can use the modules name or path, meaning you can have two version of the same module in your project if needed. Both “by name” or “by path” will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](/lens-studio/features/scripting/script-overview) to learn more.
 * 
 * @noNode
 */
declare function require(moduleName: ScriptAsset | string): any;
/**
 * Load a script by name or path in order to use that type to create or get a component at runtime. 
 * 
 * You can use the modules name or path. Both “by name” or “by path” will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](/lens-studio/features/scripting/script-overview) to learn more.
 */
declare function requireType(name: string): string;
/**
 * Load an asset like a `Texture`, `Material`, or `MLAsset` directly from script. 
 * 
 * You can use the modules name or path. Both “by name” or “by path” will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](/lens-studio/essential-skills/scripting/script-overview) to learn more.
 */
declare function requireAsset(name: string): Asset;
/**
 * Prints out a message to the Logger window.
 */
declare function print(message: any): void;
/**
 * Returns true if the passed in object is null or destroyed. Useful as a safe way to check if a {@link SceneObject} or {@link Component} has been destroyed.
 */
declare function isNull(reference: any): boolean;
/**
 * Base class for objects representing Script data.
 */
declare class ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the name of this object's type.
     */
    getTypeName(): string;
    /**
     * Returns true if the object matches or derives from the passed in type.
     */
    isOfType(type: string): boolean;
    /**
     * Returns true if this object is the same as `other`. Useful for checking if two references point to the same thing.
     */
    isSame(other: ScriptObject): boolean;
}

/**
 * A two dimensional vector.
 * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
 */
declare class vec2 {
    /**
     * Returns a new vector containing the largest value of each component in the two vectors.
     */
    static max(a: vec2, b: vec2): vec2;
    /**
     * Returns a new vector containing the smallest value of each component in the two vectors.
     */
    static min(a: vec2, b: vec2): vec2;
    /**
     * Linearly interpolates between the two vectors `from` and `to` by the factor `t`.
     */
    static lerp(from: vec2, to: vec2, t: number): vec2;
    /**
     * Returns the vector (1, 1).
     */
    static one(): vec2;
    /**
     * Returns the vector (0, 0).
     */
    static zero(): vec2;
    /**
     * Returns the vector (0, 1).
     */
    static up(): vec2;
    /**
     * Returns the vector (0, -1).
     */
    static down(): vec2;
    /**
     * Returns the vector (-1, 0).
     */
    static left(): vec2;
    /**
     * Returns the vector (1, 0).
     */
    static right(): vec2;
    /**
     * Generates a random 2D unit vector. Equivalent to a random point on a unit-radius circle. @deprecated Use {@link Math.randomUnitVector} or {@link Math.setRandomUnitVector} instead.
     * 
     * @deprecated
     */
    static randomDirection(): vec2;
    /**
     * Generates a random 2D unit vector. Equivalent to a random point on a unit-radius circle.
     */
    static randomUnitVector(): vec2;
        constructor(x: number, y: number);
    /**
     * x component of the vec2.
     */
    x: number;
    /**
     * y component of the vec2.
     */
    y: number;
    /**
     * Alternate name for the x component.
     */
    r: number;
    /**
     * Alternate name for the y component.
     */
    g: number;
    /**
     * Returns a string representation of the vector.
     */
    toString(): string;
    /**
     * Sets the `x` and `y` components of this vector. Omit parameters or pass null or undefined to leave a component unchanged.
     */
    setXY(x?: number, y?: number): void;
    /**
     * Adds `vec` to this vector in place.
     */
    addInPlace(vec: vec2): void;
    /**
     * Returns the vector plus `vec`.
     */
    add(vec: vec2): vec2;
    /**
     * Subtracts `vec` from this vector in place.
     */
    subInPlace(vec: vec2): void;
    /**
     * Returns the vector minus `vec`.
     */
    sub(vec: vec2): vec2;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    multInPlace(vec: vec2): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    mult(vec: vec2): vec2;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    scaleInPlace(vec: vec2): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    scale(vec: vec2): vec2;
    /**
     * Divides this vector by `vec` component-wise in place.
     */
    divInPlace(vec: vec2): void;
    /**
     * Returns the division of the vector by the vector `vec`.
     */
    div(vec: vec2): vec2;
    /**
     * Multiplies the components of this vector by `scale` in place.
     */
    uniformScaleInPlace(scale: number): void;
    /**
     * Multiplies the components of this vector by `scale`.
     */
    uniformScale(scale: number): vec2;
    /**
     * Returns whether this is equal to `vec`.
     */
    equal(vec: vec2): boolean;
    /**
     * Returns the length of the vector.
     */
    length: number;
    /**
     * Clamps this vector's length to `length` in place.
     */
    clampLengthInPlace(length: number): void;
    /**
     * Returns a copy of the vector with its length clamped to `length`.
     */
    clampLength(length: number): vec2;
    /**
     * Returns the squared length of the vector.
     */
    lengthSquared: number;
    /**
     * Scales this vector's length to 1 in place.
     */
    normalizeInPlace(): void;
    /**
     * Returns a copy of the vector with its length scaled to 1.
     */
    normalize(): vec2;
    /**
     * Returns the angle between the vector and `vec`.
     */
    angleTo(vec: vec2): number;
    /**
     * Returns the distance between the vector and the vector `vec`.
     */
    distance(vec: vec2): number;
    /**
     * Like `distance()`, but returns the squared distance between vectors.
     */
    distanceSquared(vec: vec2): number;
    /**
     * Returns the dot product of the vector and `vec`.
     */
    dot(vec: vec2): number;
    /**
     * Moves this vector towards `point` by `magnitude` in place.
     */
    moveTowardsInPlace(point: vec2, magnitude: number): void;
    /**
     * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
     */
    moveTowards(target: vec2, step: number): vec2;
    /**
     * Linearly interpolates this vector towards `target` by factor `t` in place.
     */
    lerpInPlace(target: vec2, t: number): void;
    /**
     * Projects this vector onto the vector `onto` in place.
     */
    projectInPlace(onto: vec2): void;
    /**
     * Returns a copy of the vector projected onto the vector `onto`.
     */
    project(onto: vec2): vec2;
    /**
     * Projects this vector onto the plane defined by `planeNormal` in place.
     */
    projectOnPlaneInPlace(planeNormal: vec2): void;
    /**
     * Projects the vector onto the plane defined by `planeNormal`.
     */
    projectOnPlane(planeNormal: vec2): vec2;
    /**
     * Reflects this vector across the plane defined by `planeNormal` in place.
     */
    reflectInPlace(planeNormal: vec2): void;
    /**
     * Returns a copy of the vector reflected across the plane defined by `planeNormal`.
     */
    reflect(planeNormal: vec2): vec2;
    /**
     * Returns a copy of this vector.
     */
    clone(): vec2;
    /**
     * Copies matching components from the `source` vector, ignoring extra `source` components. For example, copying a `vec3` into a `vec2` will update `x` and `y` but ignore `z`.
     */
    copyFrom(source: vec3 | vec4 | vec2): void;
    /**
     * Sets the `x` and `y` components of this vector to `scalar`.
     */
    fill(scalar: number): void;
    /**
     * Sets this vector to a random unit vector in place. Equivalent to a random point on a unit-radius circle.
     */
    setRandomUnitVector(): void;
}

/**
 * A three dimensional vector.
 * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
 */
declare class vec3 {
    /**
     * Makes the vectors `vecA` and `vecB` normalized and orthogonal to each other.
     */
    static orthonormalize(a: vec3, b: vec3): void;
    /**
     * Returns a new vector containing the largest value of each component in the two vectors.
     */
    static max(a: vec3, b: vec3): vec3;
    /**
     * Returns a new vector containing the smallest value of each component in the two vectors.
     */
    static min(a: vec3, b: vec3): vec3;
    /**
     * Linearly interpolates between the two vectors `from` and `to` by the factor `t`.
     */
    static lerp(from: vec3, to: vec3, t: number): vec3;
    /**
     * Spherically interpolates between the two vectors `from` and `to` by the factor `t`.
     */
    static slerp(from: vec3, to: vec3, t: number): vec3;
    /**
     * Returns the vector (1, 1, 1).
     */
    static one(): vec3;
    /**
     * Returns the vector (0, 0, 0).
     */
    static zero(): vec3;
    /**
     * Returns the vector (0, 1, 0).
     */
    static up(): vec3;
    /**
     * Returns the vector (0, -1, 0).
     */
    static down(): vec3;
    /**
     * Returns the vector (-1, 0, 0).
     */
    static left(): vec3;
    /**
     * Returns the vector (1, 0, 0).
     */
    static right(): vec3;
    /**
     * Returns the vector (0, 0, -1).
     */
    static back(): vec3;
    /**
     * Returns the vector (0, 0, 1).
     */
    static forward(): vec3;
    /**
     * Generates a random 3D unit vector. Equivalent to a random point on a unit-radius sphere. @deprecated Use {@link Math.randomUnitVector} or {@link Math.setRandomUnitVector} instead.
     * 
     * @deprecated
     */
    static randomDirection(): vec3;
    /**
     * Generates a random 3D unit vector. Equivalent to a random point on a unit-radius sphere.
     */
    static randomUnitVector(): vec3;
        constructor(x: number, y: number, z: number);
    /**
     * x component of the vec3.
     */
    x: number;
    /**
     * y component of the vec3.
     */
    y: number;
    /**
     * z component of the vec3.
     */
    z: number;
    /**
     * Alternate name for the x component.
     */
    r: number;
    /**
     * Alternate name for the y component.
     */
    g: number;
    /**
     * Alternate name for the z component.
     */
    b: number;
    /**
     * Returns a string representation of the vector.
     */
    toString(): string;
    /**
     * Sets this vector to the cross product of this vector and `vec` in place.
     */
    crossInPlace(vec: vec3): void;
    /**
     * Returns the cross product of the vector and `vec`
     */
    cross(vec: vec3): vec3;
    /**
     * Rotates this vector towards the `target` vector by `step` radians in place.
     * 
     * * The vectors may be non-normalized. The function preserves this vector's magnitude. 
     * * This prevents overshoot. If `step` exceeds the angle between vectors, it stops at the `target` direction.
     * * If `step` is negative, this rotates this vector away from `target`. It stops when the direction is precisely opposite to `target`.
     * * If the vectors are in opposite directions, this vector is rotated along an arbitrary (but consistent) axis.
     * * If either vector is zero magnitude, this vector is not modified.
     */
    rotateTowardsInPlace(target: vec3, step: number): void;
    /**
     * Adds `vec` to this vector in place.
     */
    addInPlace(vec: vec3): void;
    /**
     * Returns the vector plus `vec`.
     */
    add(vec: vec3): vec3;
    /**
     * Subtracts `vec` from this vector in place.
     */
    subInPlace(vec: vec3): void;
    /**
     * Returns the vector minus `vec`.
     */
    sub(vec: vec3): vec3;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    multInPlace(vec: vec3): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    mult(vec: vec3): vec3;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    scaleInPlace(vec: vec3): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    scale(vec: vec3): vec3;
    /**
     * Divides this vector by `vec` component-wise in place.
     */
    divInPlace(vec: vec3): void;
    /**
     * Returns the division of the vector by the vector `vec`.
     */
    div(vec: vec3): vec3;
    /**
     * Multiplies the components of this vector by `scale` in place.
     */
    uniformScaleInPlace(scale: number): void;
    /**
     * Multiplies the components of this vector by `scale`.
     */
    uniformScale(scale: number): vec3;
    /**
     * Returns whether this is equal to `vec`.
     */
    equal(vec: vec3): boolean;
    /**
     * Returns the length of the vector.
     */
    length: number;
    /**
     * Clamps this vector's length to `length` in place.
     */
    clampLengthInPlace(length: number): void;
    /**
     * Returns a copy of the vector with its length clamped to `length`.
     */
    clampLength(length: number): vec3;
    /**
     * Returns the squared length of the vector.
     */
    lengthSquared: number;
    /**
     * Scales this vector's length to 1 in place.
     */
    normalizeInPlace(): void;
    /**
     * Returns a copy of the vector with its length scaled to 1.
     */
    normalize(): vec3;
    /**
     * Returns the angle between the vector and `vec`.
     */
    angleTo(vec: vec3): number;
    /**
     * Returns the distance between the vector and the vector `vec`.
     */
    distance(vec: vec3): number;
    /**
     * Like `distance()`, but returns the squared distance between vectors.
     */
    distanceSquared(vec: vec3): number;
    /**
     * Returns the dot product of the vector and `vec`.
     */
    dot(vec: vec3): number;
    /**
     * Moves this vector towards `point` by `magnitude` in place.
     */
    moveTowardsInPlace(point: vec3, magnitude: number): void;
    /**
     * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
     */
    moveTowards(target: vec3, step: number): vec3;
    /**
     * Linearly interpolates this vector towards `target` by factor `t` in place.
     */
    lerpInPlace(target: vec3, t: number): void;
    /**
     * Projects this vector onto the vector `onto` in place.
     */
    projectInPlace(onto: vec3): void;
    /**
     * Returns a copy of the vector projected onto the vector `onto`.
     */
    project(onto: vec3): vec3;
    /**
     * Projects this vector onto the plane defined by `planeNormal` in place.
     */
    projectOnPlaneInPlace(planeNormal: vec3): void;
    /**
     * Projects the vector onto the plane defined by `planeNormal`.
     */
    projectOnPlane(planeNormal: vec3): vec3;
    /**
     * Reflects this vector across the plane defined by `planeNormal` in place.
     */
    reflectInPlace(planeNormal: vec3): void;
    /**
     * Returns a copy of the vector reflected across the plane defined by `planeNormal`.
     */
    reflect(planeNormal: vec3): vec3;
    /**
     * Returns a copy of this vector.
     */
    clone(): vec3;
    /**
     * Copies matching components from the `source` vector, leaving other destination components untouched and ignoring extra `source` components. For example, copying a `vec2` leaves `z` unchanged, while copying a `vec4` ignores `w`.
     */
    copyFrom(source: vec3 | vec4 | vec2): void;
    /**
     * Sets the `x`, `y`, and `z` components of this vector to `scalar`.
     */
    fill(scalar: number): void;
    /**
     * Returns a copy of the vector rotated towards the `target` vector by `step` radians.
     * 
     * * The vectors may be non-normalized. The function always returns a vector with the source vector's magnitude.
     * * This prevents overshoot. If `step` exceeds the angle between vectors, it stops at the `target` direction.
     * * If `step` is negative, this rotates the source vector away from `target`. It stops when the direction is precisely opposite to `target`.
     * * If the vectors are in opposite directions, the result is rotated along an arbitrary (but consistent) axis.
     * * If either vector is zero magnitude, it returns the source vector.
     */
    rotateTowards(target: vec3, step: number): vec3;
    /**
     * Spherically interpolates this vector towards `target` by factor `t` in place. Preserves vector magnitude by interpolating both direction and length.
     */
    slerpInPlace(target: vec3, t: number): void;
    /**
     * Sets this vector to a random unit vector in place. Equivalent to a random point on a unit-radius sphere.
     */
    setRandomUnitVector(): void;
    /**
     * Sets the `x`, `y`, and `z` components of this vector. Omit parameters or pass null or undefined to leave a component unchanged.
     */
    setXYZ(x?: number, y?: number, z?: number): void;
    /**
     * Alternative to `setXYZ`. Sets the `x`, `y`, and `z` components of this vector. Omit parameters or pass null or undefined to leave a component unchanged.
     */
    setRGB(r?: number, g?: number, b?: number): void;
}

/**
 * A four dimensional vector.
 * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
 */
declare class vec4 {
    /**
     * Returns a new vector containing the largest value of each component in the two vectors.
     */
    static max(a: vec4, b: vec4): vec4;
    /**
     * Returns a new vector containing the smallest value of each component in the two vectors.
     */
    static min(a: vec4, b: vec4): vec4;
    /**
     * Linearly interpolates between the two vectors `from` and `to` by the factor `t`.
     */
    static lerp(from: vec4, to: vec4, t: number): vec4;
    /**
     * Returns the vector (1, 1, 1, 1).
     */
    static one(): vec4;
    /**
     * Returns the vector (0, 0, 0, 0).
     */
    static zero(): vec4;
        constructor(x: number, y: number, z: number, w: number);
    /**
     * x component of the vec4.
     */
    x: number;
    /**
     * y component of the vec4.
     */
    y: number;
    /**
     * z component of the vec4.
     */
    z: number;
    /**
     * w component of the vec4.
     */
    w: number;
    /**
     * Alternate name for the x component.
     */
    r: number;
    /**
     * Alternate name for the y component.
     */
    g: number;
    /**
     * Alternate name for the z component.
     */
    b: number;
    /**
     * Alternate name for the w component.
     */
    a: number;
    /**
     * Returns a string representation of the vector.
     */
    toString(): string;
    /**
     * Sets the `x`, `y`, `z`, and `w` components of this vector. Omit parameters or pass null or undefined to leave a component unchanged.
     */
    setXYZW(x?: number, y?: number, z?: number, w?: number): void;
    /**
     * Alternative to `setXYZW`. Sets the `x`, `y`, `z` and `w` components of this vector. Omit parameters or pass null or undefined to leave a component unchanged.
     */
    setRGBA(r?: number, g?: number, b?: number, a?: number): void;
    /**
     * Adds `vec` to this vector in place.
     */
    addInPlace(vec: vec4): void;
    /**
     * Returns the vector plus `vec`.
     */
    add(vec: vec4): vec4;
    /**
     * Subtracts `vec` from this vector in place.
     */
    subInPlace(vec: vec4): void;
    /**
     * Returns the vector minus `vec`.
     */
    sub(vec: vec4): vec4;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    multInPlace(vec: vec4): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    mult(vec: vec4): vec4;
    /**
     * Multiplies this vector by `vec` component-wise in place.
     */
    scaleInPlace(vec: vec4): void;
    /**
     * Returns the component-wise multiplication product of the vector and `vec`.
     */
    scale(vec: vec4): vec4;
    /**
     * Divides this vector by `vec` component-wise in place.
     */
    divInPlace(vec: vec4): void;
    /**
     * Returns the division of the vector by the vector `vec`.
     */
    div(vec: vec4): vec4;
    /**
     * Multiplies the components of this vector by `scale` in place.
     */
    uniformScaleInPlace(scale: number): void;
    /**
     * Multiplies the components of this vector by `scale`.
     */
    uniformScale(scale: number): vec4;
    /**
     * Returns whether this is equal to `vec`.
     */
    equal(vec: vec4): boolean;
    /**
     * Returns the length of the vector.
     */
    length: number;
    /**
     * Clamps this vector's length to `length` in place.
     */
    clampLengthInPlace(length: number): void;
    /**
     * Returns a copy of the vector with its length clamped to `length`.
     */
    clampLength(length: number): vec4;
    /**
     * Returns the squared length of the vector.
     */
    lengthSquared: number;
    /**
     * Scales this vector's length to 1 in place.
     */
    normalizeInPlace(): void;
    /**
     * Returns a copy of the vector with its length scaled to 1.
     */
    normalize(): vec4;
    /**
     * Returns the angle between the vector and `vec`.
     */
    angleTo(vec: vec4): number;
    /**
     * Returns the distance between the vector and the vector `vec`.
     */
    distance(vec: vec4): number;
    /**
     * Like `distance()`, but returns the squared distance between vectors.
     */
    distanceSquared(vec: vec4): number;
    /**
     * Returns the dot product of the vector and `vec`.
     */
    dot(vec: vec4): number;
    /**
     * Moves this vector towards `point` by `magnitude` in place.
     */
    moveTowardsInPlace(point: vec4, magnitude: number): void;
    /**
     * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
     */
    moveTowards(target: vec4, step: number): vec4;
    /**
     * Linearly interpolates this vector towards `target` by factor `t` in place.
     */
    lerpInPlace(target: vec4, t: number): void;
    /**
     * Projects this vector onto the vector `onto` in place.
     */
    projectInPlace(onto: vec4): void;
    /**
     * Returns a copy of the vector projected onto the vector `onto`.
     */
    project(onto: vec4): vec4;
    /**
     * Projects this vector onto the plane defined by `planeNormal` in place.
     */
    projectOnPlaneInPlace(planeNormal: vec4): void;
    /**
     * Projects the vector onto the plane defined by `planeNormal`.
     */
    projectOnPlane(planeNormal: vec4): vec4;
    /**
     * Reflects this vector across the plane defined by `planeNormal` in place.
     */
    reflectInPlace(planeNormal: vec4): void;
    /**
     * Returns a copy of the vector reflected across the plane defined by `planeNormal`.
     */
    reflect(planeNormal: vec4): vec4;
    /**
     * Returns a copy of this vector.
     */
    clone(): vec4;
    /**
     * Copies matching components from the `source` vector, leaving other destination components untouched. For example, copying a `vec3` into a `vec4` will update `x`, `y`, and `z` but leave `w` unchanged.
     */
    copyFrom(source: vec3 | vec4 | vec2): void;
    /**
     * Sets the `x`, `y`, `z`, and `w` components of this vector to `scalar`.
     */
    fill(scalar: number): void;
}

/**
 * A vector containing 4 boolean values.
 */
declare class vec4b {
        constructor(x: boolean, y: boolean, z: boolean, w: boolean);
    /**
     * x component of the vec4b.
     */
    x: boolean;
    /**
     * y component of the vec4b.
     */
    y: boolean;
    /**
     * z component of the vec4b.
     */
    z: boolean;
    /**
     * w component of the vec4b.
     */
    w: boolean;
    /**
     * Alternate name for the x component.
     */
    r: boolean;
    /**
     * Alternate name for the y component.
     */
    g: boolean;
    /**
     * Alternate name for the z component.
     */
    b: boolean;
    /**
     * Alternate name for the w component.
     */
    a: boolean;
    /**
     * Returns a string representation of the vector.
     */
    toString(): string;
}

/**
 * A quaternion, used to represent rotation.
 */
declare class quat {
    /**
     * Returns the angle between `a` and `b`.
     */
    static angleBetween(a: quat, b: quat): number;
    /**
     * Returns a new quat with angle `angle` and axis `axis`.
     */
    static angleAxis(angle: number, axis: vec3): quat;
    /**
     * Returns a new quat using the euler angles `x`, `y`, `z` (in radians).
     */
    static fromEulerAngles(x: number, y: number, z: number): quat;
    /**
     * Returns a new quat using the euler angle `eulerVec` (in radians).
     */
    static fromEulerVec(eulerAngles: vec3): quat;
    /**
     * Returns a rotation quat between direction vectors `from` and `to`.
     */
    static rotationFromTo(from: vec3, to: vec3): quat;
    /**
     * Returns a new quat with a forward vector `forward` and up vector `up`.
     */
    static lookAt(forward: vec3, up: vec3): quat;
    /**
     * Returns a new quat linearly interpolated between `a` and `b`.
     */
    static lerp(a: quat, b: quat, time: number): quat;
    /**
     * Returns a new quat spherically linearly interpolated between `a` and `b`.
     */
    static slerp(a: quat, b: quat, time: number): quat;
    /**
     * Returns the identity quaternion.
     */
    static quatIdentity(): quat;
    /**
     * Creates a quaternion from a matrix.
     */
    static fromRotationMat(rotationMat: mat3): quat;
    /**
     * Creates a quaternion from a {@link mat4}.
     */
    static fromRotationMat4(rotationMat4: mat4): quat;
    /**
     * Returns a new quat using the euler angles `x`, `y`, `z` (in radians).
     * @deprecated Use {@link quat.fromEulerAngles} instead.
     * 
     * @deprecated
     */
    static quatFromEuler(x: number, y: number, z: number): quat;
        constructor(w: number, x: number, y: number, z: number);
    /**
     * x component of the quat.
     */
    x: number;
    /**
     * y component of the quat.
     */
    y: number;
    /**
     * z component of the quat.
     */
    z: number;
    /**
     * w component of the quat.
     */
    w: number;
    /**
     * Returns an inverted version of the quat.
     */
    invert(): quat;
    /**
     * Normalizes the quat.
     */
    normalize(): void;
    /**
     * Returns a string representation of the quat.
     */
    toString(): string;
    /**
     * Returns an euler angle representation of the quat, in radians.
     */
    toEulerAngles(): vec3;
    /**
     * Returns the rotation angle of the quat.
     */
    getAngle(): number;
    /**
     * Returns the rotation axis of the quat.
     */
    getAxis(): vec3;
    /**
     * Returns the dot product of the two quats.
     */
    dot(quat: quat): number;
    /**
     * Returns the product of this quat and `b`.
     */
    multiply(quat: quat): quat;
    /**
     * Returns the result of rotating direction vector `vec3` by this quat.
     */
    multiplyVec3(vec3: vec3): vec3;
    /**
     * Returns whether this quat and `b` are equal.
     */
    equal(quat: quat): boolean;
    /**
     * Returns an euler angle representation of the quat, in radians. @deprecated Use {@link Math.toEulerAngles} instead.
     * 
     * @deprecated
     */
    toEuler(): vec3;
}

/**
 * A 2x2 matrix.
 */
declare class mat2 {
    /**
     * Returns the identity matrix.
     */
    static identity(): mat2;
    /**
     * Returns a matrix with all zero values.
     */
    static zero(): mat2;
        constructor();
    /**
     * Returns a string representation of the matrix.
     */
    description: string;
    /**
     * The first column of the matrix.
     */
    column0: vec2;
    /**
     * The second column of the matrix.
     */
    column1: vec2;
    /**
     * Returns the result of adding the two matrices together.
     */
    add(mat: mat2): mat2;
    /**
     * Returns the result of subtracting the two matrices.
     */
    sub(mat: mat2): mat2;
    /**
     * Returns the result of multiplying the two matrices.
     */
    mult(mat: mat2): mat2;
    /**
     * Returns the result of dividing the two matrices.
     */
    div(mat: mat2): mat2;
    /**
     * Returns the determinant of the matrix.
     */
    determinant(): number;
    /**
     * Returns the inverse of the matrix.
     */
    inverse(): mat2;
    /**
     * Returns the transpose of this matrix.
     */
    transpose(): mat2;
    /**
     * Returns whether the two matrices are equal.
     */
    equal(mat: mat2): boolean;
    /**
     * Returns the result of scalar multiplying the matrix.
     */
    multiplyScalar(scalar: number): mat2;
    /**
     * Returns a string representation of the matrix.
     */
    toString(): string;
}

/**
 * A 3x3 matrix.
 */
declare class mat3 {
    /**
     * Returns the identity matrix.
     */
    static identity(): mat3;
    /**
     * Returns a matrix with all zero values.
     */
    static zero(): mat3;
    /**
     * Returns a matrix representing the specified rotation.
     */
    static makeFromRotation(rotation: quat): mat3;
        constructor();
    /**
     * Returns a string representation of the matrix.
     */
    description: string;
    /**
     * The first column of the matrix.
     */
    column0: vec3;
    /**
     * The second column of the matrix.
     */
    column1: vec3;
    /**
     * The third column of the matrix.
     */
    column2: vec3;
    /**
     * Returns the result of adding the two matrices together.
     */
    add(mat: mat3): mat3;
    /**
     * Returns the result of subtracting the two matrices.
     */
    sub(mat: mat3): mat3;
    /**
     * Returns the result of multiplying the two matrices.
     */
    mult(mat: mat3): mat3;
    /**
     * Returns the result of dividing the two matrices.
     */
    div(mat: mat3): mat3;
    /**
     * Returns the determinant of the matrix.
     */
    determinant(): number;
    /**
     * Returns the inverse of the matrix.
     */
    inverse(): mat3;
    /**
     * Returns the transpose of this matrix.
     */
    transpose(): mat3;
    /**
     * Returns whether the two matrices are equal.
     */
    equal(mat: mat3): boolean;
    /**
     * Returns the result of scalar multiplying the matrix.
     */
    multiplyScalar(scalar: number): mat3;
    /**
     * Returns a string representation of the matrix.
     */
    toString(): string;
}

/**
 * A 4x4 matrix.
 */
declare class mat4 {
    /**
     * Create a 4x4 matrix from four column vectors.
     */
    static fromColumns(column0: vec4, column1: vec4, column2: vec4, column3: vec4): mat4;
    /**
     * Create a 4x4 matrix from four row vectors.
     */
    static fromRows(row0: vec4, row1: vec4, row2: vec4, row3: vec4): mat4;
    /**
     * Returns the identity matrix.
     */
    static identity(): mat4;
    /**
     * Returns a matrix with all zero values.
     */
    static zero(): mat4;
    /**
     * Returns a new matrix with translation `translation`, rotation `rotation`, and scale `scale`.
     */
    static compose(translation: vec3, rotation: quat, scale: vec3): mat4;
    /**
     * Returns a new matrix using the provided vectors.
     */
    static makeBasis(x: vec3, y: vec3, z: vec3): mat4;
    /**
     * Returns a new matrix generated using the provided arguments.
     */
    static lookAt(eye: vec3, center: vec3, up: vec3): mat4;
    /**
     * Returns a new matrix generated using the provided arguments.
     */
    static perspective(fov: number, aspect: number, near: number, far: number): mat4;
    /**
     * Returns a new matrix generated using the provided arguments.
     */
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
    /**
     * Returns a new matrix with rotation `rotation`.
     */
    static fromRotation(rotation: quat): mat4;
    /**
     * Returns a new matrix with scale `scale`.
     */
    static fromScale(scale: vec3): mat4;
    /**
     * Returns a new matrix with the translation `translation`.
     */
    static fromTranslation(translation: vec3): mat4;
    /**
     * Returns a new matrix with x euler angle `xAngle` (in radians).
     */
    static fromEulerX(angle: number): mat4;
    /**
     * Returns a new matrix with y euler angle `yAngle` (in radians).
     */
    static fromEulerY(angle: number): mat4;
    /**
     * Returns a new matrix with z euler angle `zAngle` (in radians).
     */
    static fromEulerZ(angle: number): mat4;
    /**
     * Returns a new matrix with the specified euler angles (in radians).
     */
    static fromEulerAngles(angles: vec3): mat4;
    /**
     * Returns the two matrices multiplied component-wise.
     */
    static compMult(a: mat4, b: mat4): mat4;
    /**
     * Returns the outer product of the two matrices.
     */
    static outerProduct(a: vec4, b: vec4): mat4;
    /**
     * Returns a new matrix with euler angles `euler` (in radians).
     * @deprecated Use {@link mat4.fromEulerAngles} instead.
     * 
     * @deprecated
     */
    static fromEulerAnglesYXZ(vec: vec3): mat4;
    /**
     * Returns a new matrix with the yaw, pitch, and roll radians found in `yawPitchRoll`.
     * @deprecated Use {@link mat4.fromEulerAngles} instead.
     * 
     * @deprecated
     */
    static fromYawPitchRoll(vec: vec3): mat4;
        constructor();
    /**
     * Returns a string representation of the matrix.
     */
    description: string;
    /**
     * The first column of the matrix.
     */
    column0: vec4;
    /**
     * The second column of the matrix.
     */
    column1: vec4;
    /**
     * The third column of the matrix.
     */
    column2: vec4;
    /**
     * The fourth column of the matrix.
     */
    column3: vec4;
    /**
     * Returns the result of adding the two matrices together.
     */
    add(mat: mat4): mat4;
    /**
     * Returns the result of subtracting the two matrices.
     */
    sub(mat: mat4): mat4;
    /**
     * Returns the result of multiplying the two matrices.
     */
    mult(mat: mat4): mat4;
    /**
     * Returns the result of dividing the two matrices.
     */
    div(mat: mat4): mat4;
    /**
     * Returns the determinant of the matrix.
     */
    determinant(): number;
    /**
     * Returns the inverse of the matrix.
     */
    inverse(): mat4;
    /**
     * Returns the transpose of this matrix.
     */
    transpose(): mat4;
    /**
     * Returns whether the two matrices are equal.
     */
    equal(mat: mat4): boolean;
    /**
     * Returns the point `point` multiplied by this matrix.
     */
    multiplyPoint(point: vec3): vec3;
    /**
     * Returns the direction vector multiplied by this matrix.
     */
    multiplyDirection(direction: vec3): vec3;
    /**
     * Returns the vector multiplied by this matrix.
     */
    multiplyVector(vector: vec4): vec4;
    /**
     * Returns the result of scalar multiplying the matrix.
     */
    multiplyScalar(scalar: number): mat4;
    /**
     * Returns an euler angle representation of this matrix's rotation, in radians.
     */
    extractEulerAngles(): vec3;
    /**
     * Returns a string representation of the matrix.
     */
    toString(): string;
    /**
     * Returns an euler angle representation of this matrix's rotation, in radians.
     * 
     * @deprecated
     */
    extractEulerXYZ(): vec3;
}

declare class EventRegistration extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Low-level data class.
 */
declare class SerializableWithUID extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
     */
    uniqueIdentifier: string;
}

declare enum Zodiac {
    Aquarius,
    Aries,
    Cancer,
    Capricorn,
    Gemini,
    Leo,
    Libra,
    Pisces,
    Sagittarius,
    Scorpio,
    Taurus,
    Virgo,
}

/**
 * Cardinal axis enumeration.
 */
declare enum Axis {
    /**
     * The X axis.
     */
    X,
    /**
     * The Y axis.
     */
    Y,
    /**
     * The Z axis.
     */
    Z,
}

/**
 * Describes the current recording state of the Lens.
 */
declare enum RecordingState {
    /**
     * The Lens is in live preview mode.
     */
    Preview,
    /**
     * A photo capture is in progress.
     */
    Photo,
    /**
     * A video recording is in progress.
     */
    Video,
}

/**
 * The method in which haptic feedback is provided. Use with the `HapticFeedbackSystem`.
 */
declare enum HapticFeedbackType {
    /**
     * Taptic engine based haptic feedback. Available only on some devices.
     */
    TapticEngine,
    /**
     * Vibration based haptic feedback.
     */
    Vibration,
}

/**
 * Data type used for color values.
 * 
 * @deprecated
 */
declare enum Colorspace {
    /**
     * Color data has one value: Red
     * 
     * @deprecated
     */
    R,
    /**
     * Color data has 2 values: Red, Green
     * 
     * @deprecated
     */
    RG,
    /**
     * Color data has 4 values: Red, Green, Blue, Alpha
     * 
     * @deprecated
     */
    RGBA,
}

declare enum TextureFormat {
    R8Unorm,
    RG8Unorm,
    RGB8Unorm,
    RGBA8Unorm,
    R16Unorm,
    RG16Unorm,
    RGBA16Unorm,
    R8Snorm,
    RG8Snorm,
    RGBA8Snorm,
    R16Snorm,
    RG16Snorm,
    RGBA16Snorm,
    R8Uint,
    RG8Uint,
    RGBA8Uint,
    R16Uint,
    RG16Uint,
    RGBA16Uint,
    R32Uint,
    RG32Uint,
    RGBA32Uint,
    R8Sint,
    RG8Sint,
    RGBA8Sint,
    R16Sint,
    RG16Sint,
    RGBA16Sint,
    R32Sint,
    RG32Sint,
    RGBA32Sint,
    R16Float,
    RG16Float,
    RGBA16Float,
    R32Float,
    RG32Float,
    RGBA32Float,
    BGRA8Unorm,
    RGBA8Srgb,
    RGB10A2Unorm,
    RGB10A2Uint,
    RG11B10Float,
}

/**
 * Enum used to define the quality of image or texture compression. Higher quality typically results in larger file sizes. Used with Base64.
 */
declare enum CompressionQuality {
    /**
     * Optimizes for the smallest size, often sacrificing visual fidelity.
     */
    MaximumCompression,
    /**
     * Prioritizes smaller file size over quality.
     */
    LowQuality,
    /**
     * Balances quality and file size.
     */
    IntermediateQuality,
    /**
     * Retains more details than lower settings.
     */
    HighQuality,
    /**
     * Provides the highest quality, with the largest file size.
     */
    MaximumQuality,
}

/**
 * Settings for how color will be cleared before rendering.
 */
declare enum ClearColorOption {
    /**
     * The frame will not be cleared before being rendered to (draws over the previous frame).
     */
    None,
    /**
     * Use the Device Texture for the color color
     */
    Background,
    /**
     * The frame will be cleared with a color before being rendered to.
     */
    CustomColor,
    /**
     * The frame will be cleared with a texture before being rendered to.
     */
    CustomTexture,
}

/**
 * Types of weather returned by {@link UserContextSystem}'s callback.
 */
declare enum WeatherCondition {
    /**
     * Unknown or unsupported weather condition
     */
    Unknown,
    /**
     * Lightning
     */
    Lightning,
    /**
     * Low Visibility
     */
    LowVisibility,
    /**
     * Partly Cloudy
     */
    PartlyCloudy,
    /**
     * Clear Night
     */
    ClearNight,
    /**
     * Cloudy
     */
    Cloudy,
    /**
     * Rainy
     */
    Rainy,
    /**
     * Hail
     */
    Hail,
    /**
     * Snow
     */
    Snow,
    /**
     * Windy
     */
    Windy,
    /**
     * Sunny
     */
    Sunny,
}

/**
 * Settings for the depth clear option modes on a DepthStencilRenderTargetProvider.
 */
declare enum DepthClearOption {
    /**
     * Do not clear the depth buffer, just keep values. Equal to disabled clear depth checkbox in Camera in previous Studio version.
     */
    None,
    /**
     * Clear depth buffer by specific value. Equal to enabled clear depth checkbox in Camera in previous Studio version.
     */
    CustomValue,
    /**
     * Clear depth buffer by values from depth part of input texture. Will use custom value in case of unavailable input texture.
     */
    CustomTexture,
}

/**
 * Tracking modes used by the {@link DeviceTracking} component to specify what type of tracking to use.
 */
declare enum DeviceTrackingMode {
    /**
     * Use gyroscope tracking (rotation only)
     */
    Rotation,
    /**
     * Use surface tracking (position and rotation)
     */
    Surface,
    /**
     * Use native tracking (position and rotation)
     */
    World,
}

/**
 * Tracking type used by the {@link DeviceTracking} component to specify what type of plane to detect.
 * When tracking planes, the {@link DeviceTracking} component must be set to `World` mode.
 */
declare enum NativePlaneTrackingType {
    /**
     * No planes will be detected.
     */
    None,
    /**
     * Only horizontal planes will be detected.
     */
    Horizontal,
    /**
     * Only vertical planes will be detected.
     */
    Vertical,
    /**
     * Both horizontal and vertical planes will be detected.
     */
    Both,
}

/**
 * Enum values specifying each type of manipulation. See {@link ManipulateComponent}.
 */
declare enum ManipulateType {
    /**
     * The object can be scaled by pinching with two fingers.
     */
    Scale,
    /**
     * The object can be rotated by swiveling with two fingers.
     */
    Swivel,
    /**
     * The object can be moved by touching and dragging.
     */
    Drag,
}

/**
 * Types of screen regions that can be used with {@link ScreenRegionComponent}.
 */
declare enum ScreenRegionType {
    /**
     * The entire screen area of the device.
     */
    FullFrame,
    /**
     * The screen area shown to the user when recording. On some devices, this region is a subset of FullFrame region.
     */
    Capture,
    /**
     * The screen area shown to the user when previewing a Snap. On some devices, this region is a subset of Capture region.
     */
    Preview,
    /**
     * A screen area that will be visible on all devices and won't overlap Snapchat UI. Safe area to place any UI elements.
     */
    SafeRender,
    /**
     * The screen area where the round "Snap" button is drawn.
     */
    RoundButton,
}

/**
 * Stencil buffer clear option.
 */
declare enum StencilClearOption {
    /**
     * Stencil buffer clear operation will be skipped.
     */
    None,
    /**
     * Stencil buffer will be cleared by "clearStencilValue" property value.
     */
    CustomValue,
    /**
     * Stencil buffer will be cleared by texture from "maskTexture" property, if "maskTexture" is null then the stencil clear option will fallback to "CustomValue" mode.
     */
    CustomTexture,
}

/**
 * Used in {@link TextFill}'s `mode` property. Controls which drawing method is used for the TextFill.
 */
declare enum TextFillMode {
    /**
     * Solid color will be used for drawing.
     */
    Solid,
    /**
     * Tiled texture will be used for drawing.
     */
    Texture,
}

/**
 * Defines the bounding area used for texture tiling with {@link TextFill}'s `tileZone` property.
 */
declare enum TileZone {
    /**
     * The attached {@link ScreenTransform} bounding rectangle is used for texture tiling
     */
    Rect,
    /**
     * The Text component's drawn area (extents) is used for texture tiling
     */
    Extents,
    /**
     * Each character uses its own drawn area for texture tiling
     */
    Character,
    /**
     * The position of each character in screen space is used for tiling
     */
    Screen,
}

/**
 * Changes the capitalization of the text component. Useful when using dynamic texts.
 */
declare enum CapitilizationOverride {
    /**
     * Display the capitalization of the displayed text as provided.
     */
    None,
    /**
     * Sets the capitalization of the displayed text to lowercase.
     */
    AllLower,
    /**
     * Sets the capitalization of the displayed text to uppercase.
     */
    AllUpper,
}

/**
 * The types of light emission from a {@link LightSource}.
 */
declare enum LightType {
    /**
     * A type of light that illuminates from a single point and spreads in a cone shape.
     */
    Point,
    /**
     * A type of light that illuminates uniformly from a given direction, similar to an area light of infinite size that is infinitely far away.
     */
    Directional,
    /**
     * A type of light that illuminates from a single point and spreads in all directions.
     */
    Spot,
    /**
     * A type of light that illuminates the scene equally from all directions, with a fixed intensity.
     */
    Ambient,
    /**
     * A type of light that illuminates based on a provided environment map texture.
     */
    Envmap,
    /**
     * A type of light that illuminates based on estimation of light in the `Device Camera Texture`.
     */
    Estimation,
}

/**
 * The types of light falloff from a {@link LightSource}.
 */
declare enum FalloffType {
    None,
    Quadratic,
}

/**
 * The types of shadows that a {@link LightSource} can cast.
 */
declare enum ShadowType {
    None,
    Projective,
    ShadowMap,
}

declare enum ShadowMapQuality {
    Standard512,
    High1024,
    VeryHigh2048,
}

/**
 * Options for stretching a mesh to fit a {@link ScreenTransform}
 * 
 * Used in {@link RenderMeshVisual} `stretchMode` property, as long as the SceneObject has a {@link ScreenTransform} attached.
 * 
 * Also used in {@link TextFill}
 * 
 * See the [Image guide](/lens-studio/assets-pipeline/2d/image) for more information about stretch modes.
 */
declare enum StretchMode {
    /**
     * Scale uniformly so that both width and height fit within the bounds.
     */
    Fit,
    /**
     * Scale uniformly so that both width and height meet or exceed the bounds.
     */
    Fill,
    /**
     * Scale non-uniformly to match the exact width and height of the bounds.
     */
    Stretch,
    /**
     * Scale uniformly to match the same height as the bounds.
     */
    FitHeight,
    /**
     * Scale uniformly to match the same width as the bounds.
     */
    FitWidth,
    /**
     * Same as `Fill`, but when used with the {@link Image} any area outside of the bounds is cropped out.
     */
    FillAndCut,
}

declare enum MeshShadowMode {
    None,
    Caster,
    Receiver,
    Both,
}

declare enum Keys {
    Invalid,
    Backspace,
    Left,
    Up,
    Right,
    Down,
    Shift,
    Control,
    Meta,
    Alt,
    Space,
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
}

declare enum KeyModifiers {
    Shift,
    Control,
    Alt,
    Meta,
}

/**
 * Enum representing the type of media selected from camera roll.
 */
declare enum CameraRollMediaType {
    /**
     * Media type not specified
     */
    Unset,
    /**
     * Still image media type.
     */
    Image,
    /**
     * Video media type.
     */
    Video,
}

/**
 * Used by {@link DeviceLocationTrackingComponent} to indicate the user's distance from the landmarker location.
 * See the [Landmarker guide](/lens-studio/features/location-ar/guide) for more information.
 */
declare enum LocationProximityStatus {
    /**
     * User's distance cannot be determined or has not been determined yet.
     */
    Unknown,
    /**
     * User is close enough to the landmarker location to begin tracking.
     */
    WithinRange,
    /**
     * User is too far away from the landmarker location to track it.
     */
    OutOfRange,
}

/**
 * Specifies a scope for storing or retrieving values from a MultiplayerSession.
 */
declare enum StorageScope {
    /**
     * Stored variables are visible to the user only, and accessible until lens cache is cleared.
     */
    User,
    /**
     * Stored values are visible and editable by any user who is using the same session. Values are stored as long as the session that corresponds to chat exists.
     */
    Session,
}

/**
 * Types of granularity for lyric data. Accessible through {@link Lyrics#type | Lyrics.type}.
 */
declare enum LyricsType {
    /**
     * Type is not set.
     */
    Unset,
    /**
     * Lyrics data is available for each word and space between words. Each {@link LyricsLine}'s {@link LyricsLine#syncs | syncs} list will contain a {@link LyricsSync} object for each word and space between words in the line. This means that timing data is available for each word in the tracked music.
     */
    RichSync,
    /**
     * Lyrics data is only available for entire lines at a time. Each {@link LyricsLine}'s {@link LyricsLine#syncs | syncs} list will contain a single {@link LyricsSync} object, with its {@link LyricsSync#text | text} property containing the entire line. This means that timing data is only available for entire lines of the song, and is not available for each individual word.
     */
    LineSync,
}

/**
 * Rotation types used by TransformBuilder.
 */
declare enum TransformerRotation {
    /**
     * No rotation
     */
    None,
    /**
     * Rotates by 90 degrees
     */
    Rotate90,
    /**
     * Rotates by 180 degrees
     */
    Rotate180,
    /**
     * Rotates by 270 degrees
     */
    Rotate270,
}

/**
 * Order that inTensor will be sorted when applying `TensorMath.argSortMasked()`.
 */
declare enum SortOrder {
    /**
     * Applies ascending sorting order when returning indices in TensorMath.argSortMasked().
     */
    Ascending,
    Descending,
}

/**
 * Specifies the compression format to use when uploading an image.
 */
declare enum ImageUploadCompressionMethod {
    PNG,
    JPG,
    WEBP,
}

/**
 * The classification of the surface at the position where the ray intersects with the environment.
 * This is used in {@link WorldQueryHitTestResult} to provide additional information about the surface type.
 * 
 * @experimental
 * @wearableOnly
 */
declare enum SurfaceClassification {
    /**
     * The detected surface could not be identified.
     * 
     * @experimental
 * @wearableOnly
     */
    None,
    /**
     * The detected surface is ground.
     * 
     * @experimental
 * @wearableOnly
     */
    Ground,
}

/**
 * Types of operating system that may be running on the device.
 */
declare enum OS {
    /**
     * iOS device
     */
    iOS,
    /**
     * MacOS device
     */
    MacOS,
    /**
     * Android device
     */
    Android,
    /**
     * Windows device
     */
    Windows,
}

/**
 * Options for handling vertical text overflow. Used by {@link Text}'s `verticalOverflow` property.
 */
declare enum VerticalOverflow {
    /**
     * Text will continue to draw past the end of the vertical boundaries.
     */
    Overflow,
    /**
     * Text will be clipped at the end of the vertical boundaries.
     */
    Truncate,
    /**
     * Text will shrink to fit within the vertical boundaries.
     */
    Shrink,
}

/**
 * Options for wrapping text horizontally.
 * Used by {@link Text}'s component's `horizontalOverflow` property.
 */
declare enum HorizontalOverflow {
    /**
     * Text will continue drawing past horizontal boundaries.
     */
    Overflow,
    /**
     * Text is clipped to the width of horizontal boundaries.
     */
    Truncate,
    /**
     * Text wraps when reaching horizontal boundaries and continues on the next line.
     */
    Wrap,
    /**
     * Text will shrink to fit within the horizontal boundaries.
     */
    Shrink,
    /**
     * When text exceeds the available space an ellipsis (...) will be added at the end.
     */
    Ellipsis,
    /**
     * When text exceeds the available space in the front, an ellipsis (...) will be added at the front.
     */
    EllipsisFront,
    /**
     * Text is clipped in the front to the width of horizontal boundaries.
     */
    TruncateFront,
}

/**
 * Enum that defines motor type.
 */
declare enum HingeMotorType {
    /**
     * A motor that attempts to rotate to or hold a specific angle or position along the hinge axis.
     */
    AngleTarget,
    /**
     * A motor that applies torque to reach or maintain a target speed (angular velocity).
     */
    VelocityTarget,
}

/**
 * How animation layers are blended.
 */
declare enum AnimationLayerBlendMode {
    /**
     * The higher layer will override all other animation layers.
     */
    Default,
    /**
     * The higher layer will be added on top of other animation layers.
     */
    Additive,
}

/**
 * The method in which an Animation Layer should be scaled to other layers in an `AnimationClip`.
 */
declare enum AnimationLayerScaleMode {
    /**
     * Multiply the layers value.
     */
    Multiply,
    /**
     * Add the layers value.
     */
    Additive,
}

/**
 * Mesh topology types used by {@link MeshBuilder}.
 */
declare enum MeshTopology {
    /**
     * Draws unconnected triangles. Each group of three vertices specifies a new triangle.
     */
    Triangles,
    /**
     * Draws connected triangles in a strip. After the first two vertices, each vertex defines the third point on a new triangle extending from the previous one.
     */
    TriangleStrip,
    /**
     * Draws connected triangles sharing one central vertex. The first vertex is the shared one, or "hub" vertex. Starting with the third vertex, each vertex forms a triangle connecting with the previous vertex and hub vertex.
     */
    TriangleFan,
    /**
     * Draws individual points. Each vertex specifies a new point to draw.
     */
    Points,
    /**
     * Draws unconnected line segments. Each group of two vertices specifies a new line segment.
     */
    Lines,
    /**
     * Draws connected line segments. Starting with the second vertex, a line is drawn between each vertex and the preceding one.
     */
    LineStrip,
}

/**
 * Possible index data types used by {@link MeshBuilder}. `MeshIndexType.UInt16` is the value normally used.
 */
declare enum MeshIndexType {
    /**
     * No index data type
     */
    None,
    /**
     * Unsigned integer, this is the value normally used
     */
    UInt16,
}

declare enum BlendMode {
    Normal,
    /**
     * Legacy multiply blend mode.
     * 
     * @deprecated Use {@link BlendMode.Multiply} instead.
     * 
     * @deprecated
     */
    MultiplyLegacy,
    /**
     * Legacy additive blend mode.
     * 
     * @deprecated Use {@link BlendMode.Add} instead.
     * 
     * @deprecated
     */
    AddLegacy,
    Screen,
    PremultipliedAlpha,
    AlphaToCoverage,
    Disabled,
    Add,
    AlphaTest,
    ColoredGlass,
    Multiply,
    Min,
    Max,
    PremultipliedAlphaHardware,
    PremultipliedAlphaAuto,
}

/**
 * Legacy Options for stretching a mesh to fit a {@link ScreenTransform}
 * 
 * @deprecated Use {@link StretchMode} instead.
 * 
 * @deprecated
 */
declare enum TextureStretchMode {
    /**
     * @deprecated
     */
    Fit,
    /**
     * @deprecated
     */
    Fill,
    /**
     * @deprecated
     */
    Stretch,
    /**
     * @deprecated
     */
    FitHeight,
    /**
     * @deprecated
     */
    FitWidth,
}

/**
 * Mode for setting frustum culling on Pass
 */
declare enum FrustumCullMode {
    /**
     * Based on shader property, frustum culling will either be disabled or test with render object's aabb
     */
    Auto,
    /**
     * Enable frustum culling and extend render object's aabb to (1 + value)
     */
    Extend,
    /**
     * Users define the specific AABB which is used for culling test. Assumes frustumCullMin and frustumCullMax are calculated in local space of the object. frustumCullMin is the bottom-left-back and frustumCullMax is the top-right-front of the user defined AABB.
     */
    UserDefinedAABB,
}

/**
 * Used with {@link Pass}'s `cullMode` property.
 * Determines which faces of a surface are culled (not rendered).
 */
declare enum CullMode {
    /**
     * Front facing surfaces are not rendered.
     */
    Front,
    /**
     * Back facing surfaces are not rendered.
     */
    Back,
    /**
     * Neither front facing nor back facing surfaces are rendered.
     */
    FrontAndBack,
}

declare enum FilteringMode {
    Nearest,
    Bilinear,
    Trilinear,
}

/**
 * Describes how a texture should be sampled when using coordinates outside of the normal range.
 */
declare enum WrapMode {
    /**
     * Take the average of the border color and stretch it out.
     */
    ClampToEdge,
    /**
     * Repeats the current texture at the edge again.
     */
    Repeat,
    /**
     * Repeats the current texture at the edge again, but flipping the orientation.
     */
    MirroredRepeat,
    /**
     * Take the border color at the edge of a texture and stretch it out.
     */
    ClampToBorder,
}

/**
 * Specifies whether the front and/or back face stencil test will be applied. The initial value is "FrontAndBack"
 */
declare enum StencilFace {
    /**
     * The stencil test will be applied to the both front and back faces.
     */
    FrontAndBack,
    /**
     * The stencil test will be applied to the front face only.
     */
    Front,
    /**
     * The stencil test will be applied to the back face only.
     */
    Back,
}

/**
 * Specifies the stencil test function. The initial value is "Always".
 */
declare enum StencilFunction {
    /**
     * Always passes.
     */
    Always,
    /**
     * Always fails.
     */
    Never,
    /**
     * Passes if (referenceValue & readMask) < (stencil buffer value & readMask).
     */
    Less,
    /**
     * Passes if (referenceValue & readMask) <= (stencil buffer value & readMask).
     */
    LessEqual,
    /**
     * Passes if (referenceValue & readMask) > (stencil buffer value & readMask).
     */
    Greater,
    /**
     * Passes if (referenceValue & readMask) >= (stencil buffer value & readMask).
     */
    GreaterEqual,
    /**
     * Passes if (referenceValue & readMask) = (stencil buffer value & readMask).
     */
    Equal,
    /**
     * Passes if (referenceValue & readMask) != (stencil buffer value & readMask).
     */
    NotEqual,
}

/**
 * Options for specifying the action to take when stencil and depth tests resolve.
 */
declare enum StencilOperation {
    /**
     * Keep the current value.
     */
    Keep,
    /**
     * Set the stencil buffer value to 0.
     */
    Zero,
    /**
     * Sets the stencil buffer value to "referenceValue" property of StencilState.
     */
    Replace,
    /**
     * Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
     */
    IncrementClamp,
    /**
     * Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing the maximum representable unsigned value.
     */
    IncrementWrap,
    /**
     * Decrements the current stencil buffer value. Clamps to 0.
     */
    DecrementClamp,
    /**
     * Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable unsigned value when decrementing a stencil buffer value of zero.
     */
    DecrementWrap,
    /**
     * Bitwise inverts the current stencil buffer value.
     */
    Invert,
}

/**
 * Specifies the format for encoding textures, used with Base64.
 */
declare enum EncodingType {
    /**
     * Lossless compression.
     */
    Png,
    /**
     * Lossy compression, usually smaller in size.
     */
    Jpg,
}

declare enum LoadStatus {
    Idle,
    Loading,
    Loaded,
}

/**
 * Specifies which eye to apply an {@link EyeColorVisual} effect to.
 */
declare enum EyeToRender {
    /**
     * Left eye only.
     */
    Left,
    /**
     * Right eye only.
     */
    Right,
    /**
     * Both eyes.
     */
    Both,
}

/**
 * Describes the current status of a {@link VideoTextureProvider}.
 */
declare enum VideoStatus {
    /**
     * The video is unloaded (no resources allocated)
     */
    Unloaded,
    /**
     * The video is being prepared
     */
    Preparing,
    /**
     * The video is playing
     */
    Playing,
    /**
     * The video playback is paused, resources loaded, at current position
     */
    Paused,
    /**
     * The video playback is stopped, resources loaded, at position 0
     */
    Stopped,
}

declare enum TouchState {
    Began,
    Moved,
    Ended,
    Cancelled,
}

/**
 * Formats of mesh classification used by WorldRenderObjectProvider.
 */
declare enum MeshClassificationFormat {
    /**
     * Do not bake classifications to mesh
     */
    None,
    /**
     * Classifications are baked per vertex - vertices with multiple classes will use the value from the last face
     */
    PerVertexFast,
}

/**
 * Used by the `verticalAlignment` property in {@link MeshVisual}.
 * When a {@link ScreenTransform} is attached to the same SceneObject, this determines how the mesh will be positioned vertically.
 */
declare enum VerticalAlignment {
    /**
     * The mesh will be aligned to the bottom side.
     */
    Bottom,
    /**
     * The mesh will be centered.
     */
    Center,
    /**
     * The mesh will be aligned to the top side.
     */
    Top,
}

/**
 * Used by the `horizontalAlignment` property in {@link MeshVisual}.
 * When a {@link ScreenTransform} is attached to the same SceneObject, this determines how the mesh will be positioned horizontally.
 */
declare enum HorizontalAlignment {
    /**
     * The mesh will be aligned to the left side.
     */
    Left,
    /**
     * The mesh will be centered.
     */
    Center,
    /**
     * The mesh will be aligned to the right side.
     */
    Right,
}

/**
 * Used with `AnimationClip` to describe how the clip should be played.
 */
declare enum PlaybackMode {
    /**
     * Plays forward once.
     */
    Single,
    /**
     * Repeated play the clip forward from the beginning to the end.
     */
    Loop,
    /**
     * Plays the clip forward once, then backward once, repeatedly.
     */
    PingPong,
}

declare enum TrackedPlaneOrientation {
    Horizontal,
    Vertical,
}

/**
 * Used with `AnimationKeyFrame`.
 */
declare enum TangentType {
    /**
     * A tangent with 0 slope.
     */
    Const,
    /**
     * A tangent where the angle and weight of both the left and right side can be changed freely. This is the default value.
     */
    Free,
    /**
     * A tangent where the left and right side are not connected.
     */
    Broken,
    /**
     * A slope defined by a linear tangent.
     */
    Linear,
    /**
     * A tangent which value is clamped, as in a spline.
     */
    Clamped,
}

/**
 * Different coordinate representations for tangent points
 */
declare enum WeightedMode {
    /**
     * Follows the CSS standard easing function representation.
     */
    Easing,
    /**
     * Tangent weights defined as absolute points in cartesian space. Should lie within P0 and P3.
     */
    Absolute,
    /**
     * Tangent weights defined by a slope and magnitude {dy/dx, length}.
     */
    Slope,
    /**
     * Tangent weights are ignored, treat as constant or point.
     * 
     * @deprecated
     */
    None,
    /**
     * Left tangent weights are free.
     * @deprecated Use Easing, Slope, or Absolute modes instead.
     * 
     * @deprecated
     */
    Left,
    /**
     * Right tangent weights are free.
     * @deprecated Use Easing, Slope, or Absolute modes instead.
     * 
     * @deprecated
     */
    Right,
    /**
     * Both tangent weights are free.
     * @deprecated Use Easing, Slope, or Absolute modes instead.
     * 
     * @deprecated
     */
    Both,
}

/**
 * Enumeration of supported GPS location accuracy.
 * 
 * > **Spectacles**: Enumeration of supported GPS location accuracy/settings for Spectacles. Location will be provided by several location sources and/or providers, each accuracy mode will provide a different configuration regarding update frequency and accuracy.
 */
declare enum GeoLocationAccuracy {
    /**
     * Used for guiding the user. Generally accurate up to 5 meters.
     * 
     * > **Spectacles** : Used for guiding the user in navigation use cases. Accuracy is dependent on the environment (rural / urban) but generally accurate up to 20 meters. This configuration enables locations with location type {@link GeoPosition#locationSource | 'FUSED_LOCATION'} which is available at rendering rate frequency when reception is good. Otherwise, location updates are provided every 10 seconds.
     */
    Navigation,
    /**
     * Best possible accuracy without navigation requirement. Generally accurate up to 5 meters.
     * 
     * > **Spectacles** : Good accuracy without navigation requirement. Generally accurate up to 30 meters depending on the environment (rural/urban). Use for use cases where navigation is not a requirement and lower waiting times are expected. Location updates provided once per second under good conditions, otherwise one location every 10 seconds.
     */
    High,
    /**
     * Generally accurate up to 10 meters. Power efficient option.
     * 
     * > **Spectacles**: Generally accurate up to 30 meters depending on the environment (rural/urban). One location update is provided every 15 seconds. Power efficient option.
     */
    Medium,
    /**
     * Generally accurate up to 100 meters. The most power efficient option.
     * 
     * > **Spectacles**: Generally accurate up to 100 meters depending on the environment (rural/urban). One location update is provided every 30 seconds. The most power efficient option.
     */
    Low,
}

/**
 * Classifications of mesh face. See {@link TrackedMeshHitTestResult}.
 */
declare enum TrackedMeshFaceClassification {
    /**
     * None
     */
    None,
    /**
     * Wall
     */
    Wall,
    /**
     * Floor
     */
    Floor,
    /**
     * Ceiling
     */
    Ceiling,
    /**
     * Table
     */
    Table,
    /**
     * Seat
     */
    Seat,
    /**
     * Window
     */
    Window,
    /**
     * Door
     */
    Door,
}

/**
 * The base class for all components. Components are attached to {@link SceneObject} and add various behaviors to it.
 * 
 * @remarks
 * For example, in the default scene, the `Camera Object` is a {@link SceneObject} which contains the {@link Camera} component to render the scene from the point of view of that object. You can add a {@link DeviceTracking} component onto the object, so that the {@link Transform} of that object is modified based on the device's movement.
 * 
 * @see [Building Lenses](/lens-studio/overview/building-your-first-lens/built-in-ar-effects) Guide.
 * @see [Camera Overview](/lens-studio/lens-studio-workflow/scene-set-up/camera) Guide.
 */
declare class Component extends SerializableWithUID {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Destroys the component.
     */
    destroy(): void;
    /**
     * Returns the SceneObject the component is attached to.
     */
    getSceneObject(): SceneObject;
    /**
     * Returns the Transform this component is attached to.
     */
    getTransform(): Transform;
    /**
     * Returns true if this Component, its SceneObject, and all of that SceneObjects parents are enabled.
     * 
     * @readonly
     */
    isEnabledInHierarchy: boolean;
    /**
     * If disabled, the Component will stop enacting its behavior.
     */
    enabled: boolean;
    /**
     * The {@link SceneObject} this component is on.
     * 
     * @readonly
     */
    sceneObject: SceneObject;
}

/**
 * Base class for all resource providers. Providers are the implementation for {@link Asset}.
 * 
 * @remarks
 * For example: {@link VideoTextureProvider} is the implementation for a {@link Texture} backed by a video file.
 */
declare class Provider extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    getLoadStatus(): LoadStatus;
}

/**
 * Base class for all visual Components.
 */
declare class Visual extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the order of this Visual in the render queue.
     */
    getRenderOrder(): number;
    /**
     * Sets the order of this Visual in the render queue.
     */
    setRenderOrder(value: number): void;
    /**
     * The order in which the visual should be rendered.
     */
    renderOrder: number;
}

/**
 * Provider for RenderMesh data.
 */
declare class RenderObjectProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Base class for all assets used in the engine. Assets can be unique to Lens Studio, such as {@link VFXAsset}, or a representation of an imported asset, such as {@link Texture} for jpg, png, and other image formats. In most cases, assets are added to the scene via a {@link Component}.
 * 
 * @remarks
 * For example, you might import an `.jpg` file into your project to be used in the Lens by dragging your file into the Asset Browser panel, which will create a {@link Texture} asset. Then, in the Scene Hierarchy panel, you can add a {@link SceneObject} containing the {@link Image} component (Scene Hierarchy panel > + > Image), and set the Texture field of the Image component to the newly imported asset in the Inspector panel.
 * 
 * @see [Importing and Exporting](/lens-studio/assets-pipeline/importing-and-exporting-resources) Guide.
 * @see [Image](/lens-studio/assets-pipeline/2d/image) Guide.
 */
declare class Asset extends SerializableWithUID {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The name of the Asset in Lens Studio.
     */
    name: string;
}

/**
 * Base for all mesh rendering components.
 * 
 * @remarks
 * Comparable to the former `MeshVisual` class, which was split into the classes:
 * - {@link BaseMeshVisual}: serves as the foundational class for all visual components that use meshes for rendering.
 * - {@link MaterialMeshVisual}: inherits from {@link BaseMeshVisual} and provides access to the {@link Material} used in the rendering process.
 * - {@link RenderMeshVisual}: extends {@link MaterialMeshVisual}, adding the capability to utilize specific {@link RenderMesh} assets to depict 3D models within a scene.
 */
declare class BaseMeshVisual extends Visual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Projects screen positions from `camera`'s view onto the mesh's UVs.
     * If the MeshVisual's material uses the same texture as the camera input, the MeshVisual will look identical to the part of the screen it covers.
     */
    snap(camera: Camera): void;
    /**
     * Range minimum of the world-space axis-aligned bounding box (AABB) of the visual.
     */
    worldAabbMin(): vec3;
    /**
     * Range maximum of the world-space axis-aligned bounding box (AABB) of the visual.
     */
    worldAabbMax(): vec3;
    /**
     * Range minimum of the local-space axis-aligned bounding box (AABB) of the visual.
     */
    localAabbMin(): vec3;
    /**
     * Range maximum of the local-space axis-aligned bounding box (AABB) of the visual.
     */
    localAabbMax(): vec3;
    /**
     * When a {@link ScreenTransform} is present on this SceneObject,
     * and `extentsTarget` is a child of this SceneObject, `extentsTarget` will be repositioned to match the exact
     * area this MeshVisual is being rendered. Very useful for {@link Image} and {@link Text} components.
     */
    extentsTarget: ScreenTransform;
    /**
     * None = 0, Caster = 1, Receiver = 2
     */
    meshShadowMode: MeshShadowMode;
    /**
     * Affects the color of shadows being cast by this MeshVisual. The color of the cast shadow is a mix between shadowColor and the material's base texture color. The alpha value of shadowColor controls the mixing of these two colors, with 0 = shadowColor and 1 = shadowColor * textureColor.
     */
    shadowColor: vec4;
    /**
     * Density of shadows cast by this MeshVisual.
     */
    shadowDensity: number;
    /**
     * When a {@link ScreenTransform} is attached to the same SceneObject, this controls how the mesh will be stretched relative to the ScreenTransform's boundaries.
     */
    stretchMode: StretchMode;
    /**
     * When a {@link ScreenTransform} is attached to the same SceneObject, this controls how the mesh will be positioned vertically depending on `stretchMode`.
     */
    verticalAlignment: VerticalAlignment;
    /**
     * When a {@link ScreenTransform} is attached to the same SceneObject, this controls how the mesh will be positioned horizontally depending on `stretchMode`.
     */
    horizontalAlignment: HorizontalAlignment;
}

declare class MeshRenderObjectProvider extends RenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents the base class for animation tracks.
 */
declare class AnimationTrack extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The base class for parameter objects passed into event callbacks.
 */
declare class IEventParameters extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Inherits from {@link BaseMeshVisual} and provides access to the {@link Material} used in the rendering process.
 */
declare class MaterialMeshVisual extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the number of Materials used for rendering.
     */
    getMaterialsCount(): number;
    /**
     * Returns the Material at index `index`.
     */
    getMaterial(index: number): Material;
    /**
     * Adds a Material to use for rendering.
     */
    addMaterial(material: Material): void;
    /**
     * Clears all Materials.
     */
    clearMaterials(): void;
    /**
     * Get the array of materials used by the MaterialMeshVisual.
     */
    materials: Material[];
    /**
     * Returns the first Material.
     */
    mainMaterial: Material;
    /**
     * Returns the `mainPass` of the `mainMaterial`.
     */
    mainPass: Pass;
    /**
     * Overrides the property on the material, without affecting other visuals referencing the same material.
     * 
     * @readonly
     */
    propertyOverrides: PropertyOverrides;
    /**
     * Overrides the mainPass on the material, without affecting other visuals referencing the same material.
     */
    mainPassOverrides: any | PassPropertyOverrides;
}

/**
 * The base class for specialized Texture providers. Can be accessed through {@link Texture.control}.
 */
declare class TextureProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the texture's aspect ratio, which is calculated as width / height.
     */
    getAspect(): number;
    /**
     * Returns the width of the texture in pixels.
     */
    getWidth(): number;
    /**
     * Returns the height of the texture in pixels.
     */
    getHeight(): number;
}

/**
 * A resource that is resolved at runtime.
 */
declare class DynamicResource extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a DynamicResource based on a Uint8Array. Can then be used to load that buffer as one of various {@link Asset} types using {@link RemoteMediaModule}.
     */
    static createWithBuffer(buffer: Uint8Array): DynamicResource;
}

/**
 * Base class for Audio Track providers.
 */
declare class AudioTrackProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sample rate (samples per second) of the audio track asset.
     */
    sampleRate: number;
    /**
     * The maximum frame size of the audio track asset.
     * 
     * @readonly
     */
    maxFrameSize: number;
}

/**
 * RenderObjectProvider for mesh objects generated procedurally.
 */
declare class ProceduralMeshRenderObjectProvider extends MeshRenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec4 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec4AnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Interface class for typed property tracks.
 */
declare class AnimationPropertyTrack extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a Vec3CurvePropertyTrack. Stores and samples explicit curves.
     */
    static createVec3FromCurves(x: AnimationCurve, y: AnimationCurve, z: AnimationCurve): AnimationPropertyTrack;
    /**
     * Creates a FloatCurvePropertyTrack. Stores and samples explicit curves.
     */
    static createFloatFromCurves(x: AnimationCurve): AnimationPropertyTrack;
    /**
     * Creates a QuatPropertyTrack. Samples down curves at 30 FPS and uses SLERP.
     */
    static createQuatFromCurves(x: AnimationCurve, y: AnimationCurve, z: AnimationCurve): AnimationPropertyTrack;
    /**
     * Interface function for typed property tracks.
     */
    addKeyFrame(channels: AnimationKeyFrame[], t: number): void;
    /**
     * Interface function for typed property tracks.
     */
    removeKeyFrame(t: number): void;
}

/**
 * Represents an animation track using vec3 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec3AnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec2 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec2AnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The base class for animation tracks using quaternion values.
 * 
 * @deprecated
 */
declare class QuaternionAnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an audio file asset.
 * 
 * @see {@link AudioComponent}.
 * @see [Audio Tracks](/lens-studio/features/audio/audio-track-assets).
 */
declare class AudioTrackAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The provider for this audio track asset.
     */
    control: AudioTrackProvider;
}

/**
 * The base class for animation tracks using integer values.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class IntAnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The base class for animation tracks using float values.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class FloatAnimationTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Generic event type for WebSocket.
 * 
 * @snapOS
 * @cameraKit
 */
declare class WebSocketEvent extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The base class for scenewide events. SceneEvents can be created using {@link ScriptComponent}'s {@link ScriptComponent#createEvent} method.
 * 
 * @see [Script Events](/lens-studio/features/scripting/script-events) guide.
 */
declare class SceneEvent extends IEventParameters {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Binds a callback function to this event.
     */
    bind(evCallback: (arg1: this) => void): void;
    /**
     * Returns the typename of the SceneEvent.
     */
    getTypeName(): string;
    /**
     * If true, the event is able to trigger. If false, the event will not trigger.
     */
    enabled: boolean;
}

/**
 * Uses an input color lookup table image to adjust the coloring of the Lens.
 * 
 * @see [Color Correction Post Effect](/lens-studio/features/graphics/materials/post-effects#color-correction) guide.
 */
declare class PostEffectVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Allows you to record a new texture (i.e video), based on on another texture.
 */
declare class VideoRecorder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a VideoRecorder instance given Options. Options cannot be changed afterwards.
     */
    static create(options: VideoRecorder.Options): VideoRecorder;
    /**
     * Starts to record the target texture on the next frame.
     */
    startRecording(): void;
    /**
     * Cancels any ongoing recording and discards what has been recorded so far.
     */
    cancelRecording(): void;
    /**
     * Stops recording and returns a Promise which will be fulfilled with a Texture containing a VideoTextureProvider that is the recorded data.
     */
    stopRecording(): Promise<Texture>;
}

/**
 * A point in the {@link FaceStretchVisual} feature.
 */
declare class StretchPoint {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the stretch point
     * 
     * @readonly
     */
    index: number;
    /**
     * The strength of the stretch effect.
     */
    weight: number;
    /**
     * The direction in which the stretch should occur.
     */
    delta: vec3;
}

/**
 * Overrides a property. Used with {@link MaterialMeshVisual}.
 */
declare class PropertyOverrides extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Overrides a material's pass property. Used with {@link MaterialMeshVisual}.
 */
declare class PassPropertyOverrides extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    [index: string]: any;
}

/**
 * Overrides a material's property. Used with {@link MaterialMeshVisual}.
 */
declare class MaterialPropertyOverrides extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Animation Clip is what an Animation Player uses to manage playback for a specific animation. It defines that animation by referencing an Animation Asset and providing start and end points, playback speed and direction, and blending information.
 */
declare class AnimationClip extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a clip.
     */
    static create(clipName: string): AnimationClip;
    /**
     * Creates an animation clip from an animation asset.
     */
    static createFromAnimation(clipName: string, animation: AnimationAsset): AnimationClip;
    /**
     * Clones the existing clip with a new name.
     */
    clone(clipName: string): AnimationClip;
    /**
     * Name of the clip.
     * 
     * @readonly
     */
    name: string;
    /**
     * Points to the animation asset to be played by the Animation Player.
     */
    animation: AnimationAsset;
    /**
     * Strength of animation clip contribution. Lies between [0.0, 1.0] inclusive. For default blending a 1.0 weight indicates this clip will override all earlier clips, a less than 1.0 weight indicates it will blend onto the calculated pose using a weighted average.
     */
    weight: number;
    /**
     * Scalar value to represent playback speed percentage. 1.0 is 100% playback speed.
     */
    playbackSpeed: number;
    /**
     * Choose whether to play animation clip once, loop the clip, or ping pong it.
     */
    playbackMode: PlaybackMode;
    /**
     * Returns begin time of clip (in seconds).
     */
    begin: number;
    /**
     * Returns end time of clip (in seconds).
     */
    end: number;
    /**
     * The offset (in seconds) which is the starting point for an animation. After the first iteration, it starts back at the beginning of the clip.
     */
    offset: number;
    /**
     * Specifies if the clip should be played reversed.
     */
    reversed: boolean;
    /**
     * Whether the animation clip is disabled.
     */
    disabled: boolean;
    /**
     * Returns the duration of the clip which is calculated based on the begin and end times (in seconds).
     * 
     * @readonly
     */
    duration: number;
    /**
     * The blend mode for this particular clip.
     */
    blendMode: AnimationLayerBlendMode;
    /**
     * How scale is accumulated. Usually does not need to be changed after import.
     */
    scaleMode: AnimationLayerScaleMode;
}

/**
 * Controls a video texture resource. Can be accessed through {@link Texture.control}.
 */
declare class VideoTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Plays the video `playCount` times. If `playCount` is less than 0, it loops infinitely.
     */
    play(playCount: number): void;
    /**
     * Pauses the video playback.
     */
    pause(): void;
    /**
     * Resumes the video playback.
     */
    resume(): void;
    /**
     * Stops the video playback and resets position to the beginning. Resources remain loaded.
     * To resume playback, call play() again.
     */
    stop(): void;
    /**
     * Unloads the video and releases all resources.
     */
    unload(): void;
    /**
     * Loads the video stream and stops on the first frame. Results in the video being in the Stopped state, ready to play.
     * loopOnLoad If true, prepares the video for looped playback. If false, prepares for single playback. This may affect which decoder is used on some platforms.
     */
    load(loopOnLoad: boolean): void;
    /**
     * Sets the current playback time to the specified time in seconds.
     */
    seek(value: number): boolean;
    /**
     * Sets `callback` as the function invoked when the video resource is ready to be played.
     * @deprecated Use {@link VideoTextureProvider.onPlaybackReady} instead
     * 
     * @deprecated
     */
    setOnReady(onReadyCallback: () => void): void;
    /**
     * Sets `callback` as the function invoked when the video resource stops playing.
     * @deprecated Use {@link VideoTextureProvider.onPlaybackDone} instead
     * 
     * @deprecated
     */
    setOnFinish(callback: () => void): void;
    /**
     * Returns the status of the video resource.
     * 
     * @deprecated Use {@link VideoTextureProvider#status}
     * 
     * @deprecated
     */
    getStatus(): VideoStatus;
    /**
     * Returns the number of times the video has played consecutively.
     * 
     * @deprecated
     */
    getCurrentPlayCount(): number;
    /**
     * The playback rate of the video. This value is applied when the video is loaded via {@link VideoTextureProvider.load}. To change the playback rate after loading, call {@link VideoTextureProvider.unload} first, set the new rate, then call {@link VideoTextureProvider.load} again. Defaults to 1.0.
     */
    playbackRate: number;
    /**
     * The audio volume of the video resource, normalized from 0 to 1. Can be changed dynamically during playback.
     */
    volume: number;
    /**
     * The relative start time of playback in the range [0, 1], where 0 is the beginning and 1 is the end of the video. This value is applied when the video is loaded via {@link VideoTextureProvider.load}. To change after loading, call {@link VideoTextureProvider.unload} first, set the new value, then call {@link VideoTextureProvider.load} again. Defaults to 0.
     */
    relativeStartTime: number;
    /**
     * The relative end time of playback in the range [0, 1], where 0 is the beginning and 1 is the end of the video. This value is applied when the video is loaded via {@link VideoTextureProvider.load}. To change after loading, call {@link VideoTextureProvider.unload} first, set the new value, then call {@link VideoTextureProvider.load} again. Defaults to 1.
     */
    relativeEndTime: number;
    /**
     * Returns the number of played cycles.
     * 
     * @readonly
     */
    currentPlayCount: number;
    /**
     * Returns true if video file has been loaded and is ready for decoding and false otherwise.
     * 
     * @readonly
     */
    isPlaybackReady: boolean;
    /**
     * Returns the duration of playback range in seconds, or zero if accessed while playback is in an unprepared state.
     * 
     * @readonly
     */
    duration: number;
    /**
     * Returns the duration of loaded video file in seconds, or zero if accessed during playback being in unprepared state.
     * 
     * @readonly
     */
    totalDuration: number;
    /**
     * Returns the current time in seconds, or zero if accessed during playback being in unprepared state.
     * 
     * @readonly
     */
    currentTime: number;
    /**
     * Returns the time of the last acquired texture in seconds, or zero if accessed during playback being in unprepared state.
     * 
     * @readonly
     */
    lastFrameTime: number;
    /**
     * A read-only property that returns the status of provider. Suggested as a substitution for the existing getStatus()
     * 
     * @readonly
     */
    status: VideoStatus;
    /**
     * The event for being reported about playback start. When this event is triggered, lens developers can set video texture to material slots and see actual video frames.
     * 
     * @readonly
     */
    onPlaybackReady: event0<void>;
    /**
     * The event for being reported about playback finished. When this event is triggered, lens developers can evict this texture from material slots to avoid disrupting user's experience.
     * 
     * @readonly
     */
    onPlaybackDone: event0<void>;
    /**
     * Returns true if autoplay is enabled for this video texture.
     * 
     * @readonly
     */
    autoplay: boolean;
}

/**
 * A DynamicResource whose raw data cannot be retrieved as bytes or string.
 * Used to encapsulate uploaded media resources for security purposes.
 */
declare class RestrictedResource extends DynamicResource {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Texture Provider used as output from other systems, for instance SnapML.
 */
declare class ProxyTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a new Texture backed by an empty ProxyTextureProvider which can then be assigned to other Components and systems.
     */
    static create(): Texture;
}

/**
 * A {@link TextureProvider} for textures originating from files.
 */
declare class FileTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provider for file based Audio Tracks.
 */
declare class FileAudioTrackProvider extends AudioTrackProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Writes current audio frame to the passed in `Float32Array` and returns the frame shape.
     */
    getAudioFrame(audioFrame: Float32Array): vec3;
    /**
     * Writes readSize samples into the passed in audioBuffer Float32Array.
     */
    getAudioBuffer(audioBuffer: Float32Array, readSize: number): vec3;
    /**
     * The duration of the AudioTrackAsset in seconds.
     * 
     * @readonly
     */
    duration: number;
    /**
     * The current position of the AudioTrackAsset in seconds.
     */
    position: number;
    /**
     * Loop count, if `-1` is provided, the audio track will loop forever.
     */
    loops: number;
}

declare class DynamicMeshRenderObjectProvider extends ProceduralMeshRenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provider of the Audio Output Audio Track asset.
 */
declare class AudioOutputProvider extends AudioTrackProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Preferred size for audio output at the current frame update.
     */
    getPreferredFrameSize(): number;
    /**
     * Enqueue audio data into an audio playback system.
     * 
     * `shape.x` - buffer size, must be less or equal to `audioFrame` length.
     */
    enqueueAudioFrame(audioFrame: Float32Array, inShape: vec3): void;
}

/**
 * Provider for {@link AudioEffectAsset}.
 */
declare class AudioEffectProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provider for animated texture resource.
 * 
 * @remarks
 * Can be accessed from {@link Asset | Texture.Control} on an animated texture.
 * 
 * @see [2D Animation Guide](/lens-studio/assets-pipeline/2d/2d-animation).
 */
declare class AnimatedTextureFileProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Plays the animation `loops` times, starting with an offset of `offset` seconds.
     */
    play(loops: number, offset: number): void;
    /**
     * Stops the animation.
     */
    stop(): void;
    /**
     * Pauses the animation.
     */
    pause(): void;
    /**
     * Resumes a paused animation from the frame that was last played.
     */
    resume(): void;
    /**
     * Start playing the animation from frame `frameIndex`, `loops` times.
     */
    playFromFrame(frameIndex: number, loops: number): void;
    /**
     * Pauses the animation at frame `frameIndex`.
     */
    pauseAtFrame(frameIndex: number): void;
    /**
     * Returns the number of frames in the animation.
     */
    getFramesCount(): number;
    /**
     * Returns the index of the frame that is currently playing.
     */
    getCurrentPlayingFrame(): number;
    /**
     * Returns how long the animation is in seconds.
     * 
     * @deprecated Use {@link AnimatedTextureFileProvider.duration} instead.
     * 
     * @deprecated
     */
    getDuration(): number;
    /**
     * Returns whether the animation is currently playing.
     */
    isPlaying(): boolean;
    /**
     * Returns whether the animation is currently paused.
     */
    isPaused(): boolean;
    /**
     * Returns whether the animation is finished playing.
     */
    isFinished(): boolean;
    /**
     * Sets the callback function to be called whenever the animation stops playing.
     */
    setOnFinish(eventCallback: (animatedTexture: AnimatedTextureFileProvider) => void): void;
    /**
     * Duplicates the AnimatedTextureFileProvider and returns the new copy. Can be used for playing the same animation at different offsets.
     */
    clone(): AnimatedTextureFileProvider;
    /**
     * Whether the animation plays in reverse.
     */
    isReversed: boolean;
    /**
     * If enabled, the animation will alternate between normal and reverse each time it loops.
     */
    isPingPong: boolean;
    /**
     * Returns whether the animation was set to automatically play and loop.
     */
    isAutoplay: boolean;
    /**
     * Length of the animation in seconds.
     */
    duration: number;
    /**
     * The animation track used to control the frame animation.
     * 
     * @deprecated Capability no longer supported.
     * 
     * @deprecated
     */
    track: IntStepAnimationTrackKeyFramed;
}

/**
 * An axis aligned rectangle.
 * Used by `anchors` and `offsets` in {@link ScreenTransform} to represent screen boundaries.
 * Rect can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
 */
declare class Rect extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new Rect with the given properties.
     */
    static create(left: number, right: number, bottom: number, top: number): Rect;
    /**
     * Returns a string representation of the Rect.
     */
    toString(): string;
    /**
     * Returns the size of the rectangle as (width, height).
     */
    getSize(): vec2;
    /**
     * Returns the rectangle's center position as (x, y).
     */
    getCenter(): vec2;
    /**
     * Sets the rectangle's size while maintaining its center position.
     */
    setSize(value: vec2): void;
    /**
     * Sets the rectangle's center position while maintaining its size.
     */
    setCenter(value: vec2): void;
    /**
     * The x position of the rectangle's left side.
     */
    left: number;
    /**
     * The x position of the rectangle's right side.
     */
    right: number;
    /**
     * The y position of the rectangle's top side.
     */
    top: number;
    /**
     * The y position of the rectangle's bottom side.
     */
    bottom: number;
}

/**
 * Declares permissions for your Lens project.
 * 
 * @see [Permissions Overview](/spectacles/permission-privacy/overview#list-of-permissions-types).
 */
declare class WorldUnderstandingModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec4 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec4AnimationTrackKeyFramed extends Vec4AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: vec4): void;
}

type Vec4AnimationTrack_KeyFramed = Vec4AnimationTrackKeyFramed;

/**
 * Vec3CurveAnimationPropertyTrack. Stores 3 channel curves and uses bezier interpolation.
 */
declare class Vec3CurveAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec3 animation tracks.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec3AnimationTrackXYZ extends Vec3AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the child track at index `index`
     * 
     * @deprecated
     */
    getChildTrackByIndex(index: number): AnimationTrack;
    /**
     * Sets the child track at index `index` to `track`
     * 
     * @deprecated
     */
    setChildTrackByIndex(index: number, track: AnimationTrack): void;
}

type Vec3AnimationTrack_XYZ = Vec3AnimationTrackXYZ;

/**
 * Represents an animation track using vec3 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec3AnimationTrackKeyFramed extends Vec3AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keyframes.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes the keyframe at `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a keyframe value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: vec3): void;
}

type Vec3AnimationTrack_KeyFramed = Vec3AnimationTrackKeyFramed;

/**
 * Vec3AnimationPropertyTrack. Stores vec3 key framed, uses linear interpolation.
 */
declare class Vec3AnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec2 value keyframes.
 * 
 * @deprecated Use {@link AnimationPlayer} instead.
 * 
 * @deprecated
 */
declare class Vec2AnimationTrackKeyFramed extends Vec2AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keyframes.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes the keyframe at `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a keyframe value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: vec2): void;
}

type Vec2AnimationTrack_KeyFramed = Vec2AnimationTrackKeyFramed;

/**
 * Represents a texture file asset.
 */
declare class Texture extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the width of the texture.
     */
    getWidth(): number;
    /**
     * Returns the height of the texture.
     */
    getHeight(): number;
    getFormat(): TextureFormat;
    /**
     * Creates a marker asset from the texture.
     */
    createMarkerAsset(): MarkerAsset;
    /**
     * Returns a Texture that captures the current state of this Texture Asset.
     */
    copyFrame(): Texture;
    /**
     * Returns the Colorspace of the Texture.
     * 
     * @deprecated
     */
    getColorspace(): Colorspace;
    /**
     * The TextureProvider for the texture, which may control things like animation depending on the texture type.
     * See also: {@link AnimatedTextureFileProvider}.
     */
    control: TextureProvider;
}

/**
 * Declares the Input Framework (Text) permission for your Lens project.
 */
declare class TextInputModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents a Supabase project with configuration details.
 * 
 * @snapOS
 */
declare class SupabaseProject extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
 * @snapOS
     */
    id: string;
    /**
     * @readonly
 * @snapOS
     */
    name: string;
    /**
     * @readonly
 * @snapOS
     */
    url: string;
    /**
     * @readonly
 * @snapOS
     */
    publicToken: string;
}

/**
 * Provides access to Supabase authentication and database capabilities.
 * 
 * @snapOS
 */
declare class SupabaseModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Performs a request to any Supabase Project to replace InternetModule.fetch for supabase.
     * 
     * @snapOS
     */
    performSupabaseRequest(request: Request | string, options?: any): Promise<Response>;
}

/**
 * Tracks music beats and provides events for beat occurrences and playback state changes.
 */
declare class SoundSyncTracker extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The complete beat synchronization data for the current music track.
     * 
     * @readonly
     */
    fullSoundSync: SoundSync;
    /**
     * Event triggered when beat synchronization data becomes available for the track.
     * 
     * @readonly
     */
    onSoundSyncAvailable: event0<void>;
    /**
     * Event triggered when beat synchronization data is cleared, such as when changing tracks.
     * 
     * @readonly
     */
    onSoundSyncCleared: event0<void>;
    /**
     * Event triggered when any beat occurs in the music.
     * 
     * @readonly
     */
    onBeat: event1<SoundSyncBeat, void>;
    /**
     * Event triggered when a down beat (first beat within a measure) occurs in the music.
     * 
     * @readonly
     */
    onDownBeat: event1<SoundSyncBeat, void>;
    /**
     * Current playback position (in seconds) of the tracked music.
     * 
     * @readonly
     */
    playbackPosition: number;
    /**
     * Indicates whether music is currently playing.
     * 
     * @readonly
     */
    isPlaying: boolean;
    /**
     * Event triggered when music playback begins, providing information about the track.
     * 
     * @readonly
     */
    onPlaybackStarted: event1<ExternalMusicInfo, void>;
    /**
     * Event triggered when music playback is stopped or reset.
     * 
     * @readonly
     */
    onPlaybackReset: event0<void>;
}

/**
 * Represents a single musical beat used to synchronize effects with music.
 */
declare class SoundSyncBeat extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The time in seconds when this beat occurs in the music track.
     * 
     * @readonly
     */
    timestamp: number;
    /**
     * The position of this beat within its measure, starting with 1.
     * 
     * @readonly
     */
    beatIndex: number;
}

/**
 * Represents beat synchronization data for a music track.
 */
declare class SoundSync extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Total duration of the track in seconds.
     * 
     * @readonly
     */
    trackDurationSeconds: number;
    /**
     * The interval between consecutive beats in milliseconds.
     * 
     * @readonly
     */
    beatPeriodMS: number;
    /**
     * Tempo of the music track expressed as beats per minute (BPM).
     * 
     * @readonly
     */
    beatsPerMinute: number;
    /**
     * Number of beats in each musical measure of this music track.
     * 
     * @readonly
     */
    numBeatsInMeasure: number;
    /**
     * Timestamps of downbeats in milliseconds.
     * 
     * @readonly
     */
    downbeatsTimestampsMS: number[];
    /**
     * Timestamps of all beats in the music track in milliseconds.
     * 
     * @readonly
     */
    allBeatsTimestampMS: number[];
}

/**
 * Provides access to a Scan system that allows users to scan objects, places, and cars with a database of item labels within a Lens.
 * 
 * @see [Scan Overview](/lens-studio/features/lens-cloud/scan/scan-overview)
 * 
 * @exposesUserData
 */
declare class ScanModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts a single Scan call using the provided list of ScanModule.Contexts. On success it will invoke `scanComplete` providing a JSON string. On failure it will invoke `onFailure` with a failure message passed in as an argument.
     * 
     * @exposesUserData
     */
    scan(contexts: string[], scanComplete: (resultJson: string) => void, scanFailed: (failureMessage: string) => void): void;
    /**
     * Optional property to pass in a texture for Scan to use.
     * 
     * @exposesUserData
     */
    scanTarget: Texture;
}

/**
 * A proxy class that provides the access to the properties of the sampler under the hood of the passes contained in the {@link Material} asset and {@link VFXAsset} via either VFXAsset's `PassWrapper.samplers` or Material's `Pass.samplers`. Each property returns a corresponding {@link SamplerWrapper}.
 * 
 * This class uses dynamic properties, meaning that its properties depend on the referenced material or vfx asset and thus not shown below.
 * 
 * In the example below, the material that is referenced in the material asset contains the `baseTex` property, which this class then provides access to.
 */
declare class SamplerWrappers extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * An accessor for Pass.samplers when using PassWrappers
 */
declare class SamplerWrapper extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether the texture should wrap.
     */
    wrap: WrapMode;
    /**
     * Whether the texture should wrap in the x-axis.
     */
    wrapU: WrapMode;
    /**
     * Whether the texture should wrap in the y-axis.
     */
    wrapV: WrapMode;
    /**
     * Whether the texture should wrap in the z-axis.
     */
    wrapW: WrapMode;
    /**
     * How the texture will be filtered by the sampler.
     */
    filtering: FilteringMode;
    /**
     * The texture used by the sampler.
     */
    texture: Texture;
}

/**
 * Represents a mesh asset.
 * 
 * @see {@link RenderMeshVisual}.
 */
declare class RenderMesh extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a list of values of each vertex in the RenderMesh for the specified attribute.
     * @deprecated Use getVertexDataForAttribute() instead.
     * 
     * @deprecated
     */
    extractVerticesForAttribute(attributeName: string): number[];
    /**
     * Get the bone names on the mesh.
     */
    extractBoneNames(): string[];
    /**
     * Get the bone inverse matrices on the mesh
     */
    extractBoneInverseMatrices(): mat4[];
    /**
     * Returns a list of indices of each vertex in the RenderMesh.
     * @deprecated Use getIndexBuffer() instead.
     * 
     * @deprecated
     */
    extractIndices(): number[];
    /**
     * Returns a variant containing either a vector of 16-bit or 32-bit unsigned integers representing the indices of the mesh,
     * or an empty state if no indices are present.
     */
    getIndexBuffer(): Uint32Array | Uint16Array;
    /**
     * Returns a typed array containing vertex data for the specified attribute.
     * More efficient than extractVerticesForAttribute as it uses Float32Array instead of Number[].
     */
    getVertexDataForAttribute(attributeName: string): Float32Array;
    /**
     * The RenderObjectProvider for this RenderMesh, which can provide more controls depending on the mesh type.
     * See also: {@link FaceRenderObjectProvider}
     */
    control: RenderObjectProvider;
    /**
     * The index data type used by this mesh.
     * 
     * @readonly
     */
    indexType: MeshIndexType;
    /**
     * The topology type used by this mesh.
     * 
     * @readonly
     */
    topology: MeshTopology;
    /**
     * Returns the minimum value in each dimension of the axis-aligned bounding box containing this mesh.
     * 
     * @readonly
     */
    aabbMin: vec3;
    /**
     * Returns the maximum value in each dimension of the axis-aligned bounding box containing this mesh.
     * 
     * @readonly
     */
    aabbMax: vec3;
}

/**
 * Declares the coarse location tracking permission for your Lens project.
 * 
 * @see [Permissions Overview](/spectacles/permission-privacy/overview#list-of-permissions-types).
 * @see [Location](/spectacles/about-spectacles-features/apis/location) guide for Spectacles.
 * @see {@link LocationService}
 */
declare class RawLocationModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents a rotation animation track using euler angles.
 * 
 * @deprecated
 */
declare class QuaternionAnimationTrackXYZEuler extends QuaternionAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns child track at index `index`.
     * 
     * @deprecated
     */
    getChildTrackByIndex(index: number): AnimationTrack;
    /**
     * Sets child track at index `index` to track `track`.
     * 
     * @deprecated
     */
    setChildTrackByIndex(index: number, track: AnimationTrack): void;
}

type QuaternionAnimationTrack_XYZEuler = QuaternionAnimationTrackXYZEuler;

/**
 * Represents an animation track using quaternion value keyframes.
 * 
 * @deprecated
 */
declare class QuaternionAnimationTrackKeyFramed extends QuaternionAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: quat): void;
}

type QuaternionAnimationTrack_KeyFramed = QuaternionAnimationTrackKeyFramed;

/**
 * QuatAnimationPropertyTrack. Stores quaternions, uses sLERP
 */
declare class QuatAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Declares the precise location tracking permission for your Lens project.
 * 
 * @see [Permissions Overview](/spectacles/permission-privacy/overview#list-of-permissions-types).
 * @see [Location](/spectacles/about-spectacles-features/apis/location) guide for Spectacles.
 * @see {@link LocationService}
 */
declare class ProcessedLocationModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Controls how a mesh will get rendered. Each Pass acts as an interface for the shader it's associated with.
 * Any properties on a Pass's shader will automatically become properties on that Pass.
 * For example, if the shader defines a variable named `baseColor`, a script would be able to access that property as `material.mainPass.baseColor`.
 */
declare class Pass extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    [index: string]: any;
    /**
     * The name of the Pass.
     */
    name: string;
    /**
     * Whether the material renders on both sides of a mesh face.
     */
    twoSided: boolean;
    /**
     * Enables depth-sorting.
     */
    depthTest: boolean;
    /**
     * Enables writing pixels to the depth buffer.
     */
    depthWrite: boolean;
    /**
     * Controls the masking of color channels with a vec4b representing each channel with a boolean.
     */
    colorMask: vec4b;
    /**
     * Line width used for rendering.
     */
    lineWidth: number;
    /**
     * Extend render object's aabb to (1 + value). Only applys when user select FrustumCullMode.Extend
     */
    frustumCullPad: number;
    /**
     * Set min corner of aabb. It only applys when user selects FrustumCullMode.UserDefinedAABB
     */
    frustumCullMin: vec3;
    /**
     * Set max corner of aabb. It only applys when user selects FrustumCullMode.UserDefinedAABB
     */
    frustumCullMax: vec3;
    /**
     * The cull mode used for rendering.
     */
    cullMode: CullMode;
    /**
     * Mode for setting frustum culling on Pass
     */
    frustumCullMode: FrustumCullMode;
    /**
     * Changes the position that each polygon gets drawn.
     */
    polygonOffset: vec2;
    /**
     * Number of times the pass will be rendered. Useful with the Instance ID node in Material Editor.
     */
    instanceCount: number;
    /**
     * The blend mode used for rendering. Possible values:
     * 
     * | BlendMode                     | Value | Expression                    |
     * | ----------------------------- | ----- | ----------------------------- |
     * | Normal                        | 0     | SrcAlpha, OneMinusSrcAlpha    |
     * | MultiplyLegacy [DEPRECATED]	| 1	    | DstColor, OneMinusSrcAlpha    |
     * | AddLegacy [DEPRECATED]        | 2     | One, One                      |
     * | Screen	                    | 3	    | One, OneMinusSrcColor         |
     * | PremultipliedAlpha            | 4	    | One, OneMinusSrcAlpha         |
     * | AlphaToCoverage               | 5	    | Blend Disabled                |
     * | Disabled                      | 6	    | Blend Disabled                |
     * | Add                           | 7	    | SrcAlpha, One                 |
     * | AlphaTest                     | 8	    | Blend Disabled                |
     * | ColoredGlass                  | 9	    | Blend Disabled                |
     * | Multiply                      | 10    | DstColor, Zero                |
     * | Min                           | 11    | One, One                      |
     * | Max                           | 12    | One, One                      |
     * 
     * ```
     * // Sets the blend mode of the main pass for a material to Screen
     * //@input Asset.Material material
     * 
     * script.material.mainPass.blendMode = 3;
     * ```
     */
    blendMode: BlendMode;
    /**
     * Returns texture samplers used by this pass to set filtering and wrap modes.
     * 
     * @readonly
     */
    samplers: SamplerWrappers;
    /**
     * The stencil test state for Pass.
     */
    stencilState: StencilState;
    /**
     * Enables writing pixels to the frame.
     * 
     * @deprecated Use {@link Pass#colorMask} instead.
     * 
     * @deprecated
     */
    writesColor: boolean;
}

/**
 * An asset that describes how visual objects should appear.
 * 
 * @remarks
 * Each Material is a collection of {@link Pass} which define the actual rendering passes.
 * Materials are used by {@link MaterialMeshVisual} for drawing meshes in the scene.
 * 
 * @see [Material Overview](https://developers.snap.com/lens-studio/features/graphics/materials/overview).
 */
declare class Material extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a copy of the Material.
     * 
     * @mutates
     */
    clone(): Material;
    /**
     * Returns the number of {@link Pass} for the Material.
     */
    getPassCount(): number;
    /**
     * Returns the {@link Pass} of the Material at index `index`.
     */
    getPass(index: number): Pass;
    /**
     * The first Pass of the Material.
     */
    mainPass: Pass;
}

/**
 * A Licensed Sounds audio track from Asset LIbrary.
 */
declare class LicensedAudioTrackAsset extends AudioTrackAsset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the {@link ExternalMusicInfo} object for the current external music track. This can be used to compare two audio tracks during the Lens runtime.
     */
    getExternalMusicInfo(): ExternalMusicInfo;
}

/**
 * Provides access to the open internet. Available only on Spectacles and Camera Kit.
 */
declare class InternetModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * This function creates a WebViewOptions instance that allows you to configure your webview.
     * 
     * **Resolution:** `vec2` type representing the desired webpage resolution.
     * 
     * _Note: This is capped at 2048x2048._
     * _Note: Once a webview has been created this can not be changed._
     * 
     * @experimental
 * @snapOS
     */
    static createWebViewOptions(resolution: vec2): WebViewOptions;
    /**
     * The fetch() method starts the process of fetching a resource from the internet, returning a promise that is fulfilled once the response is available.
     * 
     * The promise resolves to a {@link Response} object representing the response to your request.
     * 
     * A fetch() promise only rejects in cases of malformed URLs or network errors. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors. These errors can be checked manually via the Response status properties.
     * 
     * Syntax
     * ```
     * fetch(resource)
     * fetch(resource, options)
     * ```
     * 
     * `resource` Defines the URL you wish to fetch, or a {@link Request} object.
     * 
     * `options` Object containing any custom settings you want to apply to the request. Available options are `body`, `method`, `headers`, `redirect`, and `keepalive`. For more information on these properties see the {@link Request} class. If a {@link Request} was given for `resource`, then these options will entry-wise override the options specified in the {@link Request} object.
     * 
     * Example
     * 
     * ```
     * //@input Asset.InternetModule internetModule
     * var internetModule = script.internetModule;
     * 
     * // For this example assume this URL simply responds with the same body
     * // that it receives.
     * let request = new Request("https://<Your URL>.com", {
     *     method: "POST",
     *     body: JSON.stringify({ user: { name: "user", career: "developer" }}),
     *     headers: {
     *         "Content-Type": "application/json",
     *     },
     * });
     * 
     * let response = await internetModule.fetch(request, {
     *     body: JSON.stringify({ user: { name: "user", career: "salesman" }})
     * });
     * if (response.status != 200) {
     *     print("Failure: response not successful");
     *     return;
     * }
     * 
     * let contentTypeHeader = response.headers.get("content-type");
     * if (!contentTypeHeader.includes("application/json")) {
     *    print("Failure: wrong content type in response");
     *    return;
     * }
     * 
     * let responseJson = await response.json();
     * let username = responseJson.json["user"]["name"];
     * let career = responseJson.json["user"]["career"];
     * 
     * print(career); // will print "salesman"
     * 
     * ```
     * 
     * @snapOS
     */
    fetch(request: Request | string, options?: any): Promise<Response>;
    /**
     * Get a `DynamicResource` to be used with `RemoteMediaModule` from `mediaUrl`.
     * 
     * @snapOS
 * @cameraKit
     */
    makeResourceFromUrl(mediaUrl: string): DynamicResource;
    /**
     * Get a `DynamicResource` to be used with `RemoteMediaModule` from a `Blob`.
     * 
     * @snapOS
 * @cameraKit
     */
    makeResourceFromBlob(blob: Blob): DynamicResource;
    /**
     * Perform an http request described by {@link RemoteServiceHttpRequest}.
     * 
     * The following example demonstrates how to load a Texture using the InternetModule and {@link RemoteMediaModule}.
     * ```js
     * //@input Asset.InternetModule internetModule
     * //@input Asset.RemoteMediaModule remoteMediaModule
     * //@input Component.Image image
     * 
     * let request = RemoteServiceHttpRequest.create();
     * request.url = "https://docs.snap.com/img/spectacles/spectacles-project-info-settings.png";
     * 
     * script.internetModule
     *     .performHttpRequest(request, function(response){
     *         const dynamicResource = response.asResource()
     * 
     *         script.remoteMediaModule
     *             .loadResourceAsImageTexture(dynamicResource, function(texture) {
     * 
     *             script.image.mainPass.baseTex = texture
     *         },function(error){
     *             print(error)
     *         })
     *     })
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    performHttpRequest(requestOptions: RemoteServiceHttpRequest, onHttpResponse: (response: RemoteServiceHttpResponse) => void): void;
    /**
     * This function will create a new instance of a WebView with the specified options. Once it has been created, onSuccess will be invoked, which returns the {@link Texture} of the WebView for rendering. This {@link Texture} contains a reference to the {@link WebPageTextureProvider} through its `Control` property. {@link WebPageTextureProvider} can be used for sending events and actions to the WebView. In the event of an error, the `onError` callback is invoked with the error message.
     * 
     * Arguments:
     * - **options:** The options for a specific WebView.
     * - **onSuccess:** Invoked on successful WebView creation. Provides the Asset.Texture for rendering and control.
     * - **onError:** Invoked on creation failure. Provides an error message.
     * 
     * _Note: Only 1 callback will be invoked, and only once._
     * 
     * _Note: After creation, the webview will later invoke onReady on the WebPageTextureProvider.control object to indicate it is ready for handling events and actions._
     * 
     * Creating a Webview Texture in JavaScript:
     * 
     * ```js
     * // Create the options
     * var resolution = new vec2(512, 512);
     * var options = InternetModule.createWebViewOptions(resolution);
     * 
     * // Create the WebView
     * script.internetModule.createWebView(
     * 	options,
     * 	(texture) => {
     * 		script.image.mainPass.baseTex = texture;
     * 		webViewControl = texture.control;
     * 		webViewControl.onReady.add(() => {
     * 			print("onReady");
     * 			webViewControl.loadUrl("https://snap.com");
     * 		});
     * 	},
     * 	(msg) => {
     * 		print("Error:" + msg);
     * 	}
     * );
     * ```
     * 
     * Creating a Webview Texture in TypeScript:
     * 
     * ```ts
     * const resolution = new vec2(512,512)
     * const options = InternetModule.createWebViewOptions(resolution)
     * 
     * this.internetModule.createWebView(
     * 	options,
     * 	(texture: Asset.Texutre) => {
     * 		this.image.mainPass.baseTex = texture
     * 		this.webViewControl = texture.control
     * 		this.webViewControl.onReady.add(() => {
     * 			print("onReady")
     * 			this.webViewControl.loadUrl("https://snap.com")
     * 		})
     * 	},
     * 	(msg: string) => {
     * 		print(`Error: ${msg}`)
     * 	}
     * )
     * ```
     * 
     * @experimental
 * @snapOS
     */
    createWebView(options: WebViewOptions, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * The createWebSocket() method initiates a WebSocket connection with the given `wss` URL and returns a {@link WebSocket} object that can be used to send and receive messages from the server.
     * 
     * Syntax
     * ```
     * createWebSocket(url)
     * ```
     * 
     * `url` Defines the `wss` URL to which to establish the WebSocket connection.
     * 
     * Example
     * 
     * ```
     * //@input Asset.InternetModule internetModule
     * var internetModule = script.internetModule;
     * 
     * // Create WebSocket connection.
     * let socket = script.internetModule.createWebSocket("wss://<some-url>");
     * socket.binaryType = "blob";
     * 
     * // Listen for the open event
     * socket.onopen = (event) => {
     *     // Socket has opened, send a message back to the server
     *     socket.send("Message 1");
     * 
     *     // Try sending a binary message
     *     // (the bytes below spell 'Message 2')
     *     const message = [77, 101, 115, 115, 97, 103, 101, 32, 50];
     *     const bytes = new Uint8Array(message);
     *     socket.send(bytes);
     * };
     * 
     * // Listen for messages
     * socket.onmessage = async (event) => {
     *     if (event.data instanceof Blob) {
     *         // Binary frame, can be retrieved as either Uint8Array or string
     *         let bytes = await event.data.bytes();
     *         let text = await event.data.text();
     * 
     *         print("Received binary message, printing as text: " + text);
     *     } else {
     *         // Text frame
     *         let text = event.data;
     *         print("Received text message: " + text);
     *     }
     * });
     * 
     * socket.onclose = (event) => {
     *     if (event.wasClean) {
     *         print("Socket closed cleanly");
     *     } else {
     *         print("Socket closed with error, code: " + event.code);
     *     }
     * };
     * 
     * socket.onerror = (event) => {
     *     print("Socket error");
     * };
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    createWebSocket(url: string, protocols?: any): WebSocket;
}

/**
 * Represents an animation track using stepped integer value keyframes.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class IntStepNoLerpAnimationTrackKeyFramed extends IntAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: number): void;
}

type IntStepNoLerpAnimationTrack_KeyFramed = IntStepNoLerpAnimationTrackKeyFramed;

/**
 * Represents an animation track using stepped integer value keyframes.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class IntStepAnimationTrackKeyFramed extends IntAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: number): void;
}

type IntStepAnimationTrack_KeyFramed = IntStepAnimationTrackKeyFramed;

/**
 * IntAnimationPropertyTrack. Stores ints, step function clamping.
 */
declare class IntStepAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * IntAnimationPropertyTrack. Stores ints, linear interpolation.
 */
declare class IntAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Asset that contains [Gaussian Splats](/lens-studio/features/graphics/gaussian-splatting). Used with {@link GaussianSplattingVisual}.
 */
declare class GaussianSplattingAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Static factory method. that creates a new GaussianSplattingAsset using the provided data buffers:
     * - PositionsXYZ: an interleaved Float32Array of 3D positions (px, py, pz for each splat),
     * - ScalesXYZ: an interleaved Float32Array of 3D scales (sx, sy, sz for each splat),
     * - RotationsWXYZ: an interleaved Float32Array of quaternions (qw, qx, qy, qz for each splat),
     * - ColorsRGBA: an interleaved Float32Array of colors (r, g, b, a for each splat).
     */
    static createFromBuffers(positionsXYZ: Float32Array, scalesXYZ: Float32Array, rotationsWXYZ: Float32Array, colorsRGBA: Float32Array): GaussianSplattingAsset;
    /**
     * The number of frames in the asset (in case of GSAF)
     */
    getNumberOfFrames(): number;
    /**
     * The number of splats in the asset. For GSAF, it's the total number of splats across all frames.
     */
    getSplatCount(): number;
    /**
     * Returns the 3D positions of all splats as an interleaved Float32Array (x, y, z for each splat).
     */
    getSplatPositions(): Float32Array;
    /**
     * Returns the 3D scale values of all splats as an interleaved Float32Array (x, y, z for each splat).
     */
    getSplatScales(): Float32Array;
    /**
     * Returns the rotations of all splats as an interleaved Float32Array of quaternions (w, x, y, z for each splat).
     */
    getSplatRotations(): Float32Array;
    /**
     * Returns the colors of all splats as an interleaved Float32Array (r, g, b, a for each splat).
     */
    getSplatColors(): Float32Array;
    /**
     * Sets the 3D positions of all splats from an interleaved Float32Array (x, y, z for each splat).
     */
    setSplatPositions(vec3Array: Float32Array): void;
    /**
     * Sets the 3D scale values of all splats from an interleaved Float32Array (x, y, z for each splat).
     */
    setSplatScales(vec3Array: Float32Array): void;
    /**
     * Sets the rotations of all splats from an interleaved Float32Array of quaternions (w, x, y, z for each splat).
     */
    setSplatRotations(quatsWxyzArray: Float32Array): void;
    /**
     * Sets the colors of all splats from an interleaved Float32Array (r, g, b, a for each splat).
     */
    setSplatColors(rgbaArray: Float32Array): void;
}

/**
 * Represents a single entry in a {@link FontFamily}, mapping a {@link Font} asset to a style (weight + italic).
 */
declare class FontFamilyEntry {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new FontFamilyEntry with default values.
     */
    static create(): FontFamilyEntry;
    /**
     * The Font asset for this entry.
     */
    font: Font;
    /**
     * The font weight (e.g. 400 for Regular, 700 for Bold).
     */
    weight: number;
    /**
     * Whether this entry is italic.
     */
    italic: boolean;
}

/**
 * Represents a single entry in a {@link FontCollection}. Each entry holds an asset reference
 * (either a {@link Font} or {@link FontFamily}) along with a weight and italic flag that
 * determine the style the entry maps to. For FontFamily entries, weight and italic are ignored.
 */
declare class FontCollectionEntry {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new FontCollectionEntry with default values.
     */
    static create(): FontCollectionEntry;
    /**
     * The Font or FontFamily asset for this entry.
     */
    asset: FontFamily | Font;
    /**
     * The font weight this entry maps to (e.g. 400 for Regular, 700 for Bold). Ignored for FontFamily entries.
     */
    weight: number;
    /**
     * Whether this entry maps to an italic style. Ignored for FontFamily entries.
     */
    italic: boolean;
}

/**
 * FloatCurveAnimationPropertyTrack. Stores a single curve, uses bezier interpolation.
 */
declare class FloatCurveAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents an animation track using vec3 value keyframes for a bezier curve.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class FloatBezierAnimationTrackKeyFramed extends FloatAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: vec3): void;
}

type FloatBezierAnimationTrack_KeyFramed = FloatBezierAnimationTrackKeyFramed;

/**
 * Represents an animation track using float value keyframes.
 * @deprecated Prefer the newer {@link AnimationPlayer} APIs.
 * 
 * @deprecated
 */
declare class FloatAnimationTrackKeyFramed extends FloatAnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Removes all keys.
     * 
     * @deprecated
     */
    removeAllKeys(): void;
    /**
     * Removes key at index `index`.
     * 
     * @deprecated
     */
    removeKeyAt(index: number): void;
    /**
     * Adds a key with value `value` at time `time`.
     * 
     * @deprecated
     */
    addKey(time: number, value: number): void;
}

type FloatAnimationTrack_KeyFramed = FloatAnimationTrackKeyFramed;

/**
 * FloatAnimationPropertyTrack. Stores floats, uses linear interpolation
 */
declare class FloatAnimationPropertyTrack extends AnimationPropertyTrack {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Declares the face tracking permission for your Lens project.
 * 
 * @see [Permissions Overview](/spectacles/permission-privacy/overview#list-of-permissions-types).
 */
declare class FaceTrackingModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides an interface to the `ExternalMusic` feature, and opts the Lens into using the feature when present in the scene.
 * @remarks
 * When this module is present in a scene, an unbundled and licensed AudioTrack asset must be present in the scene as well. This means the Lens developer should:
 * 
 * 1. Import a licensed music track from the Asset Library
 * 2. On the imported audio asset, make sure `Bundled` is disabled
 * 3. Reference the audio asset somewhere in the scene (for example, `@input audioAsset: AudioTrackAsset`)
 * 
 * When this module is present in a Lens, the client running the Lens (either Snapchat or Lens Studio) will automatically fetch and auto-play the licensed music track included in the Lens.
 * 
 * This provides the benefits of:
 * - The music file is not included in the lens, leading to smaller lens size
 * - Special features like {@link LyricsTracker | Lyrics} may be available to the Lens, depending on the audio track
 * - On Snapchat, a user can use the built-in music tool to adjust the music the Lens is using, and the Lens can react to that change
 * 
 * This also adds the following limitations, some of which are due to the inclusion of Licensed Audio Tracks:
 * - The Lens cannot control or affect music playback, since it's controlled externally by the user.
 * - The Lens must contain a single, unbundled Licensed Audio track. The Lens is not able to play it or any other audio through local methods, such as AudioComponent.
 * - If device location is not available, or the track is not available in the user’s country, the sound in the Lens will be muted. The user will have an ability to remove or replace unavailable tracks.
 * - The final audio will be mixed directly into the Lens.
 */
declare class ExternalMusicModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the {@link ExternalMusicInfo} object for the current external music track. This can be used to compare two audio tracks during the Lens runtime.
     */
    getExternalMusicInfo(): ExternalMusicInfo;
    /**
     * Returns the {@link LyricsTracker} for the current external music track.
     */
    getLyricsTracker(): LyricsTracker;
    /**
     * Returns the sound sync (beats) tracker for the external music track.
     */
    getSoundSyncTracker(): SoundSyncTracker;
    /**
     * Event that fires when an external music track starts playing.
     * 
     * @readonly
     */
    onTrackStarted: event1<ExternalMusicInfo, void>;
    /**
     * Event that triggers when the external music track changes.
     * 
     * @readonly
     */
    onTrackChanged: event1<ExternalMusicInfo, void>;
    /**
     * Event that fires when an external music track stops playing.
     * 
     * @readonly
     */
    onTrackStopped: event0<void>;
    /**
     * Event that fires when an external music track is removed.
     * 
     * @readonly
     */
    onTrackRemoved: event0<void>;
    /**
     * Returns true if an external music track is set.
     * 
     * @readonly
     */
    isTrackSet: boolean;
}

/**
 * The module that allows Device Tracking capabilities in a Lens. Used for managing permissions.
 */
declare class DeviceTrackingModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The main entry point for integrating commerce functionalities into a Lens.
 * It is typically added as an {@link Asset} in a Lens Studio project. This module provides access to the primary method
 * for configuring and creating a {@link Client} object, which is used for all in-Lens purchase and product management
 * needs. This module allows a Lens to interact with the commerce system, enabling features like displaying products,
 * initiating purchases, and managing user entitlements.
 * 
 * @snapOS
 */
declare class CommerceKitModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Allows for creating a fully configured commerce client.
     * {@link ClientOptions} can be provided to customize its behavior, such as setting up a listener for purchase
     * updates. The returned client is the primary tool for all commerce interactions, including displaying products,
     * managing purchases, and checking purchase history.
     * 
     * @snapOS
     */
    createClient(options: Commerce.ClientOptions): Commerce.Client;
}

/**
 * Provides an interface to the device’s camera roll and allows users to select multiple media.
 */
declare class CameraRollModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the maximum allowed selection limit for media picker.
     */
    static getMaxSelectionLimit(): number;
    /**
     * Returns the default selection limit for media picker.
     */
    static getDefaultSelectionLimit(): number;
    /**
     * Opens the device camera roll interface to allow multiple media selection with specified configuration options.
     */
    showMediaPicker(options: CameraRollModule.ShowOptions): void;
    /**
     * Closes the device camera roll interface.
     */
    hideMediaPicker(): void;
    /**
     * Array of currently selected media objects.
     * 
     * @readonly
     */
    selectedMedia: CameraRollMedia[];
    /**
     * Event triggered when selections are updated.
     * 
     * @readonly
     */
    onSelectionsUpdated: event1<CameraRollMedia[], void>;
}

/**
 * Represents media selected from the device camera roll.
 */
declare class CameraRollMedia extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Checks if two CameraRollMedia objects represent the same media.
     */
    isSameMedia(other: CameraRollMedia): boolean;
    /**
     * Type of media.
     * 
     * @readonly
     */
    mediaType: CameraRollMediaType;
    /**
     * Dynamic resource for accessing the media content.
     * 
     * @readonly
     */
    resource: DynamicResource;
    /**
     * Unique hash of the source media. Can be used to identify the media, for example as a key to store in maps.
     * 
     * @readonly
     */
    mediaId: number;
}

/**
 * Allows the Lens to incorporate voice transcription with higher quality than the {@link VoiceMlModule} and supports a vast number of different languages.
 */
declare class AsrModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts a new ASR session. While active the Lens will transcribe speech to text.
     * 
     * @remarks
     * `asrTranscriptionOptions` provides the options for the session
     * 
     * The event `onTranscriptionUpdateEvent` is triggered when the transcription is updated.
     * The event `onTranscriptionErrorEvent` is triggered when there is an error in the transcription process.
     * 
     * If `startTranscribing` is called again while a session is active, the current session is cancelled and a new one started.
     * 
     * @exposesUserData
 * @snapOS
     */
    startTranscribing(transcriptionOptions: AsrModule.AsrTranscriptionOptions): void;
    /**
     * Stops an active ASR Session before transcription is finished and discards the current session.
     * 
     * @exposesUserData
 * @snapOS
     */
    stopTranscribing(streamType?: number): Promise<void>;
}

/**
 * A layer containing different properties. Examples include position, rotation, scale or any other arbitrary properties a user would like to add and sample from.
 */
declare class AnimationPropertyLayer extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create new animation asset.
     */
    static create(): AnimationPropertyLayer;
    /**
     * Gets a property from a layer. Ex. position, scale, rotation, etc.
     */
    getProperty(name: string): AnimationPropertyTrack;
    /**
     * Sets a property for a layer.
     */
    setProperty(name: string, property: AnimationPropertyTrack): void;
    /**
     * Sets a custom property for a layer.
     */
    setCustomProperty(name: string, property: AnimationPropertyTrack, callback: (name: string, value: vec3 | quat | number) => void): void;
    /**
     * Renames a property that already exists in the layer.
     */
    renameProperty(oldName: string, newName: string): void;
    /**
     * Deletes a property that exists in the layer.
     */
    removeProperty(name: string): void;
}

/**
 * The event registration returned by `AnimationAsset`'s `createEvent`.
 */
declare class AnimationPropertyEventRegistration extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Controls animation playback for a single animation layer.
 * See also: {@link AnimationMixer}.
 * 
 * @deprecated
 */
declare class AnimationMixerLayer extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts playing the animation with an offset of `offsetArg` seconds.
     * The animation will play `cycles` times, or loop forever if `cycles` is -1.
     * 
     * @deprecated
     */
    start(offset: number, cycles: number): void;
    /**
     * Starts the animation with an offset of `offsetArg` seconds.
     * The animation will play `cycles` times, or loop forever if `cycles` is -1.
     * `eventCallback` will be called after the animation finishes.
     * 
     * @deprecated
     */
    startWithCallback(offset: number, cycles: number, eventCallback: (name: string, animationMixer: AnimationMixer) => void): void;
    /**
     * Pauses the animation.
     * 
     * @deprecated
     */
    pause(): void;
    /**
     * Resumes the animation if it has been paused.
     * 
     * @deprecated
     */
    resume(): void;
    /**
     * Stops the animation from playing and jumps to the animation's end.
     * 
     * @deprecated
     */
    stop(): void;
    /**
     * Returns the length of the animation in seconds.
     * 
     * @deprecated
     */
    getDuration(): number;
    /**
     * Returns whether the animation is currently playing.
     * 
     * @deprecated
     */
    isPlaying(): boolean;
    /**
     * Returns the current playback position of the animation in seconds.
     * 
     * @deprecated
     */
    getTime(): number;
    /**
     * Returns a copy of this AnimationMixerLayer, with the name changed to `newName`.
     * 
     * @deprecated
     */
    clone(newName: string): AnimationMixerLayer;
    /**
     * The name of the AnimationMixerLayer.
     * 
     * @deprecated
     */
    name: string;
    /**
     * The name of the animation layer being used for this animation.
     * 
     * @deprecated
     */
    animationLayerName: string;
    /**
     * The weight of this animation layer. Range is from [0-1], 0 being no animation strength and 1 being full animation strength.
     * 
     * @deprecated
     */
    weight: number;
    /**
     * A multiplying value for the speed of this animation.
     * For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed in half.
     * 
     * @deprecated
     */
    speedRatio: number;
    /**
     * The starting point for this animation clip.
     * If `rangeType` is set to `Time`, this is the point to start at in seconds.
     * If `rangeType` is set to `Frames`, this is the frame number to start at.
     * 
     * @deprecated
     */
    from: number;
    /**
     * The ending point for this animation clip.
     * If `rangeType` is set to `Time`, this is the point to end at in seconds.
     * If `rangeType` is set to `Frames`, this is the frame number to end at.
     * 
     * @deprecated
     */
    to: number;
    /**
     * The framerate (frames per second) of the animation.
     * 
     * @deprecated
     */
    fps: number;
    /**
     * If true, the animation will play play in reverse.
     * 
     * @deprecated
     */
    reversed: boolean;
    /**
     * The number of times this animation will play. If -1, the animation will loop forever.
     * 
     * @deprecated
     */
    cycles: number;
    /**
     * If true, the animation will stop having an effect.
     * 
     * @deprecated
     */
    disabled: boolean;
    /**
     * @deprecated
     */
    blendMode: AnimationLayerBlendMode;
    /**
     * @deprecated
     */
    scaleMode: AnimationLayerScaleMode;
    /**
     * The range type used for defining the animation clip.
     * If set to `AnimationClip.RangeType.Time`, `to` and `from` represent times in seconds.
     * If set to `AnimationClip.RangeType.Frames`, `to` and `from` represent frame numbers.
     * 
     * @deprecated
     */
    rangeType: AnimationClip.RangeType;
    /**
     * Defines the animation's looping behavior.
     * If set to `AnimationClip.PostInfinity.Cycle`, the animation will restart from the beginning each time it loops.
     * If set to `AnimationClip.PostInfinity.Oscillate`, the animation will switch between normal and reverse playback each time it loops.
     * This is set to `Cycle` by default.
     * 
     * @deprecated
     */
    postInfinity: AnimationClip.PostInfinity;
}

/**
 * Configures an animation layer for a single {@link SceneObject}.
 * Gives access to position, rotation, scale and blend shape animation tracks.
 * 
 * @see [Playing 3D Animation Guide](/lens-studio/essential-skills/adding-interactivity/additional-examples/playing-3d-animation)
 * @deprecated Use {@link AnimationPlayer} instead
 * 
 * @deprecated
 */
declare class AnimationLayer extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a {@link FloatAnimationTrack} from this AnimationLayer's blend shapes.
     * 
     * @deprecated
     */
    getBlendShapeTrack(shapeName: string): FloatAnimationTrack;
    /**
     * Sets or adds a {@link FloatAnimationTrack} to this AnimationLayer's blend shapes.
     * 
     * @deprecated
     */
    setBlendShapeTrack(shapeName: string, track: FloatAnimationTrack): void;
    /**
     * The {@link Vec3AnimationTrack} controlling position in this AnimationLayer.
     * 
     * @deprecated
     */
    position: Vec3AnimationTrack;
    /**
     * The {@link QuaternionAnimationTrack} controlling rotation in this AnimationLayer.
     * 
     * @deprecated
     */
    rotation: QuaternionAnimationTrack;
    /**
     * The {@link Vec3AnimationTrack} controlling scale in this AnimationLayer.
     * 
     * @deprecated
     */
    scale: Vec3AnimationTrack;
    /**
     * The {@link IntAnimationTrack} controlling visibility in this AnimationLayer.
     * 
     * @deprecated
     */
    visibility: IntAnimationTrack;
}

/**
 * Represents animation data. Can have multiple {@link AnimationPropertyLayer}s. Used in {@link AnimationClip}.
 * 
 * @remarks
 * AnimationAssets themselves do not handle playing or orchestrating animations. This is left to the {@link AnimationPlayer} component to handle.
 */
declare class AnimationAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create new animation asset.
     */
    static create(): AnimationAsset;
    /**
     * Deletes an event that will be triggered at a given time.
     */
    deleteEvent(registration: AnimationPropertyEventRegistration): void;
    /**
     * Creates an event that will be triggered at a given time of this animation asset.
     */
    createEvent(eventName: string, time: number): AnimationPropertyEventRegistration;
    /**
     * Adds AnimationPropertyLayer to Animation asset.
     */
    addLayer(layerName: string, layer: AnimationPropertyLayer): void;
    /**
     * Delete the AnimationPropertyLayer named `layerName`.
     */
    deleteLayer(layerName: string): void;
    /**
     * Retrieves an animation associated with a particular object.
     */
    getLayer(layerName: string): AnimationPropertyLayer;
    /**
     * Delete all the AnimationPropertyLayer in this AnimationAsset.
     */
    clearLayers(): void;
    /**
     * Animation duration in seconds.
     * 
     * @readonly
     */
    duration: number;
    /**
     * Denotes how many key frames this animation was sampled at.
     * 
     * @readonly
     */
    fps: number;
}

/**
 * A type containing two arrays which map positionally to each other.   For example, this is used by {@link FaceRenderObjectProvider}, to provide a `names` array which contains the list of expresion names on the face, while the `values` array which contains the weight of each expression.
 */
declare class NamedValues extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The array of names which positionally correspond to the `value` array property.
     * 
     * @readonly
     */
    names: string[];
    /**
     * The array of values which positionally correspond to the `names` array property.
     * 
     * @readonly
     */
    values: Float32Array;
}

/**
 * WebViewPolicy allows creators to control what websites are allowed to be loaded in the WebView. This can be helpful to prevent users from navigating away from your desired webpage through external links.
 * 
 * _Note:_
 * Partial matches are now currently supported but subdomains are.
 * `*snap.com` is not supported.
 * `*.snap.com` is supported.
 * 
 * _Note:_
 * `*` is not supported for complex patterns but a single `*` on its own can be used to represent "all".
 * 
 * _Note:_
 * `snap.com` would be the same as `*.snap.com`.
 * 
 * @experimental
 */
declare class WebViewPolicy extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Set an allow list of websites that can be loaded.
     * 
     * _Note: Default is to allow any website._
     * 
     * _Note: The platform may block websites._
     * 
     * _Note: A platform blocked website may not be overridden using this property._
     * 
     * @experimental
     */
    allow: string[];
    /**
     * Set a block list of websites that will not be loaded.
     * 
     * _Note: Default is to not block any website._
     * 
     * _Note: A platform allowed website can be blocked by this property._
     * 
     * @experimental
     */
    block: string[];
}

/**
 * WebViewOptions allow you to specify various aspects of the WebView that will be created. These are only used at creation time.
 * 
 * @see {@link InternetModule#createWebViewOptions}
 * 
 * @experimental
 */
declare class WebViewOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The resolution of the WebView that was requested. Units are in pixels.
     * 
     * _Note: This resolution is unrelated to the device resolution._
     * _Note: This does not change the scale or dimensions of the RenderMeshVisual that is used to draw the WebView._
     * 
     * __Tip:__
     * For best results choose a resolution that best matches your expected aspect ratio and desired responsive size of web content. This can not be changed later without creating a new WebView instance.
     * 
     * @experimental
     */
    resolution: vec2;
    /**
     * Allows the ability to set various web request policies.
     * 
     * @readonly
 * @experimental
     */
    requestPolicy: WebViewPolicy;
}

/**
 * Event type for WebSocket message events. This event fires when a message has been received from the server. Listen for this event by using `addEventListener` with `message`, or by setting the `onmessage` property.
 * 
 * @snapOS
 * @cameraKit
 */
declare class WebSocketMessageEvent extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The type of the data received, `text` or `binary`, returned as a string.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    type: string;
    /**
     * The data received from the server. For binary messages, this is of type {@link Blob}. For text messages, this is a string.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    data: Blob | string;
}

/**
 * Event type for WebSocket close events. This event indicates when the WebSocket connection has been closed. Listen for this event by using `addEventListener` with `close`, or by setting the `onclose` property.
 * 
 * @snapOS
 * @cameraKit
 */
declare class WebSocketCloseEvent extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an `unsigned short` indicating the close code sent by the server.
     * 
     * | Status Code | Meaning                          | Description                                                                                                                                                       |
     * |-------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | 0–999       |                                  | Not used.                                                                                                                                                         |
     * | 1000        | Normal Closure                   | The connection successfully completed the purpose for which it was created.                                                                                       |
     * | 1001        | Going Away                       | The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.                |
     * | 1002        | Protocol error                   | The endpoint is terminating the connection due to a protocol error.                                                                                               |
     * | 1003        | Unsupported Data                 | The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)       |
     * | 1004        | Reserved                         | Reserved. A meaning might be defined in the future.                                                                                                               |
     * | 1005        | No Status Rcvd                   | Reserved. Indicates that no status code was provided even though one was expected.                                                                                |
     * | 1006        | Abnormal Closure                 | Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.                             |
     * | 1007        | Invalid frame payload data       | The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).          |
     * | 1008        | Policy Violation                 | The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable. |
     * | 1009        | Message Too Big                  | The endpoint is terminating the connection because a data frame was received that is too large.                                                                   |
     * | 1010        | Mandatory Ext.                   | The client is terminating the connection because it expected the server to negotiate one or more extensions, but the server didn't.                               |
     * | 1011        | Internal Error                   | The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.                            |
     * | 1012        | Service Restart                  | The server is terminating the connection because it is restarting.                                                                                                |
     * | 1013        | Try Again Later                  | The server is terminating the connection due to a temporary condition, e.g., it is overloaded and is casting off some of its clients.                             |
     * | 1014        | Bad Gateway                      | The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.                   |
     * | 1015        | TLS handshake                    | Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).                   |
     * | 1016–2999   |                                  | For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.                                       |
     * | 3000–3999   |                                  | For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol. |
     * | 4000–4999   |                                  | For private use, and thus can't be registered. |
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    code: number;
    /**
     * The reason the WebSocket connection was closed.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    reason: string;
    /**
     * True if the socket connection was closed without error.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    wasClean: boolean;
}

/**
 * WebSocket provides an API for managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 * 
 * @snapOS
 * @cameraKit
 */
declare class WebSocket extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enqueues the given data to be transmitted to the server over the WebSocket connection. If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically.
     * 
     * Text or binary data can be sent via this method. To send text data pass a `string` into the send function. To send binary, pass a `Uint8Array`.
     * 
     * Text example:
     * ```
     * webSocket.send("Hello World");
     * ```
     * 
     * Binary example:
     * ```
     * // This sequence is `Hello World` in Uint8
     * const uint8Array = new Uint8Array([
     * 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
     * ]);
     * webSocket.send(uint8Array);
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    send(data: Uint8Array | string): void;
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already CLOSED, this method does nothing.
     * 
     * @snapOS
 * @cameraKit
     */
    close(): void;
    /**
     * Adds a listener for a WebSocket event. Supported event types are:
     * 
     * `close`
     * Fired when a connection with a WebSocket is closed. Also available via the onclose property.
     * 
     * `error`
     * Fired when a connection with a WebSocket has been closed because of an error, such as when some data couldn't be sent. Also available via the onerror property.
     * 
     * `message`
     * Fired when data is received through a WebSocket. Also available via the onmessage property.
     * 
     * `open`
     * Fired when a connection with a WebSocket is opened. Also available via the onopen property.
     * 
     * @snapOS
 * @cameraKit
     */
    addEventListener(type: string, listener: (event: WebSocketEvent) => void): void;
    /**
     * Controls how binary data is received over the connection. Currently only `blob` is supported. The `arraybuffer` type is not yet supported.
     * 
     * ```
     * // Create WebSocket connection.
     * webSocket = script.remoteServiceModule.createWebSocket("wss://<some-url>");
     * socket.binaryType = "blob";
     * 
     * // Listen for messages
     * socket.addEventListener("message", (event) => {
     *     if (event.data instanceof Blob) {
     *         // Binary frame, can be retrieved as either Uint8Array or string
     *         let bytes = await event.data.bytes();
     *         let text = await event.data.text();
     *     } else {
     *         // Text frame
     *         let text = event.data;
     *     }
     * });
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    binaryType: string;
    /**
     * Returns the current state of the WebSocket connection.
     * 
     * `CONNECTING (0)`
     * Socket has been created. The connection is not yet open.
     * 
     * `OPEN (1)`
     * The connection is open and ready to communicate.
     * 
     * `CLOSING (2)`
     * The connection is in the process of closing.
     * 
     * `CLOSED (3)`
     * The connection is closed or couldn't be opened.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    readyState: number;
    /**
     * Returns the url to which the WebSocket is connecting/connected.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    url: string;
    /**
     * Set a listener for the `open` event. The event passed is {@link WebSocketEvent}. Equivalent to `addEventListener("open", ...)`. This listener will be run in addition to any listeners added via `addEventListener`.
     * 
     * ```
     * websocket.onopen = (event) => {
     *   print("The connection has been opened successfully.");
     * };
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    onopen: (event: WebSocketEvent) => void;
    /**
     * Set a listener for the `message` event. The event passed is {@link WebSocketMessageEvent}. Equivalent to `addEventListener("message", ...)`. This listener will be run in addition to any listeners added via `addEventListener`.
     * 
     * ```
     * websocket.onmessage = async (event) => {
     *     if (event.data instanceof Blob) {
     *         // Binary frame, can be retrieved as either Uint8Array or string
     *         let bytes = await event.data.bytes();
     *         let text = await event.data.text();
     * 
     *         print("Received binary message, printing as text: " + text);
     *     } else {
     *         // Text frame
     *         let text = event.data;
     *         print("Received text message: " + text);
     *     }
     * };
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    onmessage: (event: WebSocketMessageEvent) => void;
    /**
     * Set a listener for the `close` event. The event passed is {@link WebSocketCloseEvent}. Equivalent to `addEventListener("close", ...)`. This listener will be run in addition to any listeners added via `addEventListener`.
     * 
     * ```
     * websocket.onclose = (event) => {
     *   print("The connection has been closed.");
     * };
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    onclose: (event: WebSocketCloseEvent) => void;
    /**
     * Set a listener for the `error` event. The event passed is {@link WebSocketErrorEvent}. Equivalent to `addEventListener("error", ...)`. This listener will be run in addition to any listeners added via `addEventListener`.
     * 
     * ```
     * websocket.onerror = (event) => {
     *   print("The connection has been closed due to an error: " + error);
     * };
     * ```
     * 
     * @snapOS
 * @cameraKit
     */
    onerror: (event: WebSocketEvent) => void;
}

/**
 * The response returned by a `RemoteServiceHttpRequest` call.
 * 
 * @snapOS
 * @cameraKit
 */
declare class RemoteServiceHttpResponse extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the header of the response.
     * 
     * @snapOS
 * @cameraKit
     */
    getHeader(name: string): string;
    /**
     * @deprecated
 * @snapOS
 * @cameraKit
     */
    loadAsTexture(): Texture;
    /**
     * Get the result as a `DynamicResource` to be used with `RemoteMediaModule`.
     * 
     * @snapOS
 * @cameraKit
     */
    asResource(): DynamicResource;
    /**
     * The http response status code.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    statusCode: number;
    /**
     * The headers of the response.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    headers: {[key:string]:string};
    /**
     * the content type of the response.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    contentType: string;
    /**
     * The body of the response.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    body: string;
}

/**
 * A http request which can be sent using the `RemoteServiceModule`.
 * 
 * @snapOS
 * @cameraKit
 */
declare class RemoteServiceHttpRequest extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a new http request.
     * 
     * @snapOS
 * @cameraKit
     */
    static create(): RemoteServiceHttpRequest;
    /**
     * Get the header of the http request.
     * 
     * @snapOS
 * @cameraKit
     */
    getHeader(name: string): string;
    /**
     * Set the header of the http request.
     * 
     * @snapOS
 * @cameraKit
     */
    setHeader(name: string, value: string): void;
    /**
     * The URL which this http request should point to.
     * 
     * @snapOS
 * @cameraKit
     */
    url: string;
    /**
     * The method which should be used to send this http request.
     * 
     * @snapOS
 * @cameraKit
     */
    method: RemoteServiceHttpRequest.HttpRequestMethod;
    /**
     * The body of the http request.
     * 
     * @snapOS
 * @cameraKit
     */
    body: Uint8Array | number[] | string;
    /**
     * The headers of the http request.
     * 
     * @snapOS
 * @cameraKit
     */
    headers: {[key:string]:string};
    /**
     * The content type of the http request.
     * 
     * @snapOS
 * @cameraKit
     */
    contentType: string;
}

/**
 * Represents an HTTP response used by the Fetch API in {@link RemoteServiceModule}.
 * 
 * @snapOS
 */
declare class Response extends ScriptObject {
    /**
     * Retrieve the body as a string.
     * 
     * @snapOS
     */
    text(): Promise<string>;
    /**
     * Retrieve the body as `Uint8Array`.
     * 
     * @snapOS
     */
    bytes(): Promise<Uint8Array>;
    /**
     * Retrieve the body as a json object.
     * 
     * @snapOS
     */
    json(): Promise<any>;
    /**
     * Retrieve the body as a Blob.
     * 
     * @snapOS
     */
    blob(): Promise<Blob>;
        constructor(body: string | Uint8Array | Blob | null, options?: any);
    /**
     * The HTTP status code converted to string.
     * 
     * @readonly
 * @snapOS
     */
    statusText: string;
    /**
     * True if the response returned HTTP Status Code 200 (OK).
     * 
     * @readonly
 * @snapOS
     */
    ok: boolean;
    /**
     * The response's HTTP status code. HTTP status code values: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status.
     * 
     * @readonly
 * @snapOS
     */
    status: number;
    /**
     * The URL of the Response. This is the final URL obtained after any redirects.
     * 
     * @readonly
 * @snapOS
     */
    url: string;
    /**
     * The {@link Headers} of the Response.
     * 
     * @readonly
 * @snapOS
     */
    headers: Headers;
    /**
     * True if one of the body retrieval methods has been called for this Response.
     * 
     * @readonly
 * @snapOS
     */
    bodyUsed: boolean;
}

/**
 * Represents an HTTP request used by the Fetch API in {@link RemoteServiceModule}.
 * 
 * @snapOS
 */
declare class Request extends ScriptObject {
        constructor(input: string, options?: any);
    /**
     * Retrieve the body as a string.
     * 
     * @snapOS
     */
    text(): Promise<string>;
    /**
     * Retreive the body as `Uint8Array`.
     * 
     * @snapOS
     */
    bytes(): Promise<Uint8Array>;
    /**
     * Retrieve the body as a json object.
     * 
     * @snapOS
     */
    json(): Promise<any>;
    /**
     * The URL of the request.
     * 
     * @readonly
 * @snapOS
     */
    url: string;
    /**
     * The HTTP request method. Must be one of these strings: `GET`, `POST`, `PUT`, `DELETE`, or `PATCH`. Default is `GET`.
     * 
     * @readonly
 * @snapOS
     */
    method: string;
    /**
     * Indicates how redirects are handled. Can be one the following strings: `follow`, `error`, or `manual`. Default value is `follow`.
     * 
     * @readonly
 * @snapOS
     */
    redirect: string;
    /**
     * The {@link Headers} of the Request.
     * 
     * @readonly
 * @snapOS
     */
    headers: Headers;
    /**
     * True if one of the body retrieval methods has been called for this Request.
     * 
     * @readonly
 * @snapOS
     */
    bodyUsed: boolean;
}

/**
 * Headers for the Fetch API in {@link RemoteServiceModule}. Allows you to perform actions on HTTP request and response headers, like retrieving, setting, adding to, and removing headers.
 * 
 * You can retrieve a Headers object via the {@link Request.headers} and {@link Response.headers} properties, and create a new Headers object using the Headers() constructor.
 * 
 * @snapOS
 */
declare class Headers extends ScriptObject {
        constructor();
    /**
     * Append a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.
     * 
     * The difference between set() and append() is that if the specified header already exists and accepts multiple values, set() will overwrite the existing value with the new one, whereas append() will append the new value onto the end of the set of values.
     * 
     * ```
     * myHeaders.append("Accept-Encoding", "deflate");
     * myHeaders.append("Accept-Encoding", "gzip");
     * myHeaders.get("Accept-Encoding"); // Returns 'deflate, gzip'
     * ```
     * 
     * @snapOS
     */
    append(name: string, value: string): void;
    /**
     * Sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.
     * 
     * The difference between set() and Headers.append is that if the specified header already exists and accepts multiple values, set() overwrites the existing value with the new one, whereas Headers.append appends the new value to the end of the set of values.
     * 
     * ```
     * myHeaders.set("Accept-Encoding", "deflate");
     * myHeaders.set("Accept-Encoding", "gzip");
     * myHeaders.get("Accept-Encoding"); // Returns 'gzip'
     * ```
     * 
     * @snapOS
     */
    set(name: string, value: string): void;
    /**
     * Deletes a header from the Headers object.
     * 
     * ```
     * myHeaders.append("Content-Type", "image/jpeg");
     * myHeaders.get("Content-Type"); // Returns 'image/jpeg'
     * myHeaders.delete("Content-Type");
     * myHeaders.get("Content-Type"); // Returns null, as it has been deleted
     * ```
     * 
     * @snapOS
     */
    delete(name: string): void;
    /**
     * Returns an iterator allowing you to go through all keys contained in the Headers. The keys are String objects.
     * 
     * ```
     * // Print the keys
     * for (const key of myHeaders.keys()) {
     *   print(key);
     * }
     * ```
     * 
     * @snapOS
     */
    keys(): string[];
    /**
     * Returns an iterator allowing you to go through all values contained in the Headers. The values are String objects.
     * 
     * ```
     * // Print the values
     * for (const value of myHeaders.values()) {
     *   print(value);
     * }
     * ```
     * 
     * @snapOS
     */
    values(): string[];
    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object. Both the key and value of each pair are String objects.
     * 
     * ```
     * // Print the key/value pairs
     * for (const pair of myHeaders.entries()) {
     *     print(`${pair[0]}: ${pair[1]}`);
     * }
     * ```
     * 
     * @snapOS
     */
    entries(): string[][];
    /**
     * Returns a comma-separated string of all the values of a header within a Headers object with a given name. If the requested header doesn't exist in the Headers object, returns null.
     * 
     * ```
     * myHeaders.append("Accept-Encoding", "deflate");
     * myHeaders.append("Accept-Encoding", "gzip");
     * myHeaders.get("Accept-Encoding"); // Returns "deflate, gzip"
     * ```
     * 
     * @snapOS
     */
    get(name: string): string;
    /**
     * Returns a boolean stating whether the Headers object contains the given header.
     * 
     * @snapOS
     */
    has(name: string): boolean;
}

/**
 * Arguments used with the {@link DeepLinkModule#onUriReceived} event.
 * 
 * @snapOS
 */
declare class DeepLinkUriReceivedArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The URI string representing the deep link that has been received.
     * 
     * @readonly
 * @snapOS
     */
    uri: string;
}

/**
 * Represents a blob, which is a file-like object of immutable, raw data. Can be read as text or binary data. Currently the binary data is only supported as `Uint8Array`.
 * 
 * @snapOS
 * @cameraKit
 */
declare class Blob extends ScriptObject {
    /**
     * Returns a Promise that resolves with a `Uint8Array` containing the contents of the blob as an array of bytes.
     * 
     * @snapOS
 * @cameraKit
     */
    bytes(): Promise<Uint8Array>;
    /**
     * Returns a Promise that resolves with a string containing the contents of the blob, interpreted as UTF-8.
     * 
     * @snapOS
 * @cameraKit
     */
    text(): Promise<string>;
        constructor(blobParts: Blob | Uint8Array | string[] | null, options?: any);
    /**
     * The size of the blob's data in bytes.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    size: number;
    /**
     * The MIME type of the blob.
     * 
     * @readonly
 * @snapOS
 * @cameraKit
     */
    type: string;
}

/**
 * Ray Tracing settings for a camera.
 */
declare class RayTracingSettings extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Toggles Ray Tracing on/off.
     */
    enabled: boolean;
}

/**
 * Contains methods for Text encoding
 */
declare class TextEncoder extends ScriptObject {
        constructor();
    /**
     * Encodes a string as Uint8Array. utf-8 by default.
     */
    encode(value: string): Uint8Array;
    /**
     * Encodes and saves the `value` into the `result` array.
     */
    encodeInto(value: string, result: Uint8Array): void;
    /**
     * The encoding format set in the TextEncoder.
     * 
     * @readonly
     */
    encoding: string;
}

/**
 * Contains methods for Text decoding
 */
declare class TextDecoder extends ScriptObject {
        constructor(encoding?: string);
    /**
     * Decodes a Uint8Array as a string. utf8 by default.
     */
    decode(data: Uint8Array): string;
    /**
     * The encoding format set in the TextDecoder.
     * 
     * @readonly
     */
    encoding: string;
}

/**
 * Used to help control vertex animations on the SceneObject.
 */
declare class VertexCache extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The current time of vertex animations on this SceneObject.
     */
    currentTime: number;
    /**
     * The weight applied to vertex animations on this SceneObject.
     */
    weight: number;
}

/**
 * Arguments used with the `InteractionComponent.onTriggerPrimary` event.
 */
declare class TriggerPrimaryEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Arguments used with the `InteractionComponent.onTouchStart` event.
 */
declare class TouchStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     * 
     * @readonly
     */
    touchId: number;
    /**
     * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Arguments used with the `InteractionComponent.onTouchMove` event.
 */
declare class TouchMoveEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     * 
     * @readonly
     */
    touchId: number;
    /**
     * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Arguments used with the `InteractionComponent.onTouchEnd` event.
 */
declare class TouchEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     * 
     * @readonly
     */
    touchId: number;
    /**
     * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Fill settings used by several text related classes.
 * 
 * Used in {@link Text}'s `textFill` property,
 * {@link DropshadowSettings}' `fill` property, and
 * {@link OutlineSettings}' `fill` property.
 */
declare class TextFill extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Controls which drawing method is used. Can switch between `Texture` mode (for drawing using a tiled texture) or `Solid` mode (for drawing a solid color).
     */
    mode: TextFillMode;
    /**
     * If `mode` is set to `TextFillMode.Solid`, this will be used as the solid color used in drawing.
     */
    color: vec4;
    /**
     * If `mode` is set to `TextFillMode.Texture`, this will be used as the color tint over the texture.
     */
    colorTint: vec4;
    /**
     * If `mode` is set to `TextFillMode.Texture`, this defines how many times the texture will tile across its drawing zone.
     */
    tileCount: number;
    /**
     * If `mode` is set to `TextFillMode.Texture`, this defines what area should be used for tiling the texture.
     */
    tileZone: TileZone;
    /**
     * If `mode` is set to `TextFillMode.Texture`, this defines what type of stretching is used when the
     * Texture's aspect ratio doesn't match the drawing area's aspect ratio.
     */
    textureStretch: StretchMode;
    /**
     * If `mode` is set to `TextFillMode.Texture`, this will be used as the texture asset used in drawing.
     */
    texture: Texture;
}

/**
 * Used in {@link Text}'s `outlineSettings` property.
 * Configures how text outlining will appear on a Text component.
 */
declare class OutlineSettings extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether outline is enabled on the Text.
     */
    enabled: boolean;
    /**
     * Settings for how the outline is drawn.
     */
    fill: TextFill;
    /**
     * The strength of the outline effect, ranging from 0.0 (no outline) to 1.0 (very strong outline).
     */
    size: number;
}

/**
 * Used in {@link Text}'s `dropShadowSettings` property.
 * Configures how dropshadow will appear on a Text component.
 */
declare class DropshadowSettings extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether dropshadow is enabled on the Text.
     */
    enabled: boolean;
    /**
     * Settings for how the inside of the dropshadow is drawn.
     */
    fill: TextFill;
    /**
     * An (x, y) offset controlling where the dropshadow is drawn relative to the Text.
     */
    offset: vec2;
}

/**
 * Settings for rendering the background on a {@link Text} component.
 * Accessible through the {@link Text} component's `backgroundSettings` property.
 */
declare class BackgroundSettings extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the background will be rendered.
     */
    enabled: boolean;
    /**
     * Settings for how the inside of the background is drawn.
     */
    fill: TextFill;
    /**
     * Controls how far in each direction the background should extend away from the text.
     */
    margins: Rect;
    /**
     * Controls how rounded the corner of the background should be.
     */
    cornerRadius: number;
}

/**
 * Renders 3D text with specific style, layout and material.
 * 
 * @see [3D Text](/lens-studio/features/text/3d-text) guide.
 */
declare class Text3D extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Splits the Text3D into individual RenderMeshVisuals. This destroys the Text3D component and you can no longer edit its properties like text.
     */
    split(): RenderMeshVisual[];
    getBoundingBox(start?: number, end?: number): Rect;
    /**
     * Text string to be drawn.
     */
    text: string;
    /**
     * The font source for this text component. Can be a Font, FontFamily, or FontCollection asset.
     */
    fontSource: FontFamily | FontCollection | Font;
    /**
     * Font asset used.
     */
    font: Font;
    /**
     * Controls the font weight. Usually a multiple of 100 between 100 and 900 inclusively. Will use closest font weight available on the system.
     */
    weight: number;
    /**
     * If enabled, the rendered text will try to use an italic font style.
     */
    italic: boolean;
    /**
     * If enabled, inputted text will be interpreted as rich text.
     */
    enableRichText: boolean;
    /**
     * Font size used.
     */
    size: number;
    /**
     * How deep the text meshes should be relative to the line height. 0-1 portion of the basic height which will be used for mesh depth. Values > 1 are valid.
     */
    extrusionDepth: number;
    /**
     * Starting from the Text3D's local position control whether the meshes are extruded forwards, backwards, or both directions
     */
    extrudeDirection: number;
    /**
     * Controls how text should be handled when it goes past the vertical boundaries defined by the world space rect or ScreenTransform.
     */
    verticalOverflow: VerticalOverflow;
    /**
     * Controls how text should be handled when it goes past the horizontal boundaries defined by the world space rect or ScreenTransform.
     */
    horizontalOverflow: HorizontalOverflow;
    /**
     * If enabled, the rendered text will always scale to fit the boundaries defined by the world space rect or ScreenTransform.
     */
    sizeToFit: boolean;
    /**
     * Modifies the spacing between letters. Set to 0 by default, which uses the font’s normal letter spacing. Negative values will remove space between letters, and positive values will add more space between letters.
     */
    letterSpacing: number;
    /**
     * Modifies the vertical spacing between lines, as a multiple of lines. 1 will be single spacing, 2 will be double spaced, and 0.5 would be half the normal line height.
     */
    lineSpacing: number;
    /**
     * Optimizes Text3D by combining glyph meshes.
     */
    enableBatching: boolean;
    /**
     * Controls the boundaries the text is aligned and wraps within when not using ScreenTransform. Referred to as the Layout Rect in the Inspector panel.
     */
    worldSpaceRect: Rect;
    /**
     * Overrides the capitalization of the text rendered.
     */
    capitilizationOverride: CapitilizationOverride;
    /**
     * Makes the Text component editable. When this is enabled the Text can be clicked to open up the device keyboard and edit the contents.
     */
    editable: boolean;
    /**
     * Use this property to control whether to show the input preview the keyboard. Note this preview also enables cursor movement.
     */
    showEditingPreview: boolean;
    /**
     * Use this property to override the touch handling for when to open the device keyboard when the Text is editable.
     */
    touchHandler: InteractionComponent;
    /**
     * This event will notify you when the user starts typing.
     * 
     * @readonly
     */
    onEditingStarted: event0<void>;
    /**
     * This event will notify you on every edit to the text while the user is typing.
     * 
     * @readonly
     */
    onEditingUpdated: event1<string, void>;
    /**
     * This event will notify you when the user finishes editing the text.
     * 
     * @readonly
     */
    onEditingFinished: event1<string, void>;
}

/**
 * Renders 2D text with specific style and layout.
 * 
 * @remarks
 * Supports Dynamic Text.
 * 
 * @see [Text](/lens-studio/features/text/2d-text) guide.
 */
declare class Text extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Gets the bounding box encompassing the characters in the range from `start` to `end`. The range is inclusive of `start` and exclusive of `end`.
     */
    getBoundingBox(start?: number, end?: number): Rect;
    /**
     * Text string to be drawn.
     */
    text: string;
    /**
     * The font source for this text component. Can be a Font, FontFamily, or FontCollection asset.
     */
    fontSource: FontFamily | FontCollection | Font;
    /**
     * Font asset used.
     */
    font: Font;
    /**
     * Controls the font weight. Usually a multiple of 100 between 100 and 900 inclusively. Will use closest font weight available on the system.
     */
    weight: number;
    /**
     * If enabled, the rendered text will try to use an italic font style.
     */
    italic: boolean;
    /**
     * If enabled, inputted text will be interpreted as rich text.
     */
    enableRichText: boolean;
    /**
     * Font size used.
     */
    size: number;
    /**
     * Controls how text should be handled when it goes past the vertical boundaries defined by the world space rect or ScreenTransform.
     */
    verticalOverflow: VerticalOverflow;
    /**
     * Controls how text should be handled when it goes past the horizontal boundaries defined by the world space rect or ScreenTransform.
     */
    horizontalOverflow: HorizontalOverflow;
    /**
     * Settings for how the text is drawn, such as fill color or texture.
     */
    textFill: TextFill;
    /**
     * Settings for how dropshadow is used in text drawing.
     */
    dropshadowSettings: DropshadowSettings;
    /**
     * Settings for how text outline is used in text drawing.
     */
    outlineSettings: OutlineSettings;
    /**
     * Settings for drawing a background behind the text.
     */
    backgroundSettings: BackgroundSettings;
    /**
     * If enabled, the rendered text will always scale to fit the boundaries defined by the world space rect or ScreenTransform.
     */
    sizeToFit: boolean;
    /**
     * Modifies the spacing between letters. Set to 0 by default, which uses the font's normal letter spacing.
     * Negative values will remove space between letters, and positive values will add more space between letters.
     */
    letterSpacing: number;
    /**
     * Modifies the vertical spacing between lines, as a multiple of lines. 1 will be single spacing, 2 will be double spaced, and 0.5 would be half the normal line height.
     */
    lineSpacing: number;
    /**
     * If enabled, the text material will use Depth Testing. Useful when Text exists in 3D space.
     */
    depthTest: boolean;
    /**
     * Whether the text should be visible in both front and back.
     */
    twoSided: boolean;
    /**
     * Controls the masking of color channels with a vec4b representing each channel with a boolean.
     */
    colorMask: vec4b;
    /**
     * How the text should be blended during rendering.
     */
    blendMode: BlendMode;
    /**
     * Controls the boundaries the text is aligned and wraps within when not using ScreenTransform. Referred to as the Layout Rect in the Inspector panel.
     */
    worldSpaceRect: Rect;
    /**
     * Overrides the capitalization of the text rendered.
     */
    capitilizationOverride: CapitilizationOverride;
    /**
     * Makes the Text component editable. When this is enabled the Text can be clicked to open up the device keyboard and edit the contents.
     */
    editable: boolean;
    /**
     * Use this property to control whether to show the input preview the keyboard. Note this preview also enables cursor movement.
     */
    showEditingPreview: boolean;
    /**
     * Use this property to override the touch handling for when to open the device keyboard when the Text is editable.
     */
    touchHandler: InteractionComponent;
    /**
     * This event will notify you when the input keyboard opens.
     * 
     * @readonly
     */
    onEditingStarted: event0<void>;
    /**
     * This event will notify you on every edit to the text while the user is typing.
     * 
     * @readonly
     */
    onEditingUpdated: event1<string, void>;
    /**
     * This event will notify you when the user finishes editing the text.
     * 
     * @readonly
     */
    onEditingFinished: event1<string, void>;
}

/**
 * Arguments used with the `InteractionComponent.onTap` event.
 */
declare class TapEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Represents transform data for deprecated SpriteVisual component. Use {@link ScreenTransform} in combination with {@link Image} component instead.
 * 
 * @deprecated
 */
declare class SpriteAligner extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The location of the point this sprite is bound to.
     * 
     * @deprecated
     */
    bindingPoint: vec2;
    /**
     * The width and height of the SpriteVisual.
     * 
     * @deprecated
     */
    size: vec2;
}

/**
 * Used by {@link HairVisual} to visualize hair strands.
 * 
 * @deprecated
 */
declare class SplineComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents skinning data for rigged meshes. See also: {@link MeshVisual}.
 */
declare class Skin extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the bone on the skin.
     */
    getSkinBone(boneName: string): SceneObject;
    /**
     * Associate the Scene Object `bone` with `boneName`
     */
    setSkinBone(boneName: string, bone: SceneObject): void;
    /**
     * Get all the bone names on the skin.
     */
    getSkinBoneNames(): string[];
    /**
     * Remove all bones on the skin.
     */
    clearBones(): void;
}

/**
 * Arguments used with the `InteractionComponent.onSelectStart` event.
 */
declare class SelectStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Arguments used with the `InteractionComponent.onSelectEnd` event.
 */
declare class SelectEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Arguments used with the {@link InteractionComponent#onScrollStart} event.
 */
declare class ScrollStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized 2D screen position of the user's touches at the start of a scroll gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Arguments used with the {@link InteractionComponent#onScroll} event.
 */
declare class ScrollEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized 2D screen position of the user's touches during a scroll gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    position: vec2;
    /**
     * The delta value between the current and last position.
     * 
     * @readonly
     */
    delta: vec2;
}

/**
 * Arguments used with the {@link InteractionComponent#onScrollEnd} event.
 */
declare class ScrollEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized 2D screen position of the user's touches at the end of a scroll gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Used for positioning objects in 2D screen space. Modifies the position, size, and anchoring of a rectangle relatively to a parent {@link ScreenTransform}.
 * 
 * @remarks
 * It overrides the regular {@link Transform} component on the {@link SceneObject} it's attached to.
 * 
 * @see [Screen Transform](/lens-studio/lens-studio-workflow/scene-set-up/2d/screen-transform-overview) guide.
 */
declare class ScreenTransform extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns true if this ScreenTransform is in a valid screen hierarchy, which is required for anchoring to work.
     * To be in a valid screen hierarchy there must be a {@link Camera} component upward in the parent hierarchy, and every
     * object between the Camera and this one must also have a ScreenTransform.
     */
    isInScreenHierarchy(): boolean;
    /**
     * Converts from a screen position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
     */
    screenPointToLocalPoint(screenPoint: vec2): vec2 | null;
    /**
     * Converts from a screen position to a normalized (-1 to 1) position within the parent object's bounds.
     * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
     */
    screenPointToParentPoint(screenPoint: vec2): vec2 | null;
    /**
     * Converts from a world position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
     */
    worldPointToLocalPoint(worldPoint: vec3): vec2;
    /**
     * Converts from a world position to a normalized (-1 to 1) position within the parent object's bounds.
     * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
     */
    worldPointToParentPoint(worldPoint: vec3): vec2;
    /**
     * Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a world position.
     */
    localPointToWorldPoint(relativeLocalPoint: vec2): vec3;
    /**
     * Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a screen position. This function will calculate the ScreenPoint by heuristically looking for a camera: first checking for a camera in it's parent's hierarchy, then looking for a camera with the same render layer, and finally just choosing the first camera in the scene.
     */
    localPointToScreenPoint(relativeLocalPoint: vec2): vec2;
    /**
     * Returns true if the local point is within the boundaries of this ScreenTransform--that is: its position is within `-1` and `1` in both the x and y coordinates.
     */
    containsLocalPoint(localPoint: vec2): boolean;
    /**
     * Returns true if the screen position is within the boundaries of this ScreenTransform.
     * Useful for checking if a touch event overlaps with this object.
     * This function will calculate the ScreenPoint by heuristically looking for a camera: first checking for a camera in it's parent's hierarchy, then looking for a camera with the same render layer, and finally just choosing the first camera in the scene.
     */
    containsScreenPoint(screenPoint: vec2): boolean;
    /**
     * Returns true if the world position is within the boundaries of this ScreenTransform.
     * The `z` value of the world position is ignored.
     */
    containsWorldPoint(worldPoint: vec3): boolean;
    /**
     * The anchor rect positioning this ScreenTransform proportional to its parent's bounds.
     * For each field, a value of `0` equals the parent's center point, and value of `-1` or `1` (depending on the side) equals the parent's full boundary.
     * 
     * For example, a `top` value of `1.0` means this ScreenTransform's top edge will be exactly at the top edge of its parent.
     * 
     * A `bottom` value of `-0.5` means this ScreenTransform's bottom edge will be halfway between its parent's bottom edge and center.
     * 
     * A `right` value of `0` means this ScreenTransform's right edge will be exactly at its parent's center.
     * 
     * A `left` value of `-2` means this ScreenTransform's left edge will be twice as far from its parent's center as its parent's left edge is.
     */
    anchors: Rect;
    /**
     * This rect is applied after `anchors` to determine the final boundaries of the ScreenTransform.
     * It adds an offset in world units (based on the parent {@link Camera}'s to each edge of the ScreenTransform's boundaries.
     * 
     * For example, a value of `0` for any side will have no effect on boundaries.
     * 
     *  A value of `1.0` for any side will offset that edge by `1.0` world unit.
     */
    offsets: Rect;
    /**
     * Display the debug view of the screen transform.
     */
    enableDebugRendering: boolean;
    /**
     * Basic local scaling applied to the SceneObject.
     */
    scale: vec3;
    /**
     * Basic local position in world units relative to the parent's center. Useful for animating screen elements with a simple offset.
     */
    position: vec3;
    /**
     * Basic local rotation applied to the SceneObject.
     */
    rotation: quat;
    /**
     * Normalized (x, y) position of the center point used in rotation. (-1, -1) being bottom left, (0, 0) being center, and (1, 1) being top right of the image.
     */
    pivot: vec2;
}

/**
 * Overrides the settings on a local {@link ScreenTransform} to fit specific screen region on the device.
 * 
 * @see [Screen Transform](/lens-studio/lens-studio-workflow/scene-set-up/2d/screen-transform-overview) guide.
 */
declare class ScreenRegionComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The region of the screen the local {@link ScreenTransform} will be fit to.
     */
    region: ScreenRegionType;
    /**
     * If true, the {@link ScreenRegionComponent} will resize to account for the on-screen keyboard.
     */
    resizeWithKeyboard: boolean;
}

/**
 * Adds subtle retouching effects to detected faces such as soft skin, teeth whitening, etc.
 * 
 * @see [Retouch](/lens-studio/features/ar-tracking/face/face-retouch) guide.
 */
declare class RetouchVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    isAuto(): boolean;
    /**
     * The index of the face the effect is being applied to.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
    /**
     * The strength of the soft-skin effect.
     */
    softSkinIntensity: number;
    /**
     * @readonly
     */
    softSkinEnabled: boolean;
    /**
     * The strength of the eye sharpening effect.
     */
    sharpenEyeIntensity: number;
    /**
     * @readonly
     */
    eyeSharpeningEnabled: boolean;
    /**
     * The strength of the teeth whitening effect.
     */
    teethWhiteningIntensity: number;
    /**
     * @readonly
     */
    teethWhiteningEnabled: boolean;
    /**
     * The strength of the eye whitening effect.
     */
    eyeWhiteningIntensity: number;
    /**
     * @readonly
     */
    eyeWhiteningEnabled: boolean;
    /**
     * The blur radius of the soft skin effect.
     * 
     * @deprecated Capability is no longer supported.
     * 
     * @deprecated
     */
    softSkinRadius: number;
    /**
     * The Texture used to mask the effect.
     * 
     * @deprecated This property is no longer supported.
     * 
     * @deprecated
     */
    maskTexture: Texture;
    /**
     * 
     * @deprecated This property is no longer supported.
     * 
     * @deprecated
     */
    lookupTexture: Texture;
}

/**
 * Extends {@link MaterialMeshVisual}, adding the capability to utilize specific {@link RenderMesh} assets to depict 3D models within a scene.
 * 
 * @remarks
 * @see {@link BaseMeshVisual}
 * @see {@link MaterialMeshVisual}
 */
declare class RenderMeshVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the weight of the blend shape with the matching name.
     */
    setBlendShapeWeight(name: string, weight: number): void;
    /**
     * Returns the weight of the blend shape with the matching name.
     */
    getBlendShapeWeight(name: string): number;
    /**
     * Clears the blend shape with the matching name.
     */
    unsetBlendShapeWeight(name: string): void;
    /**
     * Returns whether this component has a weight for the blend shape with matching name.
     */
    hasBlendShapeWeight(name: string): boolean;
    /**
     * Resets all blend shape weights on the component.
     */
    clearBlendShapeWeights(): void;
    /**
     * Returns the names of the blend shapes on this RenderMeshVisual.
     */
    getBlendShapeNames(): string[];
    /**
     * Sets the {@link Skin} to use for rendering this mesh.
     */
    setSkin(value: Skin): void;
    /**
     * @deprecated
     */
    setBlendShape(value: BlendShapes): void;
    /**
     * The {@link RenderMesh} asset to render.
     */
    mesh: RenderMesh;
    /**
     * The {@link BlendShapes} component used for rendering this mesh.
     * 
     * @deprecated Use of the {@link BlendShapes} Component is deprecated. The properties it previously contained are now found on {@link RenderMeshVisual}
     * 
     * @deprecated
     */
    blendShape: BlendShapes;
    /**
     * If enabled, normal directions are also blended by blend shapes.
     */
    blendNormals: boolean;
    /**
     * If enabled, blend shapes will affect the component.
     */
    blendShapesEnabled: boolean;
    /**
     * If enabled, rays are generated from this object during raytracing so that it can receive ray-traced reflections.
     */
    emitter: boolean;
    /**
     * If enabled, rays can hit this object during raytracing so that it may be visible in ray-traced reflections.
     */
    receiver: boolean;
}

type MeshVisual = RenderMeshVisual;

/**
 * Arguments used with the {@link InteractionComponent#onPinchStart} event.
 */
declare class PinchStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Change in scale relative to initial span of gesture.
     * 
     * @readonly
     */
    scale: number;
    /**
     * All the normalized 2D screen position of the user's touches at the start of pa inch gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Arguments used with the {@link InteractionComponent#onPinchMove} event.
 */
declare class PinchMoveEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Change in scale relative to initial span of gesture.
     * 
     * @readonly
     */
    scale: number;
    /**
     * All the normalized 2D screen position of the user's touches during a pinch gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Arguments used with the {@link InteractionComponent#onPinchEnd} event.
 */
declare class PinchEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Change in scale relative to initial span of gesture.
     * 
     * @readonly
     */
    scale: number;
    /**
     * All the normalized 2D screen position of the user's touches at the end of a pinch gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Attaches the {@link SceneObject} to the mesh surface of a specific {@link RenderMeshVisual}.
 * 
 * @see [Pin To Mesh](/lens-studio/lens-studio-workflow/scene-set-up/3d/pin-to-mesh#adding-a-pin-to-mesh-component) guide.
 */
declare class PinToMeshComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The UV coordinates on the target mesh to attach to.
     */
    pinUV: vec2;
    /**
     * Index of the UV coordinate set to use for pinning.
     */
    preferredUVLayerIndex: number;
    /**
     * The orientation type to use.
     */
    orientation: PinToMeshComponent.Orientation;
    /**
     * If enabled, interpolated vertex normals will be used when calculating the attachment position.
     */
    useInterpolatedVertexNormal: boolean;
    /**
     * The position offset to apply.
     */
    offsetPosition: vec3;
    /**
     * The euler angle offset to apply. Only has an effect when `orientation` is set to `PositionAndDirection`.
     */
    offsetRotation: vec3;
    /**
     * The target mesh to attach to.
     */
    target: BaseMeshVisual;
    /**
     * The preferred triangle index to attach to when multiple triangles contain the desired UV coordinate.
     */
    preferredTriangle: number;
    /**
     * @deprecated Use {@link PinToMeshComponent.preferredTriangle} instead.
     * 
     * @deprecated
     */
    preferedTriangle: number;
}

/**
 * Arguments used with the {@link InteractionComponent#onPanStart} event.
 */
declare class PanStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The change in position relative to initial position of gesture in normalized screen coordinates.
     * 
     * @readonly
     */
    translation: vec2;
    /**
     * All the normalized 2D screen position of the user's touches at the start of a panning gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Arguments used with the {@link InteractionComponent#onPanMove} event.
 */
declare class PanMoveEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The change in position relative to initial position of gesture in normalized screen coordinates.
     * 
     * @readonly
     */
    translation: vec2;
    /**
     * All the normalized 2D screen position where the user touches while panning. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Arguments used with the {@link InteractionComponent#onPanEnd} event.
 */
declare class PanEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The change in position relative to initial position of gesture in normalized screen coordinates.
     * 
     * @readonly
     */
    translation: vec2;
    /**
     * All the normalized 2D screen position where the user lifted their touches at the end of a panning gesture. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    touches: vec2[];
}

/**
 * Arguments used with the `ManipulateComponent.onManipulateStart` event.
 */
declare class ManipulateStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Result object returned from {@link ManipulateComponent.intersectManipulateFrame}.
 */
declare class ManipulateFrameIntersectResult {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If there was a valid intersection, returns the intersection point in world space.
     */
    getIntersectionPoint(): vec3;
    /**
     * Returns whether there was a valid intersection.
     */
    isValid(): boolean;
}

/**
 * Arguments used with the `ManipulateComponent.onManipulateEnd` event.
 */
declare class ManipulateEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Handles input information from user touch input via the {@link InteractionComponent} to control the Scale, Rotation, and Translation of objects.
 */
declare class ManipulateComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Repositions the object to be within the bounds of `minDistance`, `maxDistance`.
     */
    clampWorldPosition(): void;
    /**
     * Checks for an intersection point between the manipulation plane and a line extending
     * from the camera through the specified screen space point. The screen point is passed in as (x, y) with both values
     * ranging from ([0-1], [0-1]), (0,0) being left-top and (1,1) being right-bottom. The result is returned as a
     * {@link ManipulateFrameIntersectResult} object.
     */
    intersectManipulateFrame(screenSpacePoint: vec2): ManipulateFrameIntersectResult;
    /**
     * Enables or disables the specified ManipulateType for this ManipulateComponent.
     */
    enableManipulateType(type: ManipulateType, enable: boolean): void;
    /**
     * Returns whether the specified ManipulateType is enabled for this ManipulateComponent.
     */
    isManipulateTypeEnabled(type: ManipulateType): boolean;
    /**
     * Returns whether the object that the Manipulate Component is on is currently being manipulated
     * 
     * @readonly
     */
    isManipulating: boolean;
    /**
     * Event fired when manipulation starts.
     * 
     * @readonly
     */
    onManipulateStart: event1<ManipulateStartEventArgs, void>;
    /**
     * Event fired when manipulation ends.
     * 
     * @readonly
     */
    onManipulateEnd: event1<ManipulateEndEventArgs, void>;
    /**
     * Changes swivel behavior based on the object's height relative to the camera.
     */
    isContextualSwivel: boolean;
    /**
     * The minimum height of the object.
     */
    minHeight: number;
    /**
     * The maximum height of the object.
     */
    maxHeight: number;
    /**
     * The minimum size the object can shrink to.
     */
    minScale: number;
    /**
     * The maximum size the object can scale to.
     */
    maxScale: number;
    /**
     * The minimum distance the object can be from the user.
     */
    minDistance: number;
    /**
     * The maximum distance the object can travel from the user.
     */
    maxDistance: number;
    /**
     * Multiplier for swivel rotation speed.
     * For example, a value of 0.5 will cut rotation speed in half,
     * and a value of 2.0 will double rotation speed.
     */
    rotationScale: number;
}

/**
 * Orients a {@link SceneObject} towards a target {@link SceneObject}.
 */
declare class LookAtComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Controls the method of rotation being used.
     */
    lookAtMode: LookAtComponent.LookAtMode;
    /**
     * The "aim" and "up" vectors used when determining rotation.
     * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
     * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
     */
    aimVectors: LookAtComponent.AimVectors;
    /**
     * The vector to be considered the "up" vector when determining rotation.
     */
    worldUpVector: LookAtComponent.WorldUpVector;
    /**
     * The SceneObject this LookAtComponent targets.
     */
    target: SceneObject;
    /**
     * Adds an additional rotation offset.
     */
    offsetRotation: quat;
}

/**
 * Arguments used with the {@link InteractionComponent#onLonPressStart} event.
 */
declare class LongPressStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized 2D screen position where the user started their long touch. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Arguments used with the {@link InteractionComponent#onLongPressEnd} event.
 */
declare class LongPressEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized 2D screen position where the user lifted their long touch. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Applies a liquify effect to anything rendered behind it.
 * 
 * @see [Face Liquify](/lens-studio/features/ar-tracking/face/face-liquify) guide.
 */
declare class LiquifyVisual extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The radius of the liquify effect circle.
     */
    radius: number;
    /**
     * How strong the liquify effect is.
     */
    intensity: number;
}

/**
 * Acts as a source of light in the scene.
 * 
 * @see [Light and Shadows](/lens-studio/features/graphics/light-and-shadow) guide.
 */
declare class LightSource extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The color of the light.
     */
    color: vec3;
    /**
     * The type of light emitted from this light source.
     */
    lightType: LightType;
    /**
     * The falloff type of the light.
     */
    falloffType: FalloffType;
    /**
     * The distance (in cm) at which the light’s intensity reaches 0.0.
     * Use any value that is larger than 100m (10000cm) for a limitless range and better performance (see `FalloffType.Quadratic`).
     */
    falloffRange: number;
    /**
     * The intensity of the light.
     */
    intensity: number;
    /**
     * If enabled, the LightSource will be able to cast shadows.
     * @deprecated Use {@link LightSource.shadowType} instead.
     * 
     * @deprecated
     */
    castsShadows: boolean;
    /**
     * Control whether this light can cast shadows, and what techique to use: Projective or Shadow Map.
     */
    shadowType: ShadowType;
    /**
     * Controls the color used when casting shadows from this LightSource.
     */
    shadowColor: vec4;
    /**
     * The lightness and darkness value of the shadow cast by objects from this light source.
     */
    shadowDensity: number;
    /**
     * Controls the blurring size used when casting shadows from this LightSource.
     */
    shadowBlurRadius: number;
    /**
     * If enabled, the LightSource will be automatically positioned based on its orientation relative to any shadow casting meshes in the scene.
     */
    autoLightSourcePosition: boolean;
    /**
     * If enabled, `shadowFrustumSize` will be automatically updated based on its orientation relative to any shadow casting meshes in the scene.
     */
    autoShadowFrustumSize: boolean;
    /**
     * The simulated distance of the light source from objects to calculate the softness of the shadow.
     */
    shadowFrustumSize: number;
    /**
     * The minimum distance at which shadows will be calculated for this LightSource.
     */
    shadowFrustumNearClipPlane: number;
    /**
     * The maximum distance at which shadows will be calculated for this LightSource.
     */
    shadowFrustumFarClipPlane: number;
    /**
     * Enable if you would like the LightSource to use information from the `diffuseEnvmapTexture` for light color information.
     */
    useEnvmap: boolean;
    /**
     * A value used to increase the intensity of light information derived from the `diffuseEnvmapTexture` exponentially.
     */
    envmapExposure: number;
    /**
     * Controls the amount of rotation applied to the `diffuseEnvmapTexture`.
     */
    envmapRotation: number;
    /**
     * A color image applied to an imaginary skybox the LightSource will use for color information.
     */
    diffuseEnvmapTexture: Texture;
    /**
     * A color image applied to an imaginary skybox the light source will use for specular and reflection information.
     */
    specularEnvmapTexture: Texture;
    /**
     * Controls the strength of blurring done to shadows cast by this LightSource.
     * 
     * @deprecated Use {@link LightSource#shadowBlurRadius} instead.
     * 
     * @deprecated
     */
    gaussianBlurSigma: number;
    /**
     * The set of layers this LightSource will affect.
     */
    renderLayer: LayerSet;
}

/**
 * Enables invoking touch interactions with a {@link BaseMeshVisual} rendered to specific {@link Camera}.
 * 
 * @remarks
 * Sometimes touch events within lens may collide with Snapchat touch events. To avoid this use Touch Blocking.
 * 
 * @see [Touch And Interactions](/lens-studio/features/scripting/touch-input) guide.
 * @see [Touch Blocking](/lens-studio/features/scripting/touch-input#touch-blocking) guide.
 */
declare class InteractionComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Adds a touch type that this component will ignore.
     */
    addTouchBlockingException(exception: string): void;
    /**
     * Sets the camera that will be used for interaction detection.
     */
    setCamera(camera: Camera): void;
    /**
     * Adds a MeshVisual as a target for interaction detection.
     */
    addMeshVisual(meshVisual: BaseMeshVisual): void;
    /**
     * Removes a MeshVisual as a target for interaction detection.
     */
    removeMeshVisual(meshVisual: BaseMeshVisual): void;
    /**
     * Returns the minimum bounding box size used for detecting touches. Value range is from [0-1], relative to screen width.
     */
    getMinimumTouchSize(): number;
    /**
     * Sets the minimum bounding box size used for detecting touches. Value range is from [0-1], relative to screen width.
     */
    setMinimumTouchSize(value: number): void;
    /**
     * Returns whether the user is currently gazing at the object on wearable devices, and when the user is touching on mobile devices.
     * 
     * @readonly
     */
    isFocused: boolean;
    /**
     * Returns whether the user is currently selecting and gazing at an object on wearable devices, or touching it on mobile devices.
     * 
     * @readonly
     */
    isSelected: boolean;
    /**
     * When enabled, interaction events will be invoked only on the"closest" object, where order is defined by distance from camera and camera render order.
     */
    isFilteredByDepth: boolean;
    /**
     * Triggered when a touch event starts--either on the screen or on a touchpad. On wearables with touchpad, the coordinate returned are based on the touchpad and not the screen.
     * 
     * @readonly
     */
    onTouchStart: event1<TouchStartEventArgs, void>;
    /**
     * Triggered when a touch position on the screen is moved.
     * 
     * @readonly
     */
    onTouchMove: event1<TouchMoveEventArgs, void>;
    /**
     * Triggered when a touch event ends.
     * 
     * @readonly
     */
    onTouchEnd: event1<TouchEndEventArgs, void>;
    /**
     * Triggered when the user taps on the screen.
     * 
     * @readonly
     */
    onTap: event1<TapEventArgs, void>;
    /**
     * Triggered when the user double taps on the screen.
     * 
     * @readonly
     */
    onDoubleTap: event1<DoubleTapEventArgs, void>;
    /**
     * Triggered when the user begins to tap and hold.
     * 
     * @readonly
     */
    onLongPressStart: event1<LongPressStartEventArgs, void>;
    /**
     * Triggered when the user ends a tap and hold.
     * 
     * @readonly
     */
    onLongPressEnd: event1<LongPressEndEventArgs, void>;
    /**
     * Triggered when the user starts to pan across the screen.
     * 
     * @readonly
     */
    onPanStart: event1<PanStartEventArgs, void>;
    /**
     * Triggered when the user is panning.
     * 
     * @readonly
     */
    onPanMove: event1<PanMoveEventArgs, void>;
    /**
     * Triggered when the pan ends.
     * 
     * @readonly
     */
    onPanEnd: event1<PanEndEventArgs, void>;
    /**
     * Triggered when the user pinches the screen.
     * 
     * @readonly
     */
    onPinchStart: event1<PinchStartEventArgs, void>;
    /**
     * Triggered when the user is pinching the screen.
     * 
     * @readonly
     */
    onPinchMove: event1<PinchMoveEventArgs, void>;
    /**
     * Triggered when the user ends the pinch.
     * 
     * @readonly
     */
    onPinchEnd: event1<PinchEndEventArgs, void>;
    /**
     * On mobile devices, this is triggered when the user starts touching. On wearable devices, this is triggered when the user gazes on the current object.
     * 
     * @readonly
     */
    onFocusStart: event1<FocusStartEventArgs, void>;
    /**
     * On mobile devices, this is triggered when the user releases their touch. On wearable devices, this is triggered when the user looks away from the current object.
     * 
     * @readonly
     */
    onFocusEnd: event1<FocusEndEventArgs, void>;
    /**
     * On mobile devices, this is triggered when the user starts touching the current object. On wearable devices, this is triggered when the user touches the touchpad while focusing on an object.
     * 
     * @readonly
     */
    onSelectStart: event1<SelectStartEventArgs, void>;
    /**
     * On mobile devices, this is triggered when the user releases their touch. On wearable devices, this is triggered when the user stops touching the current object.
     * 
     * @readonly
     */
    onSelectEnd: event1<SelectEndEventArgs, void>;
    /**
     * Gets called when the user triggers the primary input on their device. For example touch on touch screens.
     * 
     * @readonly
     */
    onTriggerPrimary: event1<TriggerPrimaryEventArgs, void>;
    /**
     * Gets called when hover events are passed to the lens.
     * 
     * @readonly
     */
    onHover: event1<HoverEventArgs, void>;
    /**
     * Gets called when hover event is initially triggered.
     * 
     * @readonly
     */
    onHoverStart: event1<HoverStartEventArgs, void>;
    /**
     * Gets called when hover events are finished.
     * 
     * @readonly
     */
    onHoverEnd: event1<HoverEndEventArgs, void>;
    /**
     * Gets called when user scrolls on screen.
     * 
     * @readonly
     */
    onScroll: event1<ScrollEventArgs, void>;
    /**
     * Gets called when scroll begins.
     * 
     * @readonly
     */
    onScrollStart: event1<ScrollStartEventArgs, void>;
    /**
     * Gets called when scroll ends.
     * 
     * @readonly
     */
    onScrollEnd: event1<ScrollEndEventArgs, void>;
}

type TouchComponent = InteractionComponent;

type Touch = InteractionComponent;

/**
 * Used to display 2D textures within a scene.
 * 
 * @remarks
 * Commonly used with {@link ScreenTransform} for drawing images on the screen.
 * 
 * See the [Image](/lens-studio/assets-pipeline/2d/image) guide.
 */
declare class Image extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the drawn image will be flipped horizontally.
     */
    flipX: boolean;
    /**
     * If enabled, the drawn image will be flipped vertically.
     */
    flipY: boolean;
    /**
     * Rotate the image without manipulating the transforms.
     */
    rotationAngle: number;
    /**
     * The location of the Image's pivot point relative to its boundaries.
     * Where (-1, -1) is the bottom left corner, (0, 0) is the center, and (1, 1) is the top right corner of the Image.
     */
    pivot: vec2;
}

type SpriteVisualV2 = Image;

/**
 * The arguments passed in by {@link HoverStartEvent}.
 */
declare class HoverStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The position of the event.
     * 
     * @readonly
     */
    position: vec2;
}

declare class HoverEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
     */
    position: vec2;
}

/**
 * The arguments passed in by {@link HoverEndEvent}.
 */
declare class HoverEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The position of the event.
     * 
     * @readonly
     */
    position: vec2;
}

/**
 * Used to display text hints in a Lens.
 * 
 * @see [Scripting Hints Guide](/lens-studio/essential-skills/adding-interactivity/additional-examples/scripting-hints).
 * 
 * @remarks
 * If you only need to show one hint on Lens start up, you can [configure your project](/lens-studio/publishing/configuring/lens-hints) to display the hint without scripting it.
 * 
 * 
 * | Hint ID                                   | Hint Message                          |
 * |------------------------------------------|---------------------------------------|
 * | "lens_hint_blow_a_kiss"                  | "Blow A Kiss"                         |
 * | "lens_hint_come_closer"                  | "Come Closer"                         |
 * | "lens_hint_do_not_smile"                 | "Do Not Smile"                        |
 * | "lens_hint_do_not_try_with_a_friend"     | "Do Not Try With A Friend"            |
 * | "lens_hint_find_face"                    | "Find Face"                           |
 * | "lens_hint_keep_raising_your_eyebrows"   | "Keep Raising Your Eyebrows"          |
 * | "lens_hint_kiss"                         | "Kiss"                                |
 * | "lens_hint_kiss_again"                   | "Kiss Again"                          |
 * | "lens_hint_look_around"                  | "Look Around"                         |
 * | "lens_hint_look_down"                    | "Look Down"                           |
 * | "lens_hint_look_left"                    | "Look Left"                           |
 * | "lens_hint_look_right"                   | "Look Right"                          |
 * | "lens_hint_look_up"                      | "Look Up"                             |
 * | "lens_hint_make_some_noise"              | "Make Some Noise!"                    |
 * | "lens_hint_nod_your_head"                | "Nod Your Head"                       |
 * | "lens_hint_now_kiss"                     | "Now Kiss"                            |
 * | "lens_hint_now_open_your_mouth"          | "Now Open Your Mouth"                 |
 * | "lens_hint_now_raise_your_eyebrows"      | "Now Raise Your Eyebrows"             |
 * | "lens_hint_now_smile"                    | "Now Smile"                           |
 * | "lens_hint_open_your_mouth"              | "Open Your Mouth"                     |
 * | "lens_hint_open_your_mouth_again"        | "Open Your Mouth Again"               |
 * | "lens_hint_raise_eyebrows_or_open_mouth" | "Raise Your Eyebrows / Or / Open Your Mouth" |
 * | "lens_hint_raise_your_eyebrows"          | "Raise Your Eyebrows"                 |
 * | "lens_hint_raise_your_eyebrows_again"    | "Raise Your Eyebrows Again"           |
 * | "lens_hint_smile"                        | "Smile"                               |
 * | "lens_hint_smile_again"                  | "Smile Again"                         |
 * | "lens_hint_swap_camera"                  | "Swap Camera"                         |
 * | "lens_hint_tap"                          | "Tap!"                                |
 * | "lens_hint_tap_a_surface"                | "Tap A Surface"                       |
 * | "lens_hint_tap_ground"                   | "Tap The Ground"                      |
 * | "lens_hint_tap_ground_to_place"          | "Tap Ground To Place"                 |
 * | "lens_hint_tap_surface_to_place"         | "Tap Surface To Place"                |
 * | "lens_hint_try_friend"                   | "Try It With A Friend"                |
 * | "lens_hint_try_rear_camera"              | "Try It With Your Rear Camera"        |
 * | "lens_hint_turn_around"                  | "Turn Around"                         |
 * | "lens_hint_walk_through_the_door"        | "Walk Through The Door"               |
 */
declare class HintsComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Shows the hint with id `hintID` for a duration of `duration` seconds. Use a duration of -1 to keep the hint onscreen forever.
     */
    showHint(hintID: string, duration: number): boolean;
    /**
     * Hides the hint with id `hintID`.
     */
    hideHint(hintID: string): boolean;
}

type Hints = HintsComponent;

/**
 * Used to move and rotate {@link SceneObject}s in sync with the user's head movements.
 * 
 * @see [Head Attached 3D Objects](/lens-studio/features/ar-tracking/face/head-attached-3d-objects) guide.
 */
declare class Head extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Changes the attachment point type used to anchor this object to a face.
     */
    setAttachmentPointType(attachmentPointType: AttachmentPointType): void;
    /**
     * 
     * @deprecated For finding out whether any faces are tracked you should use {@link SceneObject.isEnabledInHierarchy} on the object containing the Head component instead. You can check for a given count by assigning face index on the Head Component.
     * 
     * @deprecated
     */
    getFacesCount(): number;
    /**
     * Returns the screen position of the face landmark at the passed in index.
     * 
     * @deprecated Use {@link Head#onLandmarksUpdate}
     * 
     * @deprecated
     */
    getLandmark(index: number): vec2;
    /**
     * Returns the number of face landmarks being tracked.
     * 
     * @deprecated Use {@link Head#onLandmarksUpdate}
     * 
     * @deprecated
     */
    getLandmarkCount(): number;
    /**
     * Returns a list of screen positions of all tracked landmarks.
     * 
     * @deprecated Use {@link Head#onLandmarksUpdate}
     * 
     * @deprecated
     */
    getLandmarks(): vec2[];
    /**
     * The index of the face this head is attached to.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
    /**
     * Triggered when the landmarks on the head are updated.
     * 
     * @readonly
     */
    onLandmarksUpdate: event1<vec2[], void>;
}

/**
 * Used to simulate and render hairstyles with realistic lighting and physics.
 * 
 * @see [Hair Component](/lens-studio/features/ar-tracking/face/hair-simulation) guide.
 * @see [Hair Simulation](/lens-studio/features/ar-tracking/face/face-templates/hair-simulation) example.
 */
declare class HairVisual extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns `true` if hair simulation is supported by the device.
     */
    isHardwareSupported(): boolean;
    /**
     * Returns `true` if the hair resources are initialized.
     */
    isInitialized(): boolean;
    /**
     * Resets the simulation. May be called if the object with the hair simulation is toggled between enabled and disabled.
     */
    resetSimulation(): void;
    /**
     * Removes all hair colliders from the hair simulation.
     */
    clearColliders(): void;
    /**
     * Adds a collider to the simulation.
     */
    addCollider(colliderComponent: ColliderComponent): void;
    /**
     * Removes a collider from the simulation by index and returns it.
     */
    removeColliderByIndex(index: number): ColliderComponent;
    /**
     * List of all colliders assigned to the hair simulation of the current hair visual.
     */
    colliders: ColliderComponent[];
    /**
     * Determines the amount of vertices on each strand. `0` means using original number of the strands. `1` is the smallest resolution for hair. Keep in mind when you change this property, the hair geometry will be regenerated.
     */
    hairResolution: number;
    /**
     * Material used by this simulation to render hair.
     */
    hairMaterial: Material;
    /**
     * @deprecated Use {@link HairVisual#hairMaterial} instead.
     * 
     * @deprecated
     */
    primaryHairMaterial: Material;
    /**
     * @deprecated Use {@link HairVisual#hairMaterial} instead. The fallback material is no longer needed.
     * 
     * @deprecated
     */
    fallbackHairMaterial: Material;
    /**
     * The Width of each hair strand.
     */
    strandWidth: number;
    /**
     * The taper size of each hair towards the tip.
     */
    strandTaper: number;
    /**
     * Density of each clump, higher number would result in "messier" looking hair.
     */
    clumpDensity: number;
    /**
     * Offset amount of hair roots.
     */
    clumpRadius: number;
    /**
     * Offset amount of hair tips.
     */
    clumpTipScale: number;
    /**
     * Amount of density created to thicken hair.
     */
    density: number;
    /**
     * Offset of hair density.
     */
    noise: number;
    /**
     * Higher value of stiffness will make hair move less.
     */
    stiffness: number;
    /**
     * Higher value of damp will cause hair to have less free movement.
     */
    damp: number;
    /**
     * Amount of friction for hair strands.
     */
    friction: number;
    /**
     * Gravity force that gets added for hair's physics simulation.
     */
    gravity: vec3;
    /**
     * Determines if collision is enabled for hair.
     */
    collisionEnabled: boolean;
    /**
     * Determines how stiff the collision is.
     */
    collisionStiffness: number;
    /**
     * Determines how much position offset collision will cause.
     */
    collisionOffset: number;
    /**
     * Determines amount of friction for collision between hair strands.
     */
    collisionFriction: number;
    /**
     * If enabled, hair strands will collide with themselves.
     */
    selfCollisionEnabled: boolean;
    /**
     * Determines how stiff collision between hair strands are.
     */
    selfCollisionStiffness: number;
    /**
     * Radius limit of collisions between hair strands.
     */
    selfCollisionRadius: number;
    /**
     * Friction of collisions between hair strands.
     */
    selfCollisionFriction: number;
    /**
     * If checked will add wind force to hair simulation.
     */
    windEnabled: boolean;
    /**
     * Amount of wind force added to hair simulation.
     */
    windForce: vec3;
    /**
     * This enables fallback mode which turns off physics simulations; it is recommended to enable fallback mode on lower-end devices. It will be enabled automatically if device doesn't support hair simulation feature.
     */
    fallbackModeEnabled: boolean;
    /**
     * This function gets called when the hair visual is initialized in the Lens.
     */
    onInitialized: (hairVisual: HairVisual) => void;
}

/**
 * Allows displaying {@link GaussianSplattingAsset} and play its animation.
 * 
 * @see [Gaussian Splatting](/lens-studio/features/graphics/gaussian-splatting) guide.
 */
declare class GaussianSplattingVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Plays the visual.
     */
    play(): void;
    /**
     * Pauses the visual.
     */
    pause(): void;
    /**
     * Returns whether the visual is currently playing.
     */
    isPlaying(): boolean;
    /**
     * The asset to be rendered.
     */
    asset: GaussianSplattingAsset;
    /**
     * Set to true to disable sorting of the splats for this visual.
     * It is an optimization for special cases where sorting is not needed, e.g. rendering to a shadow map
     */
    skipSorting: boolean;
    /**
     * The current frame of the Gaussian Splat being rendered.
     */
    activeFrame: number;
    /**
     * Whether the visual automatically plays the GSAF sequence.
     */
    autoPlay: boolean;
    /**
     * Denotes how many key frames this visual is sampled at.
     */
    fps: number;
}

/**
 * Arguments used with the `InteractionComponent.onFocusStart` event.
 */
declare class FocusStartEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Arguments used with the `InteractionComponent.onFocusEnd` event.
 */
declare class FocusEndEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used to apply deformation effects to specific regions of a tracked face.
 * 
 * @remarks
 * Face Stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio.
 * 
 * @see [Face Stretch](/lens-studio/features/ar-tracking/face/face-stretch) guide.
 * @see [Distort](/lens-studio/features/ar-tracking/face/face-templates/distort) example.
 */
declare class FaceStretchVisual extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the weight of the face stretch feature named `feature` to `intensity`.
     * The intensity must be greater than -0.5 and less than 2.
     */
    setFeatureWeight(feature: string, intensity: number): void;
    /**
     * Returns the weight of the face stretch feature named `feature`.
     */
    getFeatureWeight(feature: string): number;
    /**
     * Get an array of all the feature names on the face stretch effect.
     */
    getFeatureNames(): string[];
    /**
     * Add a feature to the face stretch effect.
     */
    addFeature(name: string): void;
    /**
     * Remove a feature from the face stretch effect.
     */
    removeFeature(name: string): void;
    /**
     * Remove all features from the face stretch effect.
     */
    clearFeatures(): void;
    /**
     * Update the points on the provided face stretch feature.
     */
    updateFeaturePoints(name: string, points: StretchPoint[]): void;
    getFeaturePoints(name: string): StretchPoint[];
    /**
     * The index of the face the stretch will be applied to.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
}

/**
 * Maps a 2D texture to the user's face.
 * 
 * @remarks
 * The texture appears to be painted on user's skin and contorts with facial movements. Great for full face masks but also can be used for realistic makeup.
 * 
 * @see [Face Mask](/lens-studio/features/ar-tracking/face/face-mask) guide.
 */
declare class FaceMaskVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether to hide the opacity mask when the detected face's mouth is closed.
     */
    hidesMaskOnMouthClosed: boolean;
    /**
     * Whether to swap the opacity mask when the detected face's mouth is closed.
     */
    swapsMaskOnMouthClosed: boolean;
    /**
     * A custom mask that will be shown when the detected face's mouth is closed.
     */
    customMaskOnMouthClosed: Texture;
    /**
     * The index of the face this effect is attached to.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * If "Use Orig. Face" is enabled for this FaceMaskVisual in the Inspector panel, this property
     * specifies the face index to use for drawing the mask.
     */
    originalFaceIndex: number;
    teethAlpha: number;
    useOriginalTexCoords: boolean;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
}

type FaceSubVisual = FaceMaskVisual;

/**
 * Provides a 2D visual of a section of a tracked face, such as `Mouth`, `Nose`, etc.
 * 
 * @see [Face Inset](lens-studio/features/ar-tracking/face/face-inset) guide.
 */
declare class FaceInsetVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the face this FaceInsetVisual uses.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
    /**
     * The region of the face this FaceInsetVisual draws.
     */
    faceRegion: string;
    /**
     * The x and y scaling used to draw the face region.
     * Think of scaling as meaning how many times the face region could fit into the drawing area.
     * Higher values will zoom away from the face region, and lower values will zoom into it.
     * The normal, unzoomed scaling value is (1,1).
     */
    sourceScale: vec2;
    /**
     * The amount of alpha fading applied from the border of the face inset inward.
     * This value must be in the range 0-1.
     */
    innerBorderRadius: number;
    /**
     * The amount of alpha fading applied from the border of the face inset outward.
     * This value must be in the range 0-1.
     */
    outerBorderRadius: number;
    /**
     * Determines the quality of the face inset's borders.
     * A higher value means better looking borders but lower performance.
     * This value must be greater than 10 and less than 100.
     */
    subdivisionsCount: number;
    /**
     * Flips the drawn face region horizontally if enabled.
     */
    flipX: boolean;
    /**
     * Flips the drawn face region vertically if enabled.
     */
    flipY: boolean;
}

/**
 * Applies an eye color effect to a face.
 * 
 * @see [Eye Color](lens-studio/features/ar-tracking/face/eye-color) guide.
 */
declare class EyeColorVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the face this EyeColorVisual is attached to.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Which eye to apply the color effect to: left, right, or both.
     */
    eyeToRender: EyeToRender;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
}

declare class DoubleTapEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
     */
    position: vec2;
}

/**
 * Simulates and renders cloth visuals in a Lens.
 * 
 * @remarks
 * Handles the mesh data of cloth and prepares it for cloth simulation. Also controls all the parameters of the cloth simulator and colliders.
 * 
 * @see [Cloth Simulation](/lens-studio/features/physics/cloth-simulation)
 */
declare class ClothVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new instance of vertex simulation settings.
     */
    static createVertexSettings(): VertexSimulationSettings;
    /**
     * Returns true if the Cloth Simulation feature is supported by the current device.
     */
    isHardwareSupported(): boolean;
    /**
     * Returns true if the Cloth Simulation and resources are initialized. Always return false if device is not supported.
     */
    isInitialized(): boolean;
    /**
     * Resets the cloth simulation.
     */
    resetSimulation(): void;
    /**
     * Clears the colliders list.
     */
    clearColliders(): void;
    /**
     * Adds a collider to the list of colliders.
     */
    addCollider(colliderComponent: ColliderComponent): void;
    /**
     * Removes collider by its index and returns the removed collider.
     */
    removeColliderByIndex(index: number): ColliderComponent;
    /**
     * Returns all the indices of vertices that are labeled by this color.
     */
    getPointIndicesByColor(color: vec4, colorMask: vec4b): number[];
    /**
     * Returns all the indices on the cloth mesh that are matching the color mask. Match means that the color has value on the channels which in colorMask is true.
     */
    getPointIndicesByMask(colorMask: vec4b): number[];
    /**
     * Returns the vertex color by vertex index.
     */
    getPointColorByIndex(index: number): vec4;
    /**
     * Returns all available vertex colors on cloth mesh.
     */
    getAllColors(): vec4[];
    /**
     * Sets the binding SceneObject for the vertex.
     */
    setVertexBinding(index: number, bindingObj: SceneObject): void;
    /**
     * Gets binding SceneObject of the vertex.
     */
    getVertexBinding(index: number): SceneObject;
    /**
     * Gets simulation settings of the vertex.
     */
    getVertexSettings(index: number): VertexSimulationSettings;
    /**
     * Sets simulation settings of the vertex.
     */
    setVertexSettings(index: number, vertexSettings: VertexSimulationSettings): void;
    /**
     * Function called when the ClothVisual is initialized.
     */
    onInitialized: (clothVisual: ClothVisual) => void;
    /**
     * List of colliders assigned.
     */
    colliders: ColliderComponent[];
    /**
     * Attached mesh.
     */
    mesh: RenderMesh;
    /**
     * Returns the modified simulated mesh which can be used in another {@link RenderMeshVisual} if the same simulated mesh is needed. Useful when creating effects that might require the same mesh to be rendered twice, such as with a mirror effect. Prevents the need to run a simulation twice.
     * 
     * @readonly
     */
    simulatedMesh: RenderMesh;
    /**
     * Select bend mode to use (Isometric bending/Linear bending).
     */
    bendMode: ClothVisual.BendMode;
    /**
     * Gravity force vector.
     */
    gravity: vec3;
    /**
     * Number of simulation iterations to perform per each step. Higher number contributes to higher quality, but can be difficult for device performance.
     */
    iterationsPerStep: number;
    /**
     * Mass value.
     */
    mass: number;
    /**
     * Mass value weight on all the VertexSettings.
     */
    massVertexWeight: number;
    /**
     * StretchStiffness Value.
     */
    stretchStiffness: number;
    /**
     * StretchStiffness Value weight on all the VertexSettings.
     */
    stretchStiffnessVertexWeight: number;
    /**
     * BendStiffness value.
     */
    bendStiffness: number;
    /**
     * BendStiffness value weight on all the VertexSettings.
     */
    bendStiffnessVertexWeight: number;
    /**
     * Friction value.
     */
    friction: number;
    /**
     * Friction value weight on all the VertexSettings.
     */
    frictionVertexWeight: number;
    /**
     * Indicates whether we will enable collision repulsion with collider models.
     */
    repulsionEnabled: boolean;
    /**
     * Indicates the offset we set when the cloth mesh is too close to the colliders.
     */
    repulsionOffset: number;
    /**
     * Indicates the stiffness of repulsion when collision.
     */
    repulsionStiffness: number;
    /**
     * Collision friction to dampen relative motion.
     */
    repulsionFriction: number;
    /**
     * Control for the acceleration on motion of vertices in cloth simulation, by default set to 2000.
     */
    maxAcceleration: number;
    /**
     * Whether to update normals for the cloth mesh each frame in order to get reflection update.
     */
    updateNormalsEnabled: boolean;
    /**
     * Whether to merge close vertices (Lens Studio might split vertices when loading FBX mesh). Changing this resets the simulation.
     */
    mergeCloseVerticesEnabled: boolean;
    /**
     * Threshold of close vertices. Changing this value resets the simulation.
     */
    mergeCloseVerticesThreshold: number;
    /**
     * The influence of the external body mesh acting on the cloth visual.
     */
    externalBodyMeshWeight: number;
}

/**
 * Provides settings for vertex physics in the ClothVisual component.
 */
declare class VertexSimulationSettings extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Mass value.
     */
    mass: number;
    /**
     * Mass value weight on Global Simulation Settings for this vertex.
     */
    massGlobalWeight: number;
    /**
     * Stretch Stiffness value.
     */
    stretchStiffness: number;
    /**
     * StretchStiffness value weight on Global Simulation Settings for this vertex.
     */
    stretchStiffnessGlobalWeight: number;
    /**
     * Bend Stiffness value.
     */
    bendStiffness: number;
    /**
     * BendStiffness value weight on Global Simulation Settings for this vertex.
     */
    bendStiffnessGlobalWeight: number;
    /**
     * Friction value.
     */
    friction: number;
    /**
     * Friction value weight on Global Simulation Settings for this vertex.
     */
    frictionGlobalWeight: number;
}

/**
 * Clears depth in the drawing order.
 * 
 * @deprecated Use a {@link PostEffectVisual} with a custom {@link Material} instead
 * 
 * @deprecated
 */
declare class ClearScreen extends Visual {
    
    /** @hidden */
    protected constructor()
    
}

type ClearDepth = ClearScreen;

/**
 * A root of the 2D {@link ScreenTransform} hierarchy in 3D space. Also used to configure unit settings of Orthographic {@link Camera}.
 * 
 * @remarks
 * 
 * {@link SceneObject}s with {@link ScreenTransform} can be placed on the Canvas, and the Canvas can be sized and placed anywhere in 3D space. It is like a painter’s canvas for ScreenTransforms.
 * 
 * @see
 * [Canvas](/lens-studio/lens-studio-workflow/scene-set-up/2d/canvas-component) guide.
 * [Screen Transform Overview](/lens-studio/lens-studio-workflow/scene-set-up/2d/screen-transform-overview) guide.
 */
declare class Canvas extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get size of rectangle as (width, height)
     */
    getSize(): vec2;
    /**
     * Set size of rectangle as (width, height)
     */
    setSize(value: vec2): void;
    /**
     * World Space Rectangle that defines the Canvas as offsets in world units from the SceneObject's position.
     */
    worldSpaceRect: Rect;
    /**
     * The point about which the Canvas Rectangle will rotate. Defined as fractional coordinates of the Canvas's dimensions. e.g. (1 , 1) brings the pivot to the top right corner of the canvas. Or (0.5, 0) moves the pivot to the right by half the canvas width.
     */
    pivot: vec2;
    /**
     * The unit for the objects underneath this canvas.
     */
    unitType: Canvas.UnitType;
    /**
     * The rendering sort order for the objects underneath this canvas.
     */
    sortingType: Canvas.SortingType;
}

/**
 * Renders {@link SceneObject}s to one or more Render Target textures.
 * 
 * @remarks
 * A Camera will only render a  {@link SceneObject} if its render layer is enabled on the Camera.
 * 
 * @see
 * [Camera and Layers](/lens-studio/lens-studio-workflow/scene-set-up/camera) guide.
 */
declare class Camera extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Return true if the device supports stencil operations and render to depth texture.
     */
    static depthStencilRenderTargetSupported(): boolean;
    /**
     * Returns the number of possible render target bindings to the camera.
     */
    static getSupportedColorRenderTargetCount(): number;
    /**
     * Creates and returns a new Color Render Target.
     */
    static createColorRenderTarget(): Camera.ColorRenderTarget;
    /**
     * Create a depth/stencil render target descriptor for the camera.
     */
    static createDepthStencilRenderTarget(): Camera.DepthStencilRenderTarget;
    /**
     * Converts a screen space position to a world space position, given an absolute depth.
     * The screen space position should be provided as a `vec2` in the range ([0-1], [0-1]),
     * (0,0) being the top-left of the screen and (1,1) being the bottom-right.
     * The returned world space position will be the point `absoluteDepth` units away from the Camera's
     * `near` plane at the point specified in screen space.
     */
    screenSpaceToWorldSpace(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3;
    /**
     * Converts the world space position `worldSpacePoint` to a screen space position.
     * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
     */
    worldSpaceToScreenSpace(worldSpacePoint: vec3): vec2;
    /**
     * Converts a world space position to a raw screen space position.
     * The screen space position will be returned as a `vec3` with `x`,`y` representing normalized screen space,
     * and `z` representing a raw depth value not directly convertible to world units.
     * This returned value will mostly be useful for passing into `unproject()`.
     */
    project(worldSpacePoint: vec3): vec3;
    /**
     * Converts a raw screen space position to a world space position.
     * `clipSpacePoint` should be a `vec3` returned from a previous `project()` call, since the
     * `z` value represents a raw depth value not directly convertible to world units.
     */
    unproject(clipSpacePoint: vec3): vec3;
    /**
     * Returns true if a sphere with the specified world space center position and radius is visible within the camera frustum, false otherwise.
     */
    isSphereVisible(center: vec3, radius: number): boolean;
    /**
     * Returns the combined view and projection matrix for this camera.
     */
    getViewProjectionMatrix(): mat4;
    /**
     * Returns the view matrix for this camera.
     */
    getViewMatrix(): mat4;
    /**
     * Returns the projection matrix for this camera.
     */
    getProjectionMatrix(): mat4;
    /**
     * For orthographic cameras, returns the camera size as (width, height).
     */
    getOrthographicSize(): vec2;
    /**
     * Removes layer `id` from the list of layers the Camera will render.
     * 
     * @deprecated Use the {@link Camera#renderLayers} property.
     * 
     * @deprecated
     */
    removeRenderLayer(id: number): void;
    /**
     * Adds layer `id` to the list of layers the Camera will render.
     * 
     * @deprecated Use the {@link Camera#renderLayers} property.
     * 
     * @deprecated
     */
    addRenderLayer(id: number): void;
    /**
     * Returns whether rendering layer `id` is enabled for the Camera.
     * 
     * @deprecated Use the {@link Camera#renderLayers} property.
     * 
     * @deprecated
     */
    checkRenderLayer(id: number): boolean;
    /**
     * Returns a list of 32 numbers, one for every render layer. Values will either be 0 or 1, 0 meaning the Camera won't render the layer and 1 meaning it will.
     * 
     * @deprecated
     */
    getAllRenderLayers(): number[];
    /**
     * Returns an array of Color Render Targets. The first color render target is always available.
     */
    colorRenderTargets: Camera.ColorRenderTarget[];
    /**
     * The Texture this Camera will be used to render content onto, and will be used to configure device properties which are set to physical. When unset it is assumed to be the DeviceCameraTexture. Relevant for cases where TextureTrackingScope will be used with 3D content like Face Mesh which will need the save fov used for the Camera.
     */
    devicePropertiesSource: TextureTrackingScope;
    /**
     * The distance of the near clipping plane.
     */
    near: number;
    /**
     * The distance of the far clipping plane.
     */
    far: number;
    /**
     * The Camera's field of view in radians.
     */
    fov: number;
    /**
     * The aspect ratio of the camera (width/height).
     */
    aspect: number;
    /**
     * The orthographic size of the camera.
     */
    size: number;
    /**
     * Controls which type of rendering the camera uses.
     */
    type: Camera.Type;
    /**
     * Determines the way depth is handled on this Camera. Changing this can help sort objects at different distance ranges.
     */
    depthBufferMode: Camera.DepthBufferMode;
    /**
     * Controls the set of layers this Camera will render.
     */
    renderLayer: LayerSet;
    /**
     * Controls which Camera settings will be overridden by physical device properties.
     * For example, this can be used to override the `fov` property to match the device camera's actual field of view.
     */
    devicePropertyUsage: Camera.DeviceProperty;
    /**
     * Descriptor of depth/stencil textures and clear options.
     */
    depthStencilRenderTarget: Camera.DepthStencilRenderTarget;
    /**
     * The sorting order the Camera renders in. Every frame, Cameras render in ascending order determined by their `renderOrder` properties.
     */
    renderOrder: number;
    /**
     * A texture controlling which parts of the output texture the camera will draw to.
     * The "red" value of each pixel determines how strongly the camera will draw to that part of the image.
     * For example, a completely black section will cause the camera to not draw there at all. A completely
     * white (or red) section will cause the camera to draw normally. Colors in between, like gray, will be semitransparent.
     */
    maskTexture: Texture;
    /**
     * When `enableClearColor` is true, this texture is used to clear this Camera's `renderTarget` before drawing.
     * If this texture is null, `clearColor` will be used instead.
     */
    inputTexture: Texture;
    /**
     * The RenderTarget this Camera will draw to.
     */
    renderTarget: Texture;
    /**
     * If enabled, this Camera will clear the depth buffer on its `renderTarget` before drawing to it.
     */
    enableClearDepth: boolean;
    /**
     * When `enableClearColor` is true and `inputTexture` is null, this color is used to clear this Camera's `renderTarget` before drawing to it.
     */
    clearColor: vec4;
    /**
     * Sets the mipmap level for the camera's render target.
     */
    renderTargetMipmapLevel: number;
    /**
     * Sets the slice index for the camera's render target.
     */
    renderTargetSlice: number;
    /**
     * Sets which face of the cubemap this camera will render to.
     */
    renderTargetCubemapFace: Camera.CubemapFace;
    /**
     * If enabled, this Camera will clear the color on its `renderTarget` before drawing to it.
     * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
     * 
     * @deprecated Use {@link ColorRenderTarget.clearColorOption} instead.
     * 
     * @deprecated
     */
    enableClearColor: boolean;
    /**
     * If true, the camera FOV will be overridden to match the device's physical camera FOV.
     * 
     * @deprecated Use {@link Camera.devicePropertyUsage} instead. Setting `isPhysical = true` is equivalent to `devicePropertyUsage = DeviceProperty.All`, and `isPhysical = false` is equivalent to `devicePropertyUsage = DeviceProperty.None`.
     * 
     * @deprecated
     */
    isPhysical: boolean;
    /**
     * Returns a number of hardware supported render targets. The max number is 4. If the device doesn’t support Multiple Render Targets this property equals 1.
     * 
     * @deprecated Use {@link Camera.getSupportedColorRenderTargetCount} instead.
     * 
     * @deprecated
 * @readonly
     */
    supportedColorRenderTargetCount: number;
    /**
     * Toggles ray tracing for the camera. When true, ray tracing is enabled.
     */
    rayTracing: RayTracingSettings;
}

/**
 * Controls blend shapes connected to imported animation content.
 * @deprecated Use the blend shape related methods on {@link RenderMeshVisual} instead
 * 
 * @deprecated
 */
declare class BlendShapes extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the weight of blend shape `name`.
     * 
     * @deprecated
     */
    setBlendShape(name: string, weight: number): void;
    /**
     * Returns the weight of blend shape `name`.
     * 
     * @deprecated
     */
    getBlendShape(name: string): number;
    /**
     * Clears the blendshape with the matching name from the BlendShapes component.
     * 
     * @deprecated
     */
    unsetBlendShape(name: string): void;
    /**
     * Returns whether this BlendShapesVisual has a blend shape named `name`.
     * 
     * @deprecated
     */
    hasBlendShape(name: string): boolean;
    /**
     * Removes all blend shapes from the BlendShapesVisual.
     * 
     * @deprecated
     */
    clearBlendShapes(): void;
    /**
     * If enabled, normal directions are also blended by blend shapes.
     * 
     * @deprecated
     */
    blendNormals: boolean;
}

/**
 * Args used for AnimationPlayer's event, which is triggered every time the animation playback passes the given time in the event.
 */
declare class AnimationPlayerOnEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Name of the event to emit.
     * 
     * @readonly
     */
    eventName: string;
}

/**
 * Controls animation playback. The component takes in a list of {@link AnimationClip}s, and allows you to play, stop, resume, subscribe to animation events, and more.
 * 
 * @see [Working With Animation](/lens-studio/features/animation/overview)
 * @see [Animation Player Guide](/lens-studio/features/animation/animation-player)
 * @see [Animation State Manager](https://developers.snap.com/lens-studio/features/animation/animation-state-manager) for managing animation states and blending.
 */
declare class AnimationPlayer extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Plays all clips.
     */
    playAll(): void;
    /**
     * Pauses all clips.
     */
    pauseAll(): void;
    /**
     * Stops all clips and resets time to t = 0.
     */
    stopAll(): void;
    /**
     * Resumes all clips.
     */
    resumeAll(): void;
    /**
     * Tries to get a clip from the player, returns null if it does not exist.
     */
    getClip(name: string): AnimationClip;
    /**
     * Plays the named clip on the Animation Player.
     */
    playClip(name: string): void;
    /**
     * Plays clip with the given name and starting from the given time.
     */
    playClipAt(name: string, time: number): void;
    /**
     * Pause the clip with name.
     */
    pauseClip(name: string): void;
    /**
     * Stops the clip and resets time to t = 0.
     */
    stopClip(name: string): void;
    /**
     * Resumes clip with name.
     */
    resumeClip(name: string): void;
    /**
     * Adds a clip to the player. If one exists, replace existing clip.
     */
    addClip(clip: AnimationClip): void;
    /**
     * Removes a clip from the player.
     */
    removeClip(name: string): void;
    /**
     * Get currently playing clips.
     */
    getActiveClips(): string[];
    /**
     * Get currently inactive clips.
     */
    getInactiveClips(): string[];
    /**
     * Sets the clip to be enabled.
     */
    setClipEnabled(name: string, enabled: boolean): void;
    /**
     * Returns if a clip is enabled for playback.
     */
    getClipEnabled(name: string): boolean;
    /**
     * Returns if a clip is playing.
     */
    getClipIsPlaying(name: string): boolean;
    /**
     * Returns the current time for a clip.
     */
    getClipCurrentTime(name: string): number;
    /**
     * Updates the animation player forcing sampling, resulting in the setting of transforms and firing of animation events.
     */
    forceUpdate(deltaTime: number): void;
    /**
     * Array of animation clips
     * 
     * @readonly
     */
    clips: AnimationClip[];
    /**
     * Bind a function to listen to the specified events emitted by `AnimationAsset` events. See {@link https://developers.snap.com/lens-studio/features/animation/animation-events | here}.
     * 
     * @readonly
     */
    onEvent: event1<AnimationPlayerOnEventArgs, void>;
}

/**
 * Controls playback of animations on the attached {@link SceneObject} and its child objects.
 * Please refer to the [Playing 3D Animation Guide](/lens-studio/essential-skills/adding-interactivity/additional-examples/playing-3d-animation) for setting up and playing animations.
 *  @deprecated Use {@link AnimationPlayer} instead
 * 
 * @deprecated
 */
declare class AnimationMixer extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts playing animation layers named `name`, or all layers if `name` is empty. The animation will start with an offset of `offset` seconds. The animation will play `cycles` times, or loop forever if `cycles` is -1.
     * 
     * @deprecated
     */
    start(name: string, offset: number, cycles: number): void;
    /**
     * Starts playing animation layers named `name`, or all layers if `name` is empty. The animation will start with an offset of `offset` seconds. The animation will play `cycles` times, or loop forever if `cycles` is -1. `eventCallback` will be called after any animation layer finishes playing.
     * 
     * @deprecated
     */
    startWithCallback(name: string, offset: number, cycles: number, eventCallback: (name: string, animationMixer: AnimationMixer) => void): void;
    /**
     * Stops any animation layer with name `name`, or all layers if `name` is empty.
     * 
     * @deprecated
     */
    stop(name: string): void;
    /**
     * Pauses animation layers named `name`, or all layers if `name` is empty.
     * 
     * @deprecated
     */
    pause(name: string): void;
    /**
     * Resumes any paused animation layer with name `name`, or all layers if `name` is empty.
     * 
     * @deprecated
     */
    resume(name: string): void;
    /**
     * Sets the weight of any layers with name `name`.
     * 
     * @deprecated
     */
    setWeight(name: string, weight: number): void;
    /**
     * Makes a copy of the layer `name` and stores it as `newName`.
     * 
     * @deprecated
     */
    cloneLayer(name: string, newName: string): AnimationMixerLayer;
    /**
     * Adds a new AnimationMixerLayer to this AnimationMixer.
     * 
     * @deprecated
     */
    createClip(name: string): AnimationMixerLayer;
    /**
     * Returns the AnimationMixerLayer with the name `name`.
     * 
     * @deprecated
     */
    getLayer(name: string): AnimationMixerLayer;
    /**
     * Returns a list of all AnimationMixerLayers controlled by the AnimationMixer.
     * 
     * @deprecated
     */
    getLayers(): AnimationMixerLayer[];
    /**
     * Rebuild the animation hierarchy by finding all {@link Animation} components in the SceneObject and its children.
     * 
     * @deprecated
     */
    resetAnimations(): void;
    /**
     * Returns the current time (in seconds) of the layer named `name`.
     * 
     * @deprecated
     */
    getLayerTime(name: string): number;
    /**
     * Returns a list of names of AnimationLayers in this AnimationMixer.
     * 
     * @deprecated
 * @constant
     */
    getAnimationLayerNames(): string[];
    /**
     * Whether this AnimationMixer is set to automatically play animations on start.
     * 
     * @deprecated
     */
    autoplay: boolean;
    /**
     * A multiplying value for the speed of all animations being controlled by the AnimationMixer.
     * For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed in half.
     * 
     * @deprecated
     */
    speedRatio: number;
}

/**
 * @deprecated Use {@link AnimationPlayer} instead
 * 
 * @deprecated
 */
declare class Animation extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the AnimationLayer under the name `layerName`.
     * 
     * @deprecated
     */
    getAnimationLayerByName(layerName: string): AnimationLayer;
    /**
     * Adds an AnimationLayer under the name `layerName`.
     * 
     * @deprecated
     */
    setAnimationLayerByName(layerName: string, animationLayerPtr: AnimationLayer): void;
    /**
     * Removes the AnimationLayer under the name `layerName`.
     * 
     * @deprecated
     */
    removeAnimationLayerByName(layerName: string): void;
}

/**
 * An object in the scene hierarchy, containing a {@link Transform} and possibly {@link Component}.
 * A script can access the SceneObject holding it through the method `script.getSceneObject()`.
 * 
 * There is a global limit of 100,000 SceneObjects. There is no limit on how many children a given
 * SceneObject can have, but the hierarchy depth cannot exceed 256 levels.
 */
declare class SceneObject extends SerializableWithUID {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a list of all components attached to the SceneObject.
     * 
     * @deprecated
     */
    getAllComponents(): Component[];
    /**
     * Returns the number of children the SceneObject has.
     */
    getChildrenCount(): number;
    /**
     * Returns this SceneObject's child at index `index`.
     */
    getChild(index: number): SceneObject;
    /**
     * Copies `component` and adds it to the SceneObject, then returns it.
     */
    copyComponent<K extends Component>(component: K): K;
    /**
     * Creates a shallow copy of the passed in `sceneObject` (not including its hierarchy), and parents it to this SceneObject.
     */
    copySceneObject(sceneObject: SceneObject): SceneObject;
    /**
     * Returns whether the SceneObject has a parent in the scene hierarchy.
     */
    hasParent(): boolean;
    /**
     * Returns the Transform attached to the SceneObject.
     */
    getTransform(): Transform;
    /**
     * Returns the current render layer of the SceneObject.
     * @deprecated Use {@link SceneObject#layer} instead
     * 
     * @deprecated
     */
    getRenderLayer(): number;
    /**
     * Sets the render layer of the SceneObject to `id`.
     * @deprecated Use {@link SceneObject#layer} instead
     * 
     * @deprecated
     */
    setRenderLayer(id: number): void;
    /**
     * Destroys the SceneObject, including all of its Components and children.
     * 
     * The destruction process occurs in two phases:
     * 1. All `OnDestroyEvent` callbacks fire for the SceneObject and its entire sub-hierarchy
     * 2. The SceneObjects and Components are actually destroyed and removed from the scene
     * 
     * This guarantees that during `OnDestroyEvent` callbacks, the full hierarchy is still
     * intact and accessible.
     * 
     * **Important:** If `destroy` is called on a parent or child object during an `OnDestroyEvent`
     * callback (for example, calling `parent.destroy()` from a child's `OnDestroyEvent`),
     * the destruction will be queued and processed after the current destruction completes.
     * This ensures all `OnDestroyEvent` callbacks fire before any objects are actually removed.
     */
    destroy(): void;
    /**
     * Creates a deep copy of the passed in `sceneObject` (including its hierarchy), and parents it to this SceneObject.
     */
    copyWholeHierarchy(sceneObject: SceneObject): SceneObject;
    /**
     * Returns the first attached Component with type matching or deriving from `componentType`.
     */
    getComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K];
    /**
     * Returns a list of attached components with types matching or deriving from `componentType`.
     */
    getComponents<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K][];
    /**
     * Returns the first `Component` with type matching or deriving from `componentType` found in the ancestors of this object. The search stops immediately upon finding a match.
     * 
     * Arguments:
     * - `componentType`: If an empty string, all `Component` types are considered.
     * - `onlyEnabled`: If `true`, the search only returns `Component`s where `isEnabledInHierarchy` is true. This means the `Component` itself must be enabled, and its `SceneObject` must be enabled in the hierarchy. Defaults to `false`.
     * - `includeSelf`: If `true`, the search will include the `SceneObject` this is called on. Defaults to `false`.
     * - `maxDepth`: Limits how many levels up to search. Use `Infinity` for an unlimited search depth. Defaults to `Infinity`.
     * 
     * The search begins at the immediate parent, or at self if `includeSelf` is true. Returns `null` if no matching `Component` is found.
     * 
     * Note: Hierarchy searches can be very expensive. Be mindful of what, and how often you're searching.
     */
    getComponentInAncestors<K extends keyof ComponentNameMap>(componentType: K, onlyEnabled?: boolean, includeSelf?: boolean, maxDepth?: number): ComponentNameMap[K];
    /**
     * Returns an array of all `Component`s with type matching or deriving from `componentType` found in the ancestors of this object. This search does not stop at the first match.
     * 
     * Arguments:
     * - `componentType`: If an empty string, all `Component` types are considered.
     * - `onlyEnabled`: If `true`, the search only returns `Component`s where `isEnabledInHierarchy` is true. This means the `Component` itself must be enabled, and its `SceneObject` must be enabled in the hierarchy. Defaults to `false`.
     * - `includeSelf`: If `true`, the search will include the `SceneObject` this is called on. Defaults to `false`.
     * - `maxDepth`: Limits how many levels up to search. Use `Infinity` for an unlimited search depth. Defaults to `Infinity`.
     * 
     * The search begins at the immediate parent, or at self if `includeSelf` is true. Returns an empty array if no matching `Component`s are found.
     * 
     * Note: Hierarchy searches can be very expensive. Be mindful of what, and how often you're searching.
     */
    getComponentsInAncestors<K extends keyof ComponentNameMap>(componentType: K, onlyEnabled?: boolean, includeSelf?: boolean, maxDepth?: number): ComponentNameMap[K][];
    /**
     * Returns the first `Component` with type matching or deriving from `componentType` found in the descendants of this object. The search stops immediately upon finding a match.
     * 
     * Arguments:
     * - `componentType`: If an empty string, all `Component` types are considered.
     * - `onlyEnabled`: If `true`, the search only returns `Component`s where `isEnabledInHierarchy` is true. This means disabled `SceneObject`s are skipped during traversal, and both the `Component` and its `SceneObject` must be enabled in the hierarchy. Defaults to `false`.
     * - `includeSelf`: If `true`, the search will include the `SceneObject` this is called on. Defaults to `false`.
     * - `maxDepth`: Limits how many levels down to search. Use `Infinity` for an unlimited search depth. Defaults to `Infinity`.
     * 
     * The search begins at the immediate children, or at self if `includeSelf` is true, and uses Breadth-First Search to find the nearest match. Returns `null` if no matching `Component` is found.
     * 
     * Note: Hierarchy searches can be very expensive. Be mindful of what, and how often you're searching.
     */
    getComponentInDescendants<K extends keyof ComponentNameMap>(componentType: K, onlyEnabled?: boolean, includeSelf?: boolean, maxDepth?: number): ComponentNameMap[K];
    /**
     * Returns an array of all `Component`s with type matching or deriving from `componentType` found in the descendants of this object. This search does not stop at the first match. Restrict `maxDepth` to minimize performance cost.
     * 
     * Arguments:
     * - `componentType`: If an empty string, all `Component` types are considered.
     * - `onlyEnabled`: If `true`, the search only returns `Component`s where `isEnabledInHierarchy` is true. This means disabled `SceneObject`s are skipped during traversal, and both the `Component` and its `SceneObject` must be enabled in the hierarchy. Defaults to `false`.
     * - `includeSelf`: If `true`, the search will include the `SceneObject` this is called on. Defaults to `false`.
     * - `maxDepth`: Limits how many levels down to search. Use `Infinity` for an unlimited search depth. Defaults to `Infinity`.
     * 
     * The search begins at the immediate children, or at self if `includeSelf` is true, and uses Breadth-First Search. Returns an empty array if no matching `Component`s are found.
     * 
     * Note: Hierarchy searches can be very expensive. Be mindful of what, and how often you're searching.
     */
    getComponentsInDescendants<K extends keyof ComponentNameMap>(componentType: K, onlyEnabled?: boolean, includeSelf?: boolean, maxDepth?: number): ComponentNameMap[K][];
    /**
     * Returns `true` if this `SceneObject` is a descendant (child, grandchild, etc.) of `potentialAncestor`.
     * Returns `false` otherwise.
     * 
     * Note: Hierarchy searches can be very expensive. Be mindful of what, and how often you're searching.
     */
    isDescendantOf(potentialAncestor: SceneObject): boolean;
    /**
     * Adds a new component of type `typeName` to the SceneObject.
     */
    createComponent<K extends keyof ComponentNameMap>(typeName: K): ComponentNameMap[K];
    /**
     * Returns the number of components of type `componentType` attached to the SceneObject.  If `componentType` is an empty string, the total number of components attached is returned.
     * 
     * @deprecated
     */
    getComponentCount<K extends keyof ComponentNameMap>(componentType: K): number;
    /**
     * Returns the attached component of type `componentType` at index `index`.  If `componentType` is an empty string, all component types are considered.
     * 
     * @deprecated
     */
    getComponentByIndex<K extends keyof ComponentNameMap>(componentType: K, index: number): ComponentNameMap[K];
    /**
     * Returns the first attached component of type `componentType`.  If `componentType` is an empty string, the first component of any type is returned.
     * 
     * @deprecated Use {@link SceneObject#getComponent}
     * 
     * @deprecated
     */
    getFirstComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K];
    /**
     * Returns the SceneObject's parent in the hierarchy, or null if there isn't one.
     */
    getParent(): SceneObject;
    /**
     * Sets the SceneObject's parent to `newParent` in the scene hierarchy.
     */
    setParent(newParent: SceneObject): void;
    /**
     * Unparents the SceneObject in the hierarchy, making it an orphan.
     */
    removeParent(): void;
    /**
     * Unparents the SceneObject without altering its world position, rotation, or scale.
     */
    removeParentPreserveWorldTransform(): void;
    /**
     * Changes the parent of the SceneObject without altering its world position, rotation, or scale.
     */
    setParentPreserveWorldTransform(newParent: SceneObject): void;
    /**
     * Whether the SceneObject, including its components and children, is enabled or disabled.
     */
    enabled: boolean;
    /**
     * Returns true if this SceneObject and all of its parents are enabled.
     * 
     * @readonly
     */
    isEnabledInHierarchy: boolean;
    /**
     * Check if a SceneObject is enabled in the hiearchy. It is enabled if both its own enabled property is `true`, and that of all of its parents to the root of the scene.
     * 
     * @deprecated Use {@link SceneObject.isEnabledInHierarchy} instead (note the corrected spelling).
     * 
     * @deprecated
 * @readonly
     */
    isEnabledInHiearchy: boolean;
    /**
     * Get an array of the scene object's children.
     * 
     * @readonly
     */
    children: SceneObject[];
    /**
     * Gets or sets the LayerSet of layers this SceneObject belongs to.
     * This is used to determine which {@link Camera} will render the SceneObject.
     */
    layer: LayerSet;
    /**
     * The name of the SceneObject.
     */
    name: string;
    /**
     * An event that will trigger when a SceneObject goes from disabled in the hiearchy to enabled in the hiearchy.
     * 
     * @readonly
     */
    onEnabled: event0<void>;
    /**
     * An event that will trigger when a SceneObject goes from enabled in the hiearchy to disabled in the hiearchy.
     * 
     * @readonly
     */
    onDisabled: event0<void>;
}

/**
 * Represents the Lens scene. Accessible through `global.scene`.
 */
declare class ScriptScene extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Adds a new {@link SceneObject} named `name` to the scene.
     */
    createSceneObject(name: string): SceneObject;
    /**
     * Creates a new Render Target texture with a {@link RenderTargetProvider} as its `control` property.
     */
    createRenderTargetTexture(): Texture;
    /**
     * Create a texture containing the DepthStencilRenderTargetProvider.
     */
    createDepthStencilRenderTargetTexture(): Texture;
    /**
     * Returns the number of {@link SceneObject} in the current scene.
     */
    getRootObjectsCount(): number;
    /**
     * Returns the root {@link SceneObject} at index `index` in the current scene.
     */
    getRootObject(index: number): SceneObject;
    /**
     * Returns whether or not the scene is currently being recorded.
     */
    isRecording(): boolean;
    /**
     * Returns the current recording state of the Lens (e.g. preview, photo, or video).
     */
    getRecordingState(): RecordingState;
    /**
     * Returns a string describing the currently active device camera.
     * 
     * Returns "back" if the rear-facing (aka World) camera is active.
     * 
     * Returns "front" if the front-facing (aka Selfie) camera is active.
     * 
     * Otherwise, the camera is not initialized.
     */
    getCameraType(): string;
    /**
     * Similar to `liveTarget`, but this RenderTarget will not have predictive motion adjustments applied to it (only applicable on supported devices). [Learn more](/lens-studio/lens-studio-workflow/scene-set-up/camera#overlay-target)
     */
    liveOverlayTarget: Texture;
    /**
     * The output Render Target of the actual recorded video.
     */
    captureTarget: Texture;
    /**
     * The output Render Target that users will see in the live camera and during recording.
     */
    liveTarget: Texture;
    /**
     * Returns true if the device supports Ray Tracing and Advanced Graphics Features is enabled in the project settings.
     * 
     * @readonly
     */
    isRayTracingSupported: boolean;
}

/**
 * This provider is returned by `global.touchSystem` and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the touch).
 * 
 * Possible TouchType exception values:
 * 
 * * "TouchTypeNone"
 * * "TouchTypeTouch"
 * * "TouchTypeTap"
 * * "TouchTypeDoubleTap"
 * * "TouchTypeScale"
 * * "TouchTypePan"
 * * "TouchTypeSwipe"
 */
declare class TouchDataProvider extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a copy of `currentMask` with the `newException` flag set to true.
     */
    composeTouchBlockingExceptionMask(currentMask: number, newException: string): number;
    /**
     * Allow or stop allowing a certain `TouchType` to pass through your lens. Useful for allowing Snapchat to handle certain `TouchType`, e.g. allowing `TouchTypeDoubleTap` to flip the camera.
     */
    enableTouchBlockingException(exception: string, enable: boolean): void;
    /**
     * Set your lens to handle touches on the screen, preventing default Snapchat touch behavior from occuring. Useful for enabling full screen touches without any touch components. It is similar to creating a plane the size of the screen in front of the camera.
     */
    touchBlocking: boolean;
    /**
     * The current touch mask.
     */
    touchBlockingExceptionMask: number;
}

/**
 * Controls the position, rotation, and scale of a {@link SceneObject}.  Every SceneObject automatically has a Transform attached.
 */
declare class Transform extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the Transform's scale relative to its parent.
     */
    getLocalScale(): vec3;
    /**
     * Returns the Transform's rotation relative to its parent.
     */
    getLocalRotation(): quat;
    /**
     * Returns the Transform's position relative to its parent.
     */
    getLocalPosition(): vec3;
    /**
     * Returns the Transform's scale relative to the world.
     */
    getWorldScale(): vec3;
    /**
     * Returns the Transform's rotation relative to the world.
     */
    getWorldRotation(): quat;
    /**
     * Returns the Transform's position relative to the world.
     */
    getWorldPosition(): vec3;
    /**
     * Returns the Transform's local-to-world transformation matrix.
     */
    getWorldTransform(): mat4;
    /**
     * Returns the Transform's world-to-local transformation matrix.
     */
    getInvertedWorldTransform(): mat4;
    /**
     * Sets the Transform's local transformation matrix.
     */
    setLocalTransform(transformMat: mat4): void;
    /**
     * Sets the Transform's transformation matrix.
     */
    setWorldTransform(transformMat: mat4): void;
    /**
     * Sets the Transform's position relative to its parent.
     */
    setLocalPosition(pos: vec3): void;
    /**
     * Sets the Transform's position relative to the world.
     */
    setWorldPosition(pos: vec3): void;
    /**
     * Sets the Transform's rotation relative to its parent.
     */
    setLocalRotation(rotation: quat): void;
    /**
     * Sets the Transform's rotation relative to the world.
     */
    setWorldRotation(rotation: quat): void;
    /**
     * Sets the Transform's scale relative to its parent.
     */
    setLocalScale(scale: vec3): void;
    /**
     * Sets the Transform's scale relative to the world.
     * This may produce lossy results when parent objects are rotated, so use `setLocalScale()` instead if possible.
     */
    setWorldScale(scale: vec3): void;
    /**
     * Returns the SceneObject the Transform is attached to.
     */
    getSceneObject(): SceneObject;
    /**
     * Returns the Transform's forward directional vector.
     * 
     * @readonly
     */
    forward: vec3;
    /**
     * Returns the Transform's up directional vector.
     * 
     * @readonly
     */
    up: vec3;
    /**
     * Returns the Transform's back directional vector.
     * 
     * @readonly
     */
    back: vec3;
    /**
     * Returns the Transform's down directional vector.
     * 
     * @readonly
     */
    down: vec3;
    /**
     * Returns the Transform's left directional vector.
     * 
     * @readonly
     */
    left: vec3;
    /**
     * Returns the Transform's right directional vector.
     * 
     * @readonly
     */
    right: vec3;
    /**
     * When scaling a parent with segment scale enabled, instead of scaling child objects, it creates position offsets. This setting is used when exporting from certain 3d authoring tools.
     */
    segmentScaleCompensate: boolean;
}

/**
 * Provides basic information about a transformation.
 * See also: {@link DeviceTracking}
 */
declare class BasicTransform extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the world position of the BasicTransform.
     */
    getPosition(): vec3;
    /**
     * Returns the world scale of the BasicTransform.
     */
    getScale(): vec3;
    /**
     * Returns the world rotation of the BasicTransform.
     */
    getRotation(): quat;
    /**
     * Returns the world matrix of the BasicTransform.
     */
    getMatrix(): mat4;
    /**
     * Returns the inverted world matrix of the BasicTransform.
     */
    getInvertedMatrix(): mat4;
}

/**
 * Provides information about the device's camera.
 */
declare class DeviceCamera extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Unprojects the normalized screen space point `normalizedScreenSpacePoint` based on some distance `absoluteDepth` to produce a 3d position in device reference space. On Spectacles, this means that the returned position already includes the offset between the device center and the camera.
     */
    unproject(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3;
    /**
     * Given a point in device reference space, first converts the point to 3d camera space, using extrinsics, and then projects it to produce a point in normalized screen space (origin at top left).
     */
    project(pointInDeviceReferenceNode: vec3): vec2;
    /**
     * Provides the focal length of the device camera in pixels.
     * 
     * @readonly
     */
    focalLength: vec2;
    /**
     * Provides the principal point of the device camera in pixels with origin at the center of the top-left pixel. Note: Principal point is typically in the center of the image, but it may not always be the case.
     * 
     * @readonly
     */
    principalPoint: vec2;
    /**
     * Provides the default resolution of the image returned by the device camera in pixels. The principal point and focal length are calculated relative to this resolution. If you resize the image to a different resolution than the default, then you also need to update the principal points and focal length appropriately.
     * 
     * @readonly
     */
    resolution: vec2;
    /**
     * Provides the relative offset between a reference point on the device and the camera. On mobile, the reference point is same as the camera, so this transform is identity.
     * 
     * On Spectacles, the reference point is the device center and the transform converts points in camera space to points relative to device center. Together with pose from DeviceTracking, you can obtain the world positions of points in device camera space.
     * 
     * For example,
     * ```
     * // @input SceneObject objectWithDeviceTracking
     * 
     * // Get device camera
     * const deviceCamera = global.deviceInfoSystem.getTrackingCamera();
     * // calculate 3d position in device camera space (using your custom code which uses snapml or a similar technique)
     * const pointInDeviceCamera = ...; // vec3
     * const pointInDeviceRef = deviceCamera.pose.multiplyPoint(pointInDeviceCamera);
     * 
     * const deviceWorldTransform = script.objectWithDeviceTracking.getTransform().getWorldTransform();
     * const pointInWorld = deviceWorldTransform.multiplyPoint(pointInDeviceRef);
     * // Use pointInWorld. For example, place a {@link SceneObject} at this world position
     * ```
     * 
     * @readonly
     */
    pose: mat4;
}

/**
 * Allows data to be stored and retrieved between Lens sessions.
 * In other words, data can be saved on device and loaded back in the next time the Lens is opened.
 * Can be accessed with `global.persistentStorageSystem`.
 * 
 * See the [Persistent Storage guide](/lens-studio/features/persistent-cloud-storage/persistent-storage) for more information.
 */
declare class PersistentStorageSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The `GeneralDataStore` object used to store and retrieve data.
     */
    store: GeneralDataStore;
    /**
     * The {@link DataStoreWithScene} object used to store and retrieve
     * session-scoped data. Data persists across multiple Snaps within the
     * same Lens session (until a different Lens is opened). Unlike
     * {@link PersistentStorageSystem#store}, this store supports saving
     * procedural assets such as {@link MeshBuilder} meshes and
     * {@link ProceduralTextureProvider} textures.
     */
    sessionStore: DataStoreWithScene;
}

/**
 * Provides information about the device running the Lens. Accessible through `global.deviceInfoSystem.performanceIndexes`.
 */
declare class PerformanceIndexes extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Provides a number denoting a devices performance capability. See {@link https://developers.snap.com/lens-studio/publishing/optimization/performance-indexes-clustering | phone clustering}.
     * 
     * @readonly
     */
    general: number;
}

/**
 * Arguments used with the onInternetStatusChanged event.
 */
declare class InternetStatusChangedArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether the device has access to the internet.
     * 
     * @readonly
 * @snapOS
     */
    isInternetAvailable: boolean;
}

/**
 * Provides information about the device running the Lens. Accessible through `global.deviceInfoSystem`.
 */
declare class DeviceInfoSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Provides the tracking camera's {@link DeviceCamera}.
     */
    getTrackingCamera(): DeviceCamera;
    /**
     * Get the DeviceCamera object for the given camera ID which provides intrinsics/extrinsics of the camera.
     * 
     * @snapOS
     */
    getTrackingCameraForId(cameraId: CameraModule.CameraId): DeviceCamera;
    /**
     * Returns the operating system type of the device.
     * 
     * @exposesUserData
     */
    getOS(): OS;
    /**
     * Returns whether the current Lens is running in a desktop computer.
     */
    isDesktop(): boolean;
    /**
     * Returns whether the current Lens is running in a Spectacles device.
     */
    isSpectacles(): boolean;
    /**
     * Returns whether the current Lens is running in a mobile device.
     */
    isMobile(): boolean;
    /**
     * Returns whether the current Lens is running in Lens Studio.
     */
    isEditor(): boolean;
    /**
     * Returns whether the current Lens is running in CameraKit.
     */
    isCameraKit(): boolean;
    /**
     * Returns true if the device has access to the internet.
     */
    isInternetAvailable(): boolean;
    /**
     * Accepts a callback which indicates whether the current device is capable of providing both front and rear camera texture simultaneously.
     */
    supportsDualCamera(callback: (supportsDualCamera: boolean) => void): void;
    /**
     * Specifies the device pixel ratio. Can be used to set rendering at the real screen resolution.
     * 
     * @readonly
     */
    screenScale: number;
    /**
     * Returns the PerformanceIndexes object, which provides performance information about the device.
     * 
     * @readonly
     */
    performanceIndexes: PerformanceIndexes;
    /**
     * Triggered when internet availability changed.
     * 
     * @readonly
 * @snapOS
     */
    onInternetStatusChanged: event1<InternetStatusChangedArgs, void>;
}

/**
 * Helps convert data types to localized string representations. Accessible through `global.localizationSystem`.
 * 
 * Note that formatted or localized strings may appear differently to users depending on their region.
 * The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
 */
declare class LocalizationSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the language code of the language being used on the device.
     * 
     * Example: "en" (for English)
     * 
     * @exposesUserData
     */
    getLanguage(): string;
    /**
     * The method takes a [localization key](/lens-studio/features/text/localization) and returns the localized string according to device language. Useful for localizing strings before formatting them and assigning them to Text.
     * 
     * @exposesUserData
     */
    localize(key: string): string;
    /**
     * Returns a localized, formatted string representing the number of seconds passed in.
     * 
     * Example: "2:06" (from 126 passed in)
     */
    getFormattedSeconds(seconds: number): string;
    /**
     * Returns a localized, formatted string representation of the number passed in.
     * 
     * Example: "1,234" (from 1234 passed in)
     */
    getFormattedNumber(number: number): string;
    /**
     * Returns a localized, formatted string representation of the celsius temperature passed in.
     * 
     * Example: "32°F" (from 0 passed in)
     */
    getFormattedTemperatureFromCelsius(temperature: number): string;
    /**
     * Returns a localized, formatted string representation of the fahrenheit temperature passed in.
     * 
     * Example: "32°F" (from 32 passed in)
     */
    getFormattedTemperatureFromFahrenheit(temperature: number): string;
    /**
     * Returns a localized, formatted string representation of the distance in meters passed in.
     * 
     * Example: "39.4 in" (from 1 passed in)
     */
    getFormattedDistanceFromMeters(meters: number): string;
    /**
     * Returns a localized string for the month of the passed in `Date` object.
     * 
     * Example: "January"
     */
    getMonth(date: Date): string;
    /**
     * Returns a localized string for the day of the week of the passed in `Date` object.
     * 
     * Example: "Tuesday"
     */
    getDayOfWeek(date: Date): string;
    /**
     * Returns a localized string for the date of the passed in `Date` object.
     * 
     * Example: "Jan 1, 2019"
     */
    getDateFormatted(date: Date): string;
    /**
     * Returns a short, localized string for the date of the passed in `Date` object.
     * 
     * Example: "1/1/19"
     */
    getDateShortFormatted(date: Date): string;
    /**
     * Returns a localized string for the time of the passed in `Date` object.
     * 
     * Example: "12:34 AM"
     */
    getTimeFormatted(date: Date): string;
    /**
     * Returns a localized string for the date and time of the passed in `Date` object.
     * 
     * Example: "Jan 1, 2019 at 12:34 AM"
     */
    getDateAndTimeFormatted(date: Date): string;
    /**
     * Use this property to set the language. Intended for debugging.
     * 
     * @exposesUserData
     */
    language: string;
}

/**
 * Triggers haptic feedback on the device. (iOS Devices only)
 */
declare class HapticFeedbackSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Trigger a haptic feedback.
     */
    hapticFeedback(type: HapticFeedbackType): void;
}

/**
 * Provides access to the device's input system. Accessible through `global.textInputSystem`.
 */
declare class TextInputSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Requests the client to pop up the keyboard with specific type and return key type, fill the inivisible text view with the initial text, and set the selected text range. When user starts editing the text, the new text string and the new selected range are returned to the lens by invoking the onTextChanged function.
     */
    requestKeyboard(options: TextInputSystem.KeyboardOptions): void;
    /**
     * Requests the client to hide the keyboard and clear any existing text in the inivisible text view.
     */
    dismissKeyboard(): void;
    /**
     * Requests the client to set the selected text range on the invisible text view.
     */
    setSelectedTextRange(range: vec2): void;
    /**
     * Requests the client to set the editing ("cursor") position on the invisible text view.
     */
    setEditingPosition(position: number): void;
}

/**
 * Provides information about the user such as display name, birthday, and current weather. Accessible through `global.userContextSystem`.
 * 
 * All callbacks will execute as soon as the requested information is available. In some rare cases, the requested information may be completely unavailable, and the callback will never occur.
 * 
 * Note that formatted or localized strings may appear differently to users depending on their region.
 */
declare class UserContextSystem extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Provides the user's display name.
     */
    requestDisplayName(callback: (data: string) => void): void;
    /**
     * Provides the user's birth date as a Date object.
     * 
     * @exposesUserData
     */
    requestBirthdate(callback: (data: Date) => void): void;
    /**
     * Provides the user's birth date as localized string.
     * 
     * @exposesUserData
     */
    requestBirthdateFormatted(callback: (formattedData: string) => void): void;
    /**
     * Provides the user's current altitude in meters.
     */
    requestAltitudeInMeters(callback: (data: number) => void): void;
    /**
     * Provides the user's current altitude as a localized string.
     */
    requestAltitudeFormatted(callback: (formattedData: string) => void): void;
    /**
     * Provides the user's current temperature in celsius.
     */
    requestTemperatureCelsius(callback: (data: number) => void): void;
    /**
     * Provides the user's current temperature in fahrenheit.
     */
    requestTemperatureFahrenheit(callback: (data: number) => void): void;
    /**
     * Provides the user's current temperature as a localized string.
     */
    requestTemperatureFormatted(callback: (formattedData: string) => void): void;
    /**
     * Provides the user's current weather condition.
     */
    requestWeatherCondition(callback: (data: WeatherCondition) => void): void;
    /**
     * Provides the user's current weather condition as a localized string.
     */
    requestWeatherLocalized(callback: (formattedData: string) => void): void;
    /**
     * Provides the name of the city the user is currently located in.
     * 
     * @exposesUserData
     */
    requestCity(callback: (data: string) => void): void;
    /**
     * Provides the user's username.
     * 
     * @exposesUserData
     */
    requestUsername(callback: (data: string) => void): void;
    /**
     * Retrieve the Snapchatter's friends list in order to access details like display name, birthdate, or Bitmoji
     * 
     * @exposesUserData
     */
    getAllFriends(callback: (data: SnapchatUser[]) => void): void;
    /**
     * Retrieve the Snapchatter's best friends in order to access details like display name, birthdate, or Bitmoji.
     * 
     * @exposesUserData
     */
    getBestFriends(callback: (data: SnapchatUser[]) => void): void;
    /**
     * Retrieve the Snapchatter's pinned best friends in order to access details like display name, birthdate, or Bitmoji.
     * 
     * @exposesUserData
     */
    getPinnedBestFriends(callback: (data: SnapchatUser[]) => void): void;
    /**
     * Retrieve the Snapchatter's friends list with Bitmoji info only.
     */
    getAllFriendsSafeInfo(callback: (data: SafeSnapchatUser[]) => void): void;
    /**
     * Gets the list of friends in the current context, such as 1:1 chats, 1:many chats, and group chats.
     * 
     * @exposesUserData
     */
    getUsersInCurrentContext(callback: (data: SnapchatUser[]) => void): void;
    /**
     * Gets the list of friends in the current context with Bitmoji info only.
     */
    getUsersInCurrentContextSafeInfo(callback: (data: SafeSnapchatUser[]) => void): void;
    /**
     * Retrieve a SnapchatUser representing the current user.
     * 
     * @exposesUserData
     */
    getCurrentUser(callback: (data: SnapchatUser) => void): void;
    /**
     * Retrieve the current user with Bitmoji info only.
     */
    getCurrentUserSafeInfo(callback: (data: SafeSnapchatUser) => void): void;
    /**
     * Retrieve a SnapchatUser object for MyAI which you can use to access the MyAI Bitmoji or other details.
     * 
     * @exposesUserData
     */
    getMyAIUser(callback: (data: SnapchatUser) => void): void;
    /**
     * Retrieve MyAI user with Bitmoji info only.
     */
    getMyAIUserSafeInfo(callback: (data: SafeSnapchatUser) => void): void;
    /**
     * Get a Snapchat User information, given a DynamicResource.
     */
    loadResourceAsSnapchatUser(resource: DynamicResource, onSuccess: (snapchatUser: SnapchatUser) => void, onFailure: (errorMessage: string) => void): void;
}

/**
 * Details about friendship between the active user and another user.
 */
declare class SnapchatFriendUserInfo {
    
    /** @hidden */
    protected constructor()
    
    /**
     * When this friendship started.
     * 
     * @readonly
     */
    friendshipStart: Date | null;
    /**
     * Last interaction between this user and the active one.
     * 
     * @readonly
     */
    lastInteractionTime: Date | null;
}

/**
 * Set the bone on the skin.
 */
declare class SnapchatUserBirthday {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The day of the month (1-31).
     * 
     * @readonly
     */
    day: number;
    /**
     * The month of the year (1-12).
     * 
     * @readonly
     */
    month: number;
}

/**
 * Represents a Snapchat user with only non-sensitive information (Bitmoji info).
 * This is a safe subset of user data that works with lenses that use sensitive apis.
 */
declare class SafeSnapchatUser extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether this user has a bitmoji that can be retrieved via BitmojiModule.
     * 
     * @readonly
     */
    hasBitmoji: boolean;
}

/**
 * Represents a Snapchat user in order to pass to other APIs or to retrieve certain details about the user like display name.
 */
declare class SnapchatUser extends SafeSnapchatUser {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Snapchat user's unique userName. Should not be relied on as a key because it can be changed.
     * 
     * @readonly
     */
    userName: string;
    /**
     * Name a Snapchat user has chosen to be shown as. Note that not all users set their display name, so you should treat this value as such.
     * 
     * @readonly
     */
    displayName: string | null;
    /**
     * Information about friendship between this friend and the active user like start date and streak.
     * 
     * @readonly
     */
    friendInfo: SnapchatFriendUserInfo | null;
    /**
     * User's birth month and day. The month and day will start with the index of 1.
     * 
     * @readonly
     */
    birthday: SnapchatUserBirthday | null;
    /**
     * This user's zodiac.
     * 
     * @readonly
     */
    zodiac: Zodiac | null;
}

/**
 * A representation for plane detected by native tracking. Can be used with TrackedPoint.
 */
declare class TrackedPlane extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether the detected plane is still available to utilize
     * 
     * @readonly
     */
    isValid: boolean;
    /**
     * Returns the orientation of the detected plane, either vertical or horizontal.
     * 
     * @readonly
     */
    orientation: TrackedPlaneOrientation;
    /**
     * The position, rotation, and scale of the detected plane
     * 
     * @readonly
     */
    transform: mat4;
    /**
     * The center point of the detected plane
     * 
     * @readonly
     */
    pivot: vec3;
    /**
     * The size of the detected plane, where it is described as width, 0, depth
     * 
     * @readonly
     */
    size: vec3;
    /**
     * A coarse mesh describing the shape of the tracked plane. Can be displayed by RenderMeshVisual
     * 
     * @readonly
     */
    mesh: RenderMesh;
}

/**
 * An object containing the position of an object relative to a LocationAsset.
 */
declare class Anchor extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The LocationAsset which this anchor is relative to.
     * 
     * @readonly
     */
    location: LocationAsset;
    /**
     * The position of this anchor relative to the LocationAsset.
     * 
     * @readonly
     */
    position: vec3;
}

/**
 * Used to bind custom JavaScript or TypeScript code to specific Lens events for dynamic interactivity. Top level contents of a JS file will run as an {@link OnAwakeEvent}.
 * 
 * @remarks These Script Components are attached to SceneObjects, providing the ability to modify properties and behaviors of those objects or others within the scene. Script Components expose input fields in the Inspector panel, allowing for customization of script behavior without altering code. Any script can access the ScriptComponent executing them through the variable `script`.
 * 
 * @remarks
 * @see [Scripting Overview](/lens-studio/essential-skills/scripting/script-overview).
 * @see [Script Events Guide](/lens-studio/features/scripting/script-events).
 */
declare class ScriptComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Adds a new SceneEvent, triggered by `eventType` events, to the ScriptComponent.
     */
    createEvent<K extends keyof EventNameMap>(eventType: K): EventNameMap[K];
    /**
     * Removes a previously added SceneEvent from the ScriptComponent.
     */
    removeEvent(event: SceneEvent): void;
    /**
     * Returns the list of SceneEvents referenced by this ScriptComponent.
     */
    getReferencedEvents(): SceneEvent[];
    /**
     * Generic object accessible by other instances of ScriptComponent. Use this object to store references to properties and methods that need to be accessible from other ScriptComponents.
     * 
     * @deprecated This property is no longer needed, you can use a reference to the ScriptComponent, including 'script', directly
     * 
     * @deprecated
 * @readonly
     */
    api: any;
}

type Script = ScriptComponent;

/**
 * Masks out visuals and {@link InteractionComponent} touch events area within a rectangle defined by {@link ScreenTransform} component.
 * 
 * @remarks
 * Any {@link RenderMeshVisual} or {@link InteractionComponent} components will be clipped within user defined 2D bounds. These 2D bounds are defined by a {@link ScreenTransform}.
 * 
 * @see [Masking Component](/lens-studio/lens-studio-workflow/scene-set-up/2d/masking-component)
 */
declare class MaskingComponent extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The radius of the mask's corner.
     */
    cornerRadius: number;
}

/**
 * Used with {@link DeviceTracking#rotationOptions} to change settings for Rotation tracking mode.
 */
declare class RotationOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, rotation will be inverted.
     */
    invertRotation: boolean;
}

/**
 * Used with {@link DeviceTracking#surfaceOptions} to change settings for Surface tracking mode.
 */
declare class SurfaceOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, surface tracking will be improved using native AR tracking.
     */
    enhanceWithNativeAR: boolean;
}

/**
 * Holds settings for world mesh and point cloud tracking in DeviceTracking component. Accessible through DeviceTracking.worldOptions.
 * When tracking either world meshes or point clouds, the {@link DeviceTracking} component must be set to `World` mode.
 */
declare class WorldOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enables or disables point cloud tracking.
     */
    pointCloudEnabled: boolean;
    nativePlaneTrackingType: NativePlaneTrackingType;
    /**
     * Enables or disables the generation of world meshes.
     */
    enableWorldMeshesTracking: boolean;
    /**
     * Enables or disables world mesh classification gathering.
     */
    enableWorldMeshesClassificationTracking: boolean;
}

/**
 * Represents 3D locations of stationary features in the environment. The resulting cloud of points provides a sparse description of the 3D environment.
 */
declare class PointCloud extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * A list of vec3 objects representing the 3D position of every point.
     * 
     * @readonly
     */
    positions: vec3[];
    /**
     * A list of numeric identifiers for each unique 3D point in the cloud.
     * 
     * @readonly
     */
    ids: number[];
    /**
     * The confidence level of the point cloud.
     * 
     * @readonly
 * @experimental
     */
    confidences: number[];
}

/**
 * Provides information about whether certain world tracking features are supported by the device.
 */
declare class WorldTrackingCapabilities extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns true if the device supports scene reconstruction.
     * 
     * @readonly
     */
    sceneReconstructionSupported: boolean;
    /**
     * @readonly
     */
    planesTrackingSupported: boolean;
    /**
     * @readonly
     */
    trackedWorldPointsSupported: boolean;
}

/**
 * This class has been **deprecated** and replaced with the [Image](api/classes/Image) component.
 * 
 * Represents a renderable 2D visual in Lens Studio.
 * @deprecated Use {@link Image} component instead.
 * 
 * @deprecated
 */
declare class SpriteVisual extends MaterialMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the width and height of the mesh the `SpriteVisual` is applied to.
     * 
     * @deprecated
     */
    getMeshSize(): vec2;
    /**
     * The location of the sprite's pivot point relative to its boundaries.
     * The pivot's `x` value is a relative horizontal position, -1 being the sprite's left border and 1 being the sprite's right border.
     * Similarly, the `y` value is a relative vertical position, -1 being the sprite's bottom border and 1 being the sprite's top border.
     * 
     * @deprecated
     */
    pivot: vec2;
    /**
     * Whether the sprite is flipped over the Y-axis (sideways).
     * 
     * @deprecated
     */
    flipX: boolean;
    /**
     * Whether the sprite is flipped over the X-axis (upside-down).
     * 
     * @deprecated
     */
    flipY: boolean;
    /**
     * Which type of fill the sprite uses.
     * 
     * Possible values:
     * 
     * * Fit = 0
     * * Fill = 1
     * * Stretch = 2
     * 
     * @deprecated
     */
    fillMode: TextureStretchMode;
}

/**
 * Renders {@link VFXAsset} in scene.
 */
declare class VFXComponent extends BaseMeshVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Restart the VFX system.
     */
    restart(): void;
    /**
     * Returns the time in seconds since the VFX component was enabled, adjusted by the VFX Asset's delta time configuration. Component Time differs from Elapsed Time in that Elapsed Time is the total time since the Lens started.
     */
    time(): number;
    /**
     * Clear the VFX system.
     */
    clear(): void;
    /**
     * The {@link VFXAsset} that describes the VFX simulation.
     */
    asset: VFXAsset;
    /**
     * Enables or disables emission logic for emitters on this component.
     */
    emitting: boolean;
    /**
     * When true, stops the VFX simulation by setting delta time to 0.
     */
    paused: boolean;
}

/**
 * Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.).
 */
declare class SceneObjectEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the SceneObject this Event is associated with.
     */
    getSceneObject(): SceneObject;
}

/**
 * Event that runs during each frame, only if a Component and its SceneObject is enabled. A Component will not get an UpdateEvent that frame if it constructed after UpdateEvents have started to be processed. Relative ordering between UpdateEvents is not guaranteed.
 */
declare class UpdateEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the time elapsed (in seconds) between the current frame and previous frame.
     */
    getDeltaTime(): number;
}

/**
 * Event that runs during each frame, only if a Component and its SceneObject is enabled. LateUpdate runs later in the frame, after all {@link UpdateEvent}s have run, and after systems like animation, physics, and tracking but before the start of rendering.  A Component will not get a LateUpdateEvent that frame if it constructed after {@link UpdateEvent}s have started to be processed. Relative ordering between LateUpdateEvents is not guaranteed.
 */
declare class LateUpdateEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the time elapsed (in seconds) between the current frame and previous frame.
     */
    getDeltaTime(): number;
}

/**
 * An event that gets triggered after a delay.
 */
declare class DelayedCallbackEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Calling this will cause the event to trigger in `time` seconds.
     */
    reset(time: number): void;
    /**
     * Cancel the callback in progress.
     */
    cancel(): void;
    /**
     * Returns the total delay time in seconds set on the event.
     */
    getDelayTime(): number;
    /**
     * Returns the current time in seconds left in the event's delay.
     */
    getTimeLeft(): number;
}

/**
 * This event has been **deprecated**, please use the [OnStartEvent](api/classes/OnStartEvent) instead.
 * 
 * Triggered when the lens turns on.
 * @deprecated Use {@link OnStartEvent} instead.
 * 
 * @deprecated
 */
declare class TurnOnEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when the lens turns off.
 */
declare class TurnOffEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when the device's front facing camera becomes active.
 */
declare class CameraFrontEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when the device's back facing camera becomes active.
 */
declare class CameraBackEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when a touch event starts.
 */
declare class TouchStartEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     */
    getTouchId(): number;
    /**
     * Returns the normalized 2D screen position of the user’s touch.
     * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     */
    getTouchPosition(): vec2;
}

/**
 * Triggered when a touch position on the screen is moved.
 */
declare class TouchMoveEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     */
    getTouchId(): number;
    /**
     * Returns the normalized 2D screen position of the user’s touch.
     * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     */
    getTouchPosition(): vec2;
}

/**
 * Triggered when a touch event ends.
 */
declare class TouchEndEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
     */
    getTouchId(): number;
    /**
     * Indicates if the TouchEnd event was cancelled by another UI component or the touch-up event
     * occurred too far away from touch-down event's position.
     */
    isCancelled(): boolean;
    /**
     * Returns the normalized 2D screen position of the user’s touch.
     * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     */
    getTouchPosition(): vec2;
}

/**
 * This event is triggered when the user taps on the screen.
 */
declare class TapEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the normalized 2D screen position of the user's tap. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     */
    getTapPosition(): vec2;
}

/**
 * This event is triggered when the user presses a key.
 */
declare class KeyPressEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the key code of the pressed key.
     * 
     * @readonly
     */
    key: Keys;
    /**
     * Returns the modifier keys active when the key was pressed as a set of enums.
     * 
     * @readonly
     */
    modifiers: KeyModifiers[];
}

/**
 * This event is triggered when the user releases a key.
 */
declare class KeyReleaseEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the key code of the released key.
     * 
     * @readonly
     */
    key: Keys;
    /**
     * Returns the modifier keys active when the key was released as set of enums.
     * 
     * @readonly
     */
    modifiers: KeyModifiers[];
}

/**
 * Triggered when a double tap event has occurred.
 */
declare class DoubleTapEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the normalized 2D screen position of the user's double tap. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
     */
    getTapPosition(): vec2;
}

/**
 * Gets called when the user triggers the primary input on their device. For example touch on touch screens.
 */
declare class TriggerPrimaryEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
     */
    position: vec2;
}

/**
 * This event is triggered when manipulation on the object begins.
 */
declare class ManipulateStartEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * This event is triggered when manipulation on the object ends.
 */
declare class ManipulateEndEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
}

declare class HoverStartEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    getHoverPosition(): vec2;
}

/**
 * Triggered when a mouse hover event occurs. Only triggered in the `Preview` panel of Lens studio. Useful when working with Spectacles, where you can simulate the use of your hand to hover over an object. Does not get triggered on mobile.
 */
declare class HoverEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The normalized screen position of the hover event.
     */
    getHoverPosition(): vec2;
}

/**
 * Triggered when hovering state has ended on an {@link InteractionComponent}.
 */
declare class HoverEndEvent extends SceneObjectEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the screen space of the hover position.
     */
    getHoverPosition(): vec2;
}

/**
 * Gets called when the user starts long pressing the capture button to record a Snap.
 */
declare class SnapRecordStartEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Gets called when the user stops long pressing the Snap button to end recording of a Snap.
 */
declare class SnapRecordStopEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Called when the user taps on the capture button to record an image.
 */
declare class SnapImageCaptureEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

declare class OnTimeStartEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

type OnLoopStartedEvent = OnTimeStartEvent;

/**
 * Runs on the first frame a Component is enabled, at a later point than {@link OnAwakeEvent} but guaranteed within the first frame before rendering. For Components constructed because of a scripting call like {@link SceneObject.createComponent} or {@link ObjectPrefab.instantiate} the OnStart event will run after those functions have returned and the calling scope has exited. Relative order of OnStart events between multiple Components constructed together (such as in initial SceneLoading or ObjectPrefab instantiation) is not guaranteed.
 */
declare class OnStartEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Event that runs immediately when a Component is constructed or deserialized. Will run before a call like {@link SceneObject.createComponent} or {@link ObjectPrefab.instantiate} returns. When multiple Components are constructed together, such as during Scene loading or ObjectPrefab instantiation, OnAwake events will run in hierarchy order. If a Component is disabled in the hierarchy at those points -- including because its SceneObject is disabled -- then OnAwake will not run, and will instead run immediately the first time the Component is enabled.
 * 
 * @noNode
 */
declare class OnAwakeEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Event that runs when a Component will be destroyed. All OnDestroy events will run prior to any SceneObjects or Components actually being destroyed, however it is disallowed to reparent a SceneObject either under the SceneObject being destroyed or out from under a SceneObject being destroyed. Destroying an ancestor or descendent SceneObject during OnDestroy will queue that destruction to only be processed once the current destruction completes.
 */
declare class OnDestroyEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when users tap the menu button in Palm UI.
 * 
 * When paused, certain behaviors like animations or script updates continue running in the background, while inputs (e.g., Hand Tracking, Mobile Controller) are disabled to allow the system overlay to take priority. Developers should manage scenarios where the Lens is paused to maintain a seamless experience.
 * 
 * @snapOS
 */
declare class OnPauseEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when users tap the menu button in Palm UI during pause state.
 * 
 * When paused, certain behaviors like animations or script updates continue running in the background, while inputs (e.g., Hand Tracking, Mobile Controller) are disabled to allow the system overlay to take priority. Developers should manage scenarios where the Lens is resumed after pause to maintain a seamless experience.
 * 
 * @snapOS
 */
declare class OnResumeEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Event that runs when a Component becomes enabled, either directly via its own {@link Component.enabled} property or because its SceneObject becomes enabled. OnEnableEvent will run after the SceneObject's own {@link SceneObject.onEnabled} event property and will not run if some listener to that event disabled the SceneObject again. All of a SceneObject's Components then receive OnEnableEvent before child SceneObjects begin to receive {@link SceneObject.onEnabled} and OnEnableEvents.
 */
declare class OnEnableEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Event that runs when a Component becomes disabled, either directly via its own {@link Component.enabled} property or because its SceneObject becomes disabled. OnDisableEvent will run after the SceneObject's own {@link SceneObject.onDisabled} event property and will not run if some listener to that event enabled the SceneObject again. All of a SceneObject's Components then receive OnDisableEvent before child SceneObjects begin to receive {@link SceneObject.onDisabled} and OnDisableEvents.
 */
declare class OnDisableEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Event fired when the "Launch connected lens" button was pressed. Wait for this event to be triggered before creating a session, as having this event gaurantees the user has accepted the necessary disclosures to use a connected lens experience.
 */
declare class ConnectedLensEnteredEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

type ClientInterfacePlayButtonTriggerEvent = ConnectedLensEnteredEvent;

/**
 * The stencil test state for Pass.
 */
declare class StencilState extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enable or disable the stencil test for pass. The initial value is false.
     */
    enabled: boolean;
    /**
     * Specifies whether the front and/or back face stencil test will be applied. The initial value is "FrontAndBack"
     */
    face: StencilFace;
    /**
     * Specifies the action to take when the stencil test fails. The initial value is "Keep".
     */
    stencilFailureOperation: StencilOperation;
    /**
     * Specifies the stencil action when the stencil test passes, but the depth test fails. The initial value is "Keep".
     */
    depthFailureOperation: StencilOperation;
    /**
     * Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. The initial value is "Keep".
     */
    depthStencilPassOperation: StencilOperation;
    /**
     * Specifies the stencil test function. The initial value is "Always".
     */
    stencilCompareFunction: StencilFunction;
    /**
     * Specifies the reference value for the stencil test. It is clamped to the range [0..pow(2, n)−1], where n is the number of bitplanes in the stencil buffer. The initial value is 0.
     */
    referenceValue: number;
    /**
     * Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is 0xFF.
     */
    readMask: number;
    /**
     * Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is 0xFF.
     */
    writeMask: number;
}

/**
 * A file based asset.
 */
declare class BinAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Asset that provides the necessary localized text for your Lens.
 * 
 * @remarks
 * The asset refers to a folder containing files for each language that you’ve translated your texts to.
 * 
 * The Lens will automatically use the correct localized string provided by a Localizations Asset based on the Snapchatter's device language.
 * 
 * @see [Localization](/lens-studio/features/text/localization) guide.
 */
declare class LocalizationsAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * A class for generating meshes at runtime.
 */
declare class MeshBuilder {
    /**
     * Create a MeshBuilder from a RenderMesh.
     */
    static createFromMesh(mesh: RenderMesh): MeshBuilder;
        constructor(layout: any[]);
    /**
     * Returns a RenderMesh asset that can be applied to a MeshVisual's `mesh` property. This asset stays linked to the MeshBuilder that provided it, so making changes to the mesh data and calling `updateMesh()` will update the RenderMesh as well.
     */
    getMesh(): RenderMesh;
    /**
     * Rebuilds the MeshAsset controlled by this MeshBuilder using the current mesh data.
     */
    updateMesh(): void;
    /**
     * Takes a list of list of vertex values according to the layout.
     */
    appendVertices(verts: number[][]): void;
    /**
     * Similar to `appendVertices`, but takes all values in one large array.
     */
    appendVerticesInterleaved(verts: number[]): void;
    /**
     * Sets data for a single vertex at vertex index `index`.
     */
    setVertexInterleaved(index: number, verts: number[]): void;
    /**
     * Add bones to the mesh.
     */
    setBones(bones: string[], inverseMatrices: mat4[]): void;
    /**
     * Returns the number of vertices in the vertex list.
     */
    getVerticesCount(): number;
    /**
     * Removes all vertex data starting at vertex index `from` and ending before vertex index `to`.
     */
    eraseVertices(from: number, to: number): void;
    /**
     * Appends indices to the index list.
     */
    appendIndices(indices: number[]): void;
    /**
     * Removes all indices starting at index `from` and ending before index `to`.
     */
    eraseIndices(from: number, to: number): void;
    /**
     * Returns the number of indices in the index list.
     */
    getIndicesCount(): number;
    /**
     * Checks whether the current data entered will create a valid mesh.
     */
    isValid(): boolean;
    /**
     * The topology type used for the mesh.
     */
    topology: MeshTopology;
    /**
     * The index data type used by this MeshBuilder. `MeshIndexType.UInt16` is the value normally used for this.
     */
    indexType: MeshIndexType;
}

/**
 * Provides methods to draw primitive visuals for debugging. Accessible through `global.debugRenderSystem`.
 */
declare class DebugRender extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Clears any visual on the debug render system.
     */
    clear(): void;
    /**
     * Draw a single line segment.
     */
    drawLine(posA: vec3, posB: vec3, color: vec4): void;
    /**
     * Draws a filled in triangle.
     */
    drawSolidTriangle(vertex1: vec3, vertex2: vec3, vertex3: vec3, color: vec4): void;
    /**
     * Draw a sequence of unconnected line segments (2 points per line).
     */
    drawBrokenLine(points: vec3[], color: vec4): void;
    /**
     * Draw a wireframe circle oriented on the XY plane.
     */
    drawCircle(position: vec3, radius: number, color: vec4): void;
    /**
     * Draws a wireframe sphere as a 3 axis-aligned circle.
     */
    drawSphere(position: vec3, radius: number, color: vec4): void;
    /**
     * Draws a solid sphere mesh.
     */
    drawSolidSphere(position: vec3, radius: number, color: vec4): void;
    /**
     * Draws a wireframe box.
     */
    drawBox(position: vec3, width: number, height: number, depth: number, color: vec4): void;
    /**
     * Draws a solid box mesh.
     */
    drawSolidBox(position: vec3, width: number, height: number, depth: number, color: vec4): void;
    /**
     * Currently unused.
     */
    isAutoClear: boolean;
}

/**
 * Settings for importing a glTF Asset.
 * Use this with {@link GltfAsset} component's `tryInstantiateWithSetting` method.
 */
declare class GltfSettings extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    static create(): GltfSettings;
    /**
     * Units for all linear distances in glTF are meters and in LensStudio are centimeters, enable this option if you want to automatically scale from meters into centimeters when importing the glTF file.
     */
    convertMetersToCentimeters: boolean;
    /**
     * Whether the GLB Loader should optimize geometry.
     */
    optimizeGeometry: boolean;
    /**
     * Controls whether the triangle order is retained in Gltf asset.
     */
    storeTriangleOrder: boolean;
}

/**
 * Represents a GLTF 3D Model.
 */
declare class GltfAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Try instantiating an object from the GLTF asset.
     */
    tryInstantiate(parent: SceneObject, material: Material): SceneObject;
    /**
     * Try instantiating an object from the GLTF asset with supplied GltfSetting
     */
    tryInstantiateWithSetting(parent: SceneObject, material: Material, gltfSettings: GltfSettings): SceneObject;
    /**
     * Asynchronously try instantiating an object from the GLTF asset. Useful to prevent frame drops when loading multiple assets simultaenously as to not block the the thread.
     */
    tryInstantiateAsync(parent: SceneObject, material: Material, onSuccess: (sceneObject: SceneObject) => void, onFailure: (error: string) => void, onProgress: (progress: number) => void, gltfSettings?: GltfSettings): void;
    /**
     * Use this method to get a dynamic resource for the url from the gltf extras.
     */
    getResourceFromExtras(url: string): DynamicResource;
    /**
     * Returns a JSON string containing statistics about the glTF asset including:
     * file size, triangle count, vertex count, mesh count, texture count,
     * texture memory size, material count, animation count, and node count.
     * Must be called after the asset has been instantiated with tryInstantiate,
     * tryInstantiateAsync or tryInstantiateWithSetting, otherwise it returns null.
     */
    getStaticComposition(): string | null;
    /**
     * @readonly
     */
    extras: string;
}

/**
 * Represents a JsonAsset that can be used to store JSON data in your Lens.
 */
declare class JsonAsset extends BinAsset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the JSON content as a formatted string.
     */
    getString(): string;
}

/**
 * Enables usage of {@link Leaderboard} API within a Lens.
 * 
 * @see [Leaderboard](/lens-studio/features/user-context/leaderboard) guide.
 */
declare class LeaderboardModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Gets a handle for a leaderboard.
     */
    getLeaderboard(options: Leaderboard.CreateOptions, successCallback: (leaderboard: Leaderboard) => void, failureCallback: (message: string) => void): void;
}

/**
 * A leaderboard which can contain scores and information about participating users. Accessible through the `LeaderboardModule` asset.
 */
declare class Leaderboard extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Submit a score to the leaderboard.
     */
    submitScore(score: number, successCallback: (currentUserInfo: Leaderboard.UserRecord) => void, failureCallback: (status: number) => void): void;
    /**
     * Get information about the leaderboard, such as who is on it.
     */
    getLeaderboardInfo(options: Leaderboard.RetrievalOptions, successCallback: (othersInfo: Leaderboard.UserRecord[], currentUserInfo?: Leaderboard.UserRecord) => void, failureCallback: (status: number) => void): void;
    /**
     * The name of the leaderboard.
     * 
     * @readonly
     */
    name: string;
    /**
     * How long entries on the leaderboard should last in seconds. Can be between 0-2 years. Setting `0` will result in default ttl which is 1 year. You must include this parameter when creating a leaderboard.
     * 
     * @readonly
     */
    ttlSeconds: number;
    /**
     * How the leaderboard should be ordered.
     * 
     * @readonly
     */
    orderingType: Leaderboard.OrderingType;
}

/**
 * Represents a single sync/word of a {@link LyricsLine}.
 */
declare class LyricsSync extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Duration (in seconds) of this sync. Equivalent to {@link LyricsSync#offsetEnd | offsetEnd} - {@link LyricsSync#offset | offset}.
     * 
     * @readonly
     */
    duration: number;
    /**
     * The text value of this sync. Depending on the {@link LyricsType} of the lyrics data, this may be a single word, whitespace, or an entire line of text.
     * 
     * @readonly
     */
    text: string;
    /**
     * Offset (in seconds) that this sync begins, relative to the start of the {@link LyricsLine} this sync is part of. Add this offset to the {@link LyricsLine#offset | LyricsLine.offset} to convert it to playback time, which can be compared to {@link LyricsTracker#playbackPosition | LyricsTracker.playbackPosition}.
     * 
     * @readonly
     */
    offset: number;
    /**
     * Offset (in seconds) that this sync ends, relative to the start of the {@link LyricsLine} this sync is part of. Add this offset to the {@link LyricsLine#offset | LyricsLine.offset} to convert it to playback time, which can be compared to {@link LyricsTracker#playbackPosition | LyricsTracker.playbackPosition}.
     * 
     * @readonly
     */
    offsetEnd: number;
}

/**
 * Represents a single line of Lyrics.
 */
declare class LyricsLine extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The full line of lyrics represented as a single string.
     * 
     * @readonly
     */
    fullLineText: string;
    /**
     * Lyrics for this line represented as a list of {@link LyricsSync} objects in the order they appear.
     * 
     * Note that for {@link LyricsType#LineSync | LineSync} lyrics data, only one {@link LyricsSync} object will be present in the list, representing the entire line.
     * 
     * @readonly
     */
    syncs: LyricsSync[];
    /**
     * Offset (in seconds) that this line begins relative to the start of the tracked music. Note that this value can be negative, since music tracks can start halfway through a line being sung. This value is useful to compare with {@link LyricsTracker#playbackPosition | LyricsTracker.playbackPosition}.
     * 
     * @readonly
     */
    offset: number;
    /**
     * Offset (in seconds) that this line ends relative to the start of the tracked music. This value is useful to compare with {@link LyricsTracker#playbackPosition | LyricsTracker.playbackPosition}.
     * 
     * @readonly
     */
    offsetEnd: number;
}

/**
 * Represents the full set of Lyrics data for tracked music. Can be accessed through {@link LyricsTracker#fullLyrics | LyricsTracker.fullLyrics} when lyrics are available.
 */
declare class Lyrics extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Lyrics represented as a list of {@link LyricsLine} objects in the order they appear in the tracked music.
     * 
     * @readonly
     */
    lines: LyricsLine[];
    /**
     * Duration (in seconds) of the tracked music.
     * 
     * @readonly
     */
    clipDuration: number;
    /**
     * {@link LyricsType | Type} of the lyrics data available. Describes the granularity of timing data available for the lyrics.
     * 
     * @readonly
     */
    type: LyricsType;
}

/**
 * Provides information about lyrics data for a currently playing track. Can be accessed through {@link ExternalMusicModule#getLyricsTracker | getLyricsTracker()} on {@link ExternalMusicModule}.
 * 
 * Note that lyrics data may not be available immediately when this class is accessed. Subscribe to {@link LyricsTracker#onLyricsAvailable | onLyricsAvailable} to be notified when lyrics data becomes available.
 * 
 * Also note that some music tracks may not support lyrics. In this case, {@link LyricsTracker#onLyricsAvailable | onLyricsAvailable} will not be triggered.
 */
declare class LyricsTracker extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The full {@link Lyrics} for the tracked music. Useful for pre-processing the lyrics of a track ahead of time.
     * 
     * @readonly
     */
    fullLyrics: Lyrics;
    /**
     * The next {@link LyricsLine} for the tracked music. Returns `null` if no next line is present, or lyrics data is not available.
     * 
     * @readonly
     */
    nextLine: LyricsLine;
    /**
     * The current {@link LyricsLine} for the tracked music. Returns `null` if no line is currently playing, or lyrics are not available.
     * 
     * @readonly
     */
    currentLine: LyricsLine;
    /**
     * Event that triggers when lyrics data becomes available for the tracked music. Note that when lyrics are not available for the selected music track, this event will never trigger.
     * 
     * @readonly
     */
    onLyricsAvailable: event0<void>;
    /**
     * Event that fires when lyrics data is cleared. This usually indicates that the tracked music has either been removed or changed. It's good practice to clear any lyrics visuals when this event fires.
     * 
     * @readonly
     */
    onLyricsCleared: event0<void>;
    /**
     * Event that triggers when a {@link LyricsLine} has started. Note that if playback begins partway through a line, this event will immediately fire.
     * 
     * @readonly
     */
    onLineStart: event1<LyricsLine, void>;
    /**
     * Event that triggers when a {@link LyricsLine} has ended.
     * 
     * @readonly
     */
    onLineEnd: event1<LyricsLine, void>;
    /**
     * Event that triggers when a {@link LyricsSync} has started. Note that if playback begins partway through a LyricsSync, this event will immediately fire.
     * 
     * @readonly
     */
    onWordStart: event1<LyricsSync, void>;
    /**
     * Event that triggers when a {@link LyricsSync} has ended.
     * 
     * @readonly
     */
    onWordEnd: event1<LyricsSync, void>;
    /**
     * Event that triggers when playback has started on the tracked music.
     * 
     * @readonly
     */
    onPlaybackStarted: event1<ExternalMusicInfo, void>;
    /**
     * Event that triggers when playback has been reset on the tracked music. It's good practice to clear any lyrics visuals when this event fires.
     * 
     * @readonly
     */
    onPlaybackReset: event0<void>;
    /**
     * Returns true if the tracked audio is playing.
     * 
     * @readonly
     */
    isPlaying: boolean;
    /**
     * Current playback position (in seconds) of the tracked music.
     * 
     * This can be used to compare playback position to the {@link LyricsLine#offset | offset} and {@link LyricsLine#offsetEnd | offsetEnd} properties on {@link LyricsLine} objects. It can also be used with offsets on {@link LyricsSync} objects, after adjusting their offsets by the `offset` of the {@link LyricsLine} they belong to.
     * 
     * @readonly
     */
    playbackPosition: number;
}

/**
 * Information about an external music track. Accessible through {@link ExternalMusicModule#getExternalMusicInfo | ExternalMusicModule.getExternalMusicInfo()}.
 */
declare class ExternalMusicInfo extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns true if this object represents the same music track as the passed in object.
     */
    isSameTrack(other: ExternalMusicInfo): boolean;
}

declare class RemoteApiRequest extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    static create(): RemoteApiRequest;
    endpoint: string;
    parameters: any;
    body: Uint8Array | number[] | string;
    /**
     * A list of {@link DynamicResource} objects to be used as URI resources in the request.
     */
    uriResources: DynamicResource[];
}

declare class RemoteApiResponse extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Converts the response into a DynamicResource object, which can be used by RemoteMediaModule to load the media content in the response body.
     */
    asResource(): DynamicResource;
    /**
     * The integer status code of the response.
     * 
     * The meaning of possible status code values are defined as follows:
     * - 1: Success. This code corresponds to the 2XX HTTP response status codes.
     * - 2: Redirected. This code corresponds to the 3XX HTTP response status codes.
     * - 3: Bad request. This code corresponds to the 4XX HTTP response status codes other than 401, 403, 404, 408, 413, 414, and 431 which are mapped separately below.
     * - 4: Access denied. This code corresponds to the HTTP response status codes 401 and 403.
     * - 5: Not found. This code corresponds to the HTTP response status code 404. It is also returned when the API spec is not found by the remote API service.
     * - 6: Timeout. This code corresponds to the HTTP response status codes 408 and 504.
     * - 7: Request too large. This code corresponds to the HTTP response status codes 413, 414, and 431.
     * - 8: Server error. This code corresponds to the 5XX HTTP response status codes other than 504 (timeout).
     * - 9: Request cancelled by the caller.
     * - 10: Internal error happened inside the remote API framework (i.e., not from the remote service being called).
     * - 11: Rate limited. The request was rejected due to rate limiting.
     * 
     * All other values have undefined meaning and should be treated as internal error (code 10).
     * 
     * @readonly
     */
    statusCode: number;
    /**
     * @readonly
     */
    metadata: {[key:string]:string};
    /**
     * @readonly
     */
    body: string;
    /**
     * @readonly
     */
    uriResources: DynamicResource[];
}

/**
 * Provides access to Snap authorized remote services.
 */
declare class RemoteServiceModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @deprecated. This method has been moved to {@link InternetModule}.
     * 
     * @deprecated
 * @experimental
 * @snapOS
     */
    static createWebViewOptions(resolution: vec2): WebViewOptions;
    /**
     * @deprecated. This method has been moved to {@link InternetModule}.
     * 
     * @deprecated
 * @snapOS
     */
    fetch(request: Request | string, options?: any): Promise<Response>;
    /**
     * @deprecated. This method has been moved to {@link InternetModule}.
     * 
     * @deprecated
 * @snapOS
     */
    createWebSocket(url: string): WebSocket;
    /**
     * The createWebAPISocket(endpoint, params) method initiates a WebSocket connection with the specified `endpoint` and the specified `params` to the Snap authorized remote services. Returns a {@link WebSocket} object that can be used to send and receive messages from the server.
     * 
     * __Syntax__
     * 
     * ```js
     * createAPIWebSocket(endpoint, params)
     * ```
     * 
     * - `endpoint` Defines the Snap authorized remote service endpoint to which to establish the WebSocket connection.
     * - `params` Defines the parameters that will be used to establish the connection.
     * 
     * __Example__
     * 
     * ```js
     * //@input Asset.RemoteServiceModule remoteServiceModule
     * var remoteServiceModule = script.remoteServiceModule
     * 
     * // Create WebSocket connection.
     * let socket = script.remoteServiceModule.createAPIWebSocket("real_time", {"api-token" : "token", "api-example" : "realtime=v1", "model": "model"});
     * 
     * // Listen for the open event
     * socket.onopen = (event) => { print("Socket opened"); };
     * 
     * // Listen for messages
     * socket.onmessage = async (event) => { print("Socket message"); };
     * 
     * // Listen for the close event
     * socket.onclose = (event) => { print("Socket closed"); };
     * ```
     * 
     * @snapOS
     */
    createAPIWebSocket(endpoint: string, params: any): WebSocket;
    /**
     * @deprecated. This method has been moved to {@link InternetModule}.
     * 
     * @deprecated
 * @snapOS
 * @cameraKit
     */
    performHttpRequest(requestOptions: RemoteServiceHttpRequest, onHttpResponse: (response: RemoteServiceHttpResponse) => void): void;
    performApiRequest(request: RemoteApiRequest, onApiResponse: (response: RemoteApiResponse) => void): void;
    subscribeApiRequest(request: RemoteApiRequest, onApiResponse: (response: RemoteApiResponse) => void): string;
    /**
     * Get a `DynamicResource` to be used with `RemoteMediaModule` from `mediaUrl`.
     * 
     * @deprecated
 * @snapOS
 * @cameraKit
     */
    makeResourceFromUrl(mediaUrl: string): DynamicResource;
    /**
     * @deprecated. This method has been moved to {@link InternetModule}.
     * 
     * @deprecated
 * @experimental
 * @snapOS
     */
    createWebView(options: WebViewOptions, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void;
}

/**
 * Provides configuration options for uploading images via {@link RemoteMediaModule.uploadImage}.
 * Allows setting the compression method, compression quality, and whether to include alpha channel.
 */
declare class ImageUploadOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new ImageUploadOptions instance with default settings.
     */
    static create(): ImageUploadOptions;
    /**
     * Whether to include the alpha channel in the uploaded image. Defaults to false.
     * Note: This property must be set after `compressionMethod` to avoid conflicts.
     * Alpha channel is not supported for JPG format.
     */
    includeAlpha: boolean;
    /**
     * The compression quality level to use when encoding the image. Defaults to MaximumQuality.
     */
    compressionQuality: CompressionQuality;
    /**
     * The compression method (image format) to use when encoding the image. Defaults to JPG.
     */
    compressionMethod: ImageUploadCompressionMethod;
}

/**
 * Allows the Lens to download and integrate remote media content such as 3D GLTF assets, images, audio tracks, and video textures into Lenses.
 */
declare class RemoteMediaModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Downloads the remote image resource from the {@link DynamicResource} object and loads the resource as an {@link Image} Texture.
     */
    loadResourceAsImageTexture(resource: DynamicResource, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Downloads the remote image resource from the {@link DynamicResource} object and loads the resource as a {@link VideoTextureProvider}.
     */
    loadResourceAsVideoTexture(resource: DynamicResource, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Downloads the remote asset resource from the {@link DynamicResource} object and loads the resource as an {@link Asset}.
     */
    loadResourceAsRuntimeBundle(resource: DynamicResource, onSuccess: (asset: Asset) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Downloads a remote 3D GLTF file given a {@link DynamicResource}.
     */
    loadResourceAsGltfAsset(resource: DynamicResource, onSuccess: (glTFAsset: GltfAsset) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Downloads the remote image resource from the {@link DynamicResource} object and loads the resource as {@link AudioTrackAsset}.
     */
    loadResourceAsAudioTrackAsset(resource: DynamicResource, onSuccess: (audioTrackAsset: AudioTrackAsset) => void, onFailure: (errorMessage: string) => void): void;
    loadResourceAsString(resource: DynamicResource, onSuccess: (string: string) => void, onFailure: (errorMessage: string) => void): void;
    loadResourceAsBytes(resource: DynamicResource, onSuccess: (bytes: Uint8Array) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Download the file from the {@link DynamicResource} object and loads the resource as a {@link GaussianSplattingAsset}.
     * Supported file formats: .ply, .gs, .gsaf, .gfrosting
     */
    loadResourceAsGaussianSplattingAsset(resource: DynamicResource, onSuccess: (gaussianSplattingAsset: GaussianSplattingAsset) => void, onFailure: (errorMessage: string) => void): void;
    /**
     * Uploads a {@link Texture} as an image and returns a {@link DynamicResource} on success.
     * Use {@link ImageUploadOptions} to configure the compression method, quality, and alpha channel inclusion.
     */
    uploadImage(resource: Texture, onSuccess: (resource: DynamicResource) => void, onFailure: (errorMessage: string) => void, uploadOptions?: ImageUploadOptions): void;
}

/**
 * Provides a reference to a remote asset (i.e. assets outside of the Lens size limit) that can be downloaded at runtime using script.
 * 
 * @see [Remote Assets](/lens-studio/features/lens-cloud/remote-assets-overview)
 */
declare class RemoteReferenceAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Request to download the Remote Reference Asset.
     */
    downloadAsset(onDownloaded: (asset: Asset) => void, onFailed: () => void): void;
}

/**
 * Represents a JavaScript or TypeScript script that can be used to add logic in your Lens.
 */
declare class ScriptAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * TrackingStatus signals changes in data availability for the tracked object.
 */
declare class TrackingStatus extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Event fired when the tracking is either started or stopped.
     * 
     * @readonly
     */
    onChange: event1<boolean, void>;
    /**
     * Event fired when the tracked object is found.
     * 
     * @readonly
     */
    onStarted: event0<void>;
    /**
     * Event fired when the tracked object is lost or the tracking is suspended
     * (e.g. when the component is disabled or destroyed).
     * 
     * @readonly
     */
    onStopped: event0<void>;
}

/**
 * The scope, such as the texture it should track against, in which a tracker, such as {@link FaceMaskVisual}, {@link EyeColorVisual}, {@link BodyDepthTextureProvider}, should be applied.
 */
declare class TrackingScope extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides a {@link Texture} to do face tracking on for entities like {@link Head}, {@link FaceStretch}, and {@link FaceMesh}.
 */
declare class TextureTrackingScope extends TrackingScope {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The texture on which tracking should be done.
     */
    texture: Texture;
}

/**
 * The face that a tracker should use. Allows you to to apply the same face index to a group of Components.
 */
declare class FaceTrackingScope extends TrackingScope {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The face to track. The first face is 0, the second is 1, and so on.
     */
    faceIndex: number;
    /**
     * The parent context that this Tracking Scope is identifying the face from.
     */
    parentScope: TextureTrackingScope;
}

/**
 * Defines a VFX to use with {@link VFXComponent}.
 * @see [VFX](/lens-studio/learning-lens-studio/graphics/particles/vfx-editor/introduction-and-concepts) guide.
 */
declare class VFXAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    [index: string]: any;
    /**
     * Clones the VFX asset and returns a copy.
     */
    clone(): VFXAsset;
    /**
     * Controls properties for the VFXAsset. Any scriptable properties on a VFX Graph will automatically become properties of this Properties class. For example, if the VFX Graph defines a variable named `baseColor`, a script would be able to access that property as `vfxAsset.properties.baseColor`.
     * 
     * @readonly
 * @noNode
     */
    properties: Properties;
    /**
     * Returns a PassWrapper containing all simulation passes in a VFX asset
     * 
     * @readonly
     */
    simulations: PassWrappers;
    /**
     * Returns a PassWrapper containing all feedback passes in a VFX asset
     * 
     * @readonly
     */
    feedbacks: PassWrappers;
    /**
     * Returns a PassWrapper containing all output passes in a VFX asset
     * 
     * @readonly
     */
    outputs: PassWrappers;
    /**
     * When `Mesh` is selected as a Geometry Type in the VFX Output Container, the system will render particles using this mesh, otherwise particles will be rendered as quads. Refer to the Custom Mesh Emitter built-in asset as a starting point when working with custom meshes.
     */
    mesh: RenderMesh;
    /**
     * A multiplier on the delta time for this VFX Asset. If `useFixedDeltaTime` is true, `Component Time += fixedDeltaTime * playRate`, otherwise `Component Time += fixedDeltaTime * playRate`.
     */
    playRate: number;
    /**
     * Toggles the use of `fixedDeltaTime` for Component Time accumulation and particle simulation. When false, the real delta time of the Lens is used.
     */
    useFixedDeltaTime: boolean;
    /**
     * When `useFixedDeltaTime` is true, this value is used for Delta Time for the asset.
     */
    fixedDeltaTime: number;
}

declare class Properties extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Similar to {@link Pass}, except used by {@link VFXAsset}.
 */
declare class PassWrapper extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The name of the pass wrapper.
     */
    name: string;
    /**
     * Whether the material renders on both sides of a mesh face.
     */
    twoSided: boolean;
    /**
     * Enables depth-sorting.
     */
    depthTest: boolean;
    /**
     * Enables writing pixels to the depth buffer.
     */
    depthWrite: boolean;
    /**
     * Controls the masking of color channels with a vec4b representing each channel with a boolean.
     */
    colorMask: vec4b;
    /**
     * Line width used for rendering.
     */
    lineWidth: number;
    /**
     * The cull mode used for rendering.
     */
    cullMode: CullMode;
    /**
     * Changes the position that each polygon gets drawn.
     */
    polygonOffset: vec2;
    /**
     * The blend mode used for rendering.
     */
    blendMode: BlendMode;
    /**
     * Number of times the pass will be rendered. Useful with the Instance ID node in Material Editor.
     */
    instanceCount: number;
    /**
     * A proxy class that provides the access to the properties of the passes under the hood of {@link VFXAsset}. PassWrapper.samplers property which is tied to the Pass.samplers one. For example:
     * ```js
     * pass.samplers.texture_name.Fitering = FilteringMode.Nearest
     * ```
     * 
     * @readonly
     */
    samplers: SamplerWrappers;
}

/**
 * Allows for retrieval of a collection of Pass objects used by VFXAsset
 */
declare class PassWrappers extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of Pass objects
     * 
     * @readonly
     */
    allPasses: PassWrapper[];
}

/**
 * Access to a Depth Stencil Render Target that can output depth and stencil values from a Camera in Depth24/Stencil8 format.
 */
declare class DepthStencilRenderTargetProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The ouput resolution of the current render target.
     */
    outputResolution: number;
    /**
     * Custom render target resolution, this property will use if the "outputResolution" property is a "Custom".
     */
    resolution: vec2;
    /**
     * Enable mipmaps on the current render target.
     */
    mipmapsEnabled: boolean;
    /**
     * Depth buffer clear option.  "None" - depth buffer clear operation will be skipped.  "CustomValue" - depth buffer will be cleared by "clearDepthValue" property value. "CustomTexture" - depth buffer will be cleared by texture from "inputTexture" property, if "inputTexture" is null then depth clear option will fallback to "CustomValue" mode.
     */
    depthClearOption: DepthClearOption;
    /**
     * Float value in range [0.0..1.0] used in depth buffer clear operation in "CustomValue" mode. The initial value is 1.0.
     */
    clearDepthValue: number;
    /**
     * Stencil buffer clear option.  "None" - stencil buffer clear operation will be skipped.  "CustomValue" - stencil buffer will be cleared by "clearStencilValue" property value. "CustomTexture" - stencil buffer will be cleared by texture from "maskTexture" property, if "maskTexture" is null then the stencil clear option will fallback to "CustomValue" mode.
     */
    stencilClearOption: StencilClearOption;
    /**
     * Unsigned int value in range [0..0xFF] used in stencil buffer clear operation in "CustomValue" mode. The initial value is 0.
     */
    clearStencilValue: number;
    /**
     * Texture with Depth24_Stencil8 format. Depth24 part used in depth clear operation in "CustomTexture" mode.
     */
    inputTexture: Texture;
    /**
     * Texture with Depth24_Stencil8 format. Stencil8 part used in stencil clear operation in "CustomTexture" mode.
     */
    maskTexture: Texture;
}

declare class CameraTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Register a callback to be called whenever a new frame is received from the camera. On spectacles, the render rate is different (and typically higher) than the camera update rate, so this callback can be used to know when a new camera frame is available. This allows you to only do additional processing (like run a SnapML model) when a new frame is available instead of doing redundant work on each scene update event.
     * 
     * @readonly
 * @exposesUserData
 * @snapOS
     */
    onNewFrame: event1<CameraFrame, void>;
}

/**
 * An entity which provided metadata about the current camera image provided by CameraTextureProvider. Modeled after VideoFrame web API.
 * 
 * @exposesUserData
 * @snapOS
 */
declare class CameraFrame extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The timestamp (in seconds) in which this frame was received.
     * 
     * @readonly
 * @exposesUserData
 * @snapOS
     */
    timestampSeconds: number;
}

/**
 * Texture Provider giving the camera texture that is the opposite of {@link CameraTextureProvider}. The provider will have {@link LoadStatus.Loading} until the camera feed is available. On some devices it will never be available. Use {@link DeviceInfoSystem#supportsDualCamera} to check the current device.
 * 
 * For example, if the `CameraTextureProvider` is providing the rear camera feed, `ReverseCameraTextureProvider` would provide the front camera feed.
 */
declare class ReverseCameraTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Texture providing the current Render Target being rendered.
 */
declare class ScreenTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Base class for Texture Providers based on selectable media.
 */
declare class MediaPickerTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Requests SDK to show media picking UI.
     */
    showMediaPicker(): void;
    /**
     * Requests SDK to hide media picking UI.
     */
    hideMediaPicker(): void;
    /**
     * Requests face mesh and sets a callback to fire when it's ready.
     */
    setFaceMeshReadyCallback(callback: () => void): void;
    /**
     * Sets a callback to fire when a file is picked through media picking UI.
     */
    setFilePickedCallback(callback: () => void): void;
    /**
     * If set to true, MediaPickerTextureProvider will request media picker UI automatically during loading.
     */
    autoShowMediaPicker: boolean;
    /**
     * Returns underlying TextureProvider for the last selected media file. If the last media file was not image, null is returned.
     * 
     * @readonly
     */
    imageControl: TextureProvider;
    /**
     * If set to true, MediaPickerTextureProvider will provide a proper texture transform for image with face(s), that will "zoom" UVs to the first found face on the image.
     */
    cropFace: boolean;
    /**
     * Returns underlying TextureProvider for the last selected media file. If the last media file was not image with at least one face, null is returned.
     */
    faceImageControl: FaceTextureProvider;
    /**
     * Returns underlying VideoTextureProvider for the last selected media file. If the last media file was not video, null is returned.
     * 
     * @readonly
     */
    videoControl: VideoTextureProvider;
    /**
     * Returns true if an image is selected, or a video file has been loaded and is ready for decoding, false otherwise.
     * 
     * @readonly
     */
    isContentReady: boolean;
    /**
     * MediaPickerTextureProvider will allow users to select video files through media picker UI.
     */
    isVideoPickingEnabled: boolean;
    /**
     * MediaPickerTextureProvider will allow users to select all images files through media picker UI.
     */
    isImagePickingEnabled: boolean;
    /**
     * MediaPickerTextureProvider will allow users to select only images with detected faces through media picker UI. See also "cropFace" option.
     */
    isFaceImagePickingEnabled: boolean;
    /**
     * @deprecated Use {@link MediaPickerTextureProvider#faceImageControl} to access the face area.
     * 
     * @deprecated
 * @readonly
     */
    faceRect: vec4;
}

/**
 * Controls an image picker texture and UI.
 * Can be accessed through {@link Texture | Texture.control} on an Image Picker texture.
 * For more information, see the [Image Picker Texture](/lens-studio/4.55.1/references/guides/lens-features/tracking/face/face-effects/face-image-picker-texture) guide.
 * @deprecated Use {@link MediaPickerTextureProvider} instead
 * 
 * @deprecated
 */
declare class ImagePickerTextureProvider extends MediaPickerTextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Shows the image picker UI.
     * 
     * @deprecated
     */
    showImagePicker(): void;
    /**
     * Hides the image picker UI.
     * 
     * @deprecated
     */
    hideImagePicker(): void;
    /**
     * Binds a callback function for when the user selects or changes an image from the picker.
     * 
     * @deprecated
     */
    setImageChangedCallback(callback: () => void): void;
    /**
     * If enabled, the image picker UI will be shown automatically when the Lens starts.
     * 
     * @deprecated
     */
    autoShowImagePicker: boolean;
}

/**
 * Controls a camera texture resource.
 * Can be accessed through {@link Texture.control} on a Camera texture.
 * For more information, see the [Camera and Layers](/lens-studio/lens-studio-workflow/scene-set-up/camera) guide.
 */
declare class RenderTargetProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The texture type of the render target.
     */
    textureType: RenderTargetProvider.TextureType;
    /**
     * When `useScreenResolution` is false, controls the horizontal and vertical resolution of the Render Target.
     */
    resolution: vec2;
    /**
     * Controls the resolution source for this render target.
     */
    outputResolution: RenderTargetProvider.OutputResolution;
    /**
     * When Use Screen Resolution is enabled, this scales the render target resolution relative to the device resolution.
     */
    resolutionScale: number;
    /**
     * The anti-aliasing technique applied on the render target.
     */
    antialiasingMode: RenderTargetProvider.AntialiasingMode;
    /**
     * The quality of the anti-aliasing technique applied on the render target.
     */
    antialiasingQuality: RenderTargetProvider.AntialiasingQuality;
    /**
     * Sets the clear color option.
     */
    clearColorOption: ClearColorOption;
    /**
     * When `clearColorEnabled` is true and `inputTexture` is null, this color is used to clear this RenderTarget the first time it is drawn to each frame.
     */
    clearColor: vec4;
    /**
     * When `clearColorEnabled` is true, this texture is used to clear this RenderTarget the first time it is drawn to each frame.
     * If this texture is null, `clearColor` will be used instead.
     */
    inputTexture: Texture;
    /**
     * How MSAA should be applied on the render target.
     */
    msaaStrategy: RenderTargetProvider.MSAAStrategy;
    /**
     * Controls the depth buffer usage strategy for this render target.
     */
    depthBufferUsage: RenderTargetProvider.DepthBufferUsage;
    /**
     * sliceCount refers to the number of slices in a texture array or 3D texture.
     */
    sliceCount: number;
    /**
     * If true, the Render Target's resolution will match the device's screen resolution.
     */
    useScreenResolution: boolean;
    /**
     * If true, mipmaps will be generated for this render target.
     */
    mipmapsEnabled: boolean;
    /**
     * If true, the depth buffer will be cleared on this RenderTarget the first time it is drawn to each frame.
     */
    clearDepthEnabled: boolean;
    /**
     * If true, the color on this RenderTarget will be cleared the first time it is drawn to each frame.
     * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
     * 
     * @deprecated Use {@link RenderTargetProvider#clearColorOption} instead.
     * 
     * @deprecated
     */
    clearColorEnabled: boolean;
}

/**
 * Provides a texture that can be written to or read from. Can be accessed using Texture.control on a Procedural Texture.
 */
declare class ProceduralTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new, blank Texture Provider using the passed in dimensions and Colorspace. The ProceduralTextureProvider can be accessed through the control property on the returned texture.
     * @deprecated Use {@link ProceduralTextureProvider#createWithFormat}
     * 
     * @deprecated
     */
    static create(width: number, height: number, colorspace: Colorspace): Texture;
    /**
     * Creates a new provider stored with the specified`format`.
     */
    static createWithFormat(width: number, height: number, format: TextureFormat): Texture;
    /**
     * Creates a new Procedural Texture based on the passed in texture. The ProceduralTextureProvider can be accessed through the control property on the returned texture.
     */
    static createFromTexture(texture: Texture): Texture;
    /**
     *  Sets a region of pixels on the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Uses the values of the passed in Uint8Array data, which should be integer values ranging from 0 to 255.
     * 
     *  When used with `createWithFormat`, use `TextureFormat.RGBA8Unorm`. This is the corresponding format for Uint8Array.
     */
    setPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void;
    /**
     * Returns a Uint8 array containing the pixel values in a region of the texture. The region starts at the pixel coordinate x, y, and extends rightward by width and upward by height. Values returned are integers ranging from 0 to 255
     * 
     * @exposesUserData
     */
    getPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void;
    /**
     * Returns a Float32 array containing the pixel values in a region of the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height.
     * 
     * @exposesUserData
     */
    getPixelsFloat32(x: number, y: number, width: number, height: number, data: Float32Array): void;
    /**
     * Sets a region of pixels on the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Uses the values of the passed in Float32Array data.
     */
    setPixelsFloat32(x: number, y: number, width: number, height: number, data: Float32Array): void;
}

declare class DeviceDependentBinFileProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used to track images in the camera.
 * 
 * @remarks Moves the containing object's transform to match the detected image.
 * 
 * @see [Marker Tracking](/lens-studio/features/ar-tracking/world/marker-tracking) guide.
 */
declare class MarkerTrackingComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns whether the marker image is currently being tracked in camera.
     */
    isTracking(): boolean;
    /**
     * The marker asset describing the tracking target.
     */
    marker: MarkerAsset;
    /**
     * If true, child objects of this Component's {@link SceneObject} will be disabled when the marker image is not being tracked.
     */
    autoEnableWhenTracking: boolean;
    /**
     * A function that gets called when marker tracking begins.
     */
    onMarkerFound: () => void;
    /**
     * A function that gets called when marker tracking is lost.
     */
    onMarkerLost: () => void;
}

/**
 * Represents a texture to be tracked with {@link MarkerTrackingComponent}.
 * 
 * @see [Marker Tracking](/lens-studio/features/ar-tracking/world/marker-tracking) guide.
 */
declare class MarkerAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the aspect ratio (width / height) of the texture used by the marker asset.
     */
    getAspectRatio(): number;
    /**
     * The height of the marker asset in real-life centimeters. Used to provide accurate transformation.
     * A {@link MarkerTrackingComponent} using this MarkerAsset will be scaled so that
     * one unit in the SceneObject's local space is equal to one centimeter in real life.
     */
    height: number;
}

/**
 * Base class for marker providers.
 * For more information, see the [Marker Tracking](/lens-studio/features/ar-tracking/world/marker-tracking) guide.
 */
declare class MarkerProvider extends Provider {
    
    /** @hidden */
    protected constructor()
    
}

declare class NaturalFeatureMarkerProvider extends MarkerProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides an image marker based on an imported image file.
 * For more information, see the [Marker Tracking](/lens-studio/features/ar-tracking/world/marker-tracking) guide.
 */
declare class FileBasedMarkerProvider extends NaturalFeatureMarkerProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides a marker for tracking Snapcodes.
 * For more information, see the [Marker Tracking](/lens-studio/features/ar-tracking/world/marker-tracking) guide.
 */
declare class SnapcodeMarkerProvider extends MarkerProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used to describe a set of layers that an object belongs to or interacts with.
 * 
 * @see {@link SceneObject} `layer` property
 * @see {@link Camera} `renderLayer` property
 * @see {@link LightSource} `renderLayer` property.
 */
declare class LayerSet {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a new LayerSet based on the passed in number.
     */
    static fromNumber(layerId: number): LayerSet;
    /**
     * Creates a new LayerSet that is guaranteed to be empty and not intersect existing layers. This bypasses the normal 32 layer limit in Studio, allowing for around 65,000 unique layers.
     */
    static makeUnique(): LayerSet;
    /**
     * Returns a new LayerSet combining this LayerSet and `other`.
     */
    union(other: LayerSet): LayerSet;
    /**
     * Returns a new LayerSet that only contains layers present in both this LayerSet and `other`.
     */
    intersect(other: LayerSet): LayerSet;
    /**
     * Returns a new LayerSet that contains layers present in this LayerSet but not present in `other`.
     */
    except(other: LayerSet): LayerSet;
    /**
     * Returns true if all layers in the `other` LayerSet are also present in this one.
     */
    contains(other: LayerSet): boolean;
    /**
     * Returns a string representation of this LayerSet.
     */
    toString(): string;
    /**
     * Returns true if this LayerSet contains no layers.
     */
    isEmpty(): boolean;
    numbers: number[];
}

/**
 * Class for storing and retrieving data based on keys.
 * Used by {@link PersistentStorageSystem}.
 * For more information, see the [Persistent Storage guide](/lens-studio/features/persistent-cloud-storage/persistent-storage).
 */
declare class GeneralDataStore extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a General Data Store.
     */
    static create(): GeneralDataStore;
    getUint8Array(key: string): Uint8Array;
    getInt8Array(key: string): Int8Array;
    getUint16Array(key: string): Uint16Array;
    getInt16Array(key: string): Int16Array;
    getUint32Array(key: string): Uint32Array;
    getInt32Array(key: string): Int32Array;
    getFloat32Array(key: string): Float32Array;
    getFloat64Array(key: string): Float64Array;
    /**
     * Returns an integer number stored under the given key, or 0 if none exists.
     */
    getInt(key: string): number;
    /**
     * Returns a double precision floating point number stored under the given key, or 0 if none exists.
     */
    getDouble(key: string): number;
    /**
     * Returns a boolean value stored under the given key, or false if none exists.
     */
    getBool(key: string): boolean;
    /**
     * Returns a string value stored under the given key, or empty string if none exists.
     */
    getString(key: string): string;
    /**
     * Returns a floating point value stored under the given key, or 0 if none exists.
     */
    getFloat(key: string): number;
    /**
     * Returns a vec2 value stored under the given key, or a default vec2 if none exists.
     */
    getVec2(key: string): vec2;
    /**
     * Returns a vec3 value stored under the given key, or a default vec3 if none exists.
     */
    getVec3(key: string): vec3;
    /**
     * Returns a vec4 value stored under the given key, or a default vec4 if none exists.
     */
    getVec4(key: string): vec4;
    /**
     * Returns a mat2 value stored under the given key, or a default mat2 if none exists.
     */
    getMat2(key: string): mat2;
    /**
     * Stores a mat3 value under the given key.
     */
    getMat3(key: string): mat3;
    /**
     * Returns a mat4 value stored under the given key, or a default mat4 if none exists.
     */
    getMat4(key: string): mat4;
    /**
     * Returns a quat value stored under the given key, or a default quat if none exists.
     */
    getQuat(key: string): quat;
    /**
     * Returns an integer array being stored under the given key, or an empty array if none exists.
     */
    getIntArray(key: string): number[];
    /**
     * Returns a floating point array being stored under the given key, or an empty array if none exists.
     */
    getFloatArray(key: string): number[];
    /**
     * Returns a boolean array being stored under the given key, or an empty array if none exists.
     */
    getBoolArray(key: string): boolean[];
    /**
     * Returns a string array being stored under the given key, or an empty array if none exists.
     */
    getStringArray(key: string): string[];
    /**
     * Returns a vec2 array being stored under the given key, or an empty array if none exists.
     */
    getVec2Array(key: string): vec2[];
    /**
     * Returns a vec3 array being stored under the given key, or an empty array if none exists.
     */
    getVec3Array(key: string): vec3[];
    /**
     * Returns a vec4 array being stored under the given key, or an empty array if none exists.
     */
    getVec4Array(key: string): vec4[];
    /**
     * Returns a mat2 array being stored under the given key, or an empty array if none exists.
     */
    getMat2Array(key: string): mat2[];
    /**
     * Returns a mat3 array being stored under the given key, or an empty array if none exists.
     */
    getMat3Array(key: string): mat3[];
    /**
     * Returns a mat4 array being stored under the given key, or an empty array if none exists.
     */
    getMat4Array(key: string): mat4[];
    /**
     * Returns a quat array being stored under the given key, or an empty array if none exists.
     */
    getQuatArray(key: string): quat[];
    putInt8Array(key: string, value: Int8Array): void;
    putUint8Array(key: string, value: Uint8Array): void;
    putUint16Array(key: string, value: Uint16Array): void;
    putInt16Array(key: string, value: Int16Array): void;
    putUint32Array(key: string, value: Uint32Array): void;
    putInt32Array(key: string, value: Int32Array): void;
    putFloat32Array(key: string, value: Float32Array): void;
    putFloat64Array(key: string, value: Float64Array): void;
    /**
     * Stores an integer number value under the given key.
     */
    putInt(key: string, value: number): void;
    /**
     * Stores a double precision floating point number under the given key.
     */
    putDouble(key: string, value: number): void;
    /**
     * Stores a boolean value under the given key.
     */
    putBool(key: string, value: boolean): void;
    /**
     * Stores a string value under the given key.
     */
    putString(key: string, value: string): void;
    /**
     * Stores a floating point value under the given key.
     */
    putFloat(key: string, value: number): void;
    /**
     * Stores a vec2 value under the given key.
     */
    putVec2(key: string, value: vec2): void;
    /**
     * Stores a vec3 value under the given key.
     */
    putVec3(key: string, value: vec3): void;
    /**
     * Stores a vec4 value under the given key.
     */
    putVec4(key: string, value: vec4): void;
    /**
     * Stores a mat2 value under the given key.
     */
    putMat2(key: string, value: mat2): void;
    /**
     * Stores a mat3 value under the given key.
     */
    putMat3(key: string, value: mat3): void;
    /**
     * Stores a mat4 value under the given key.
     */
    putMat4(key: string, value: mat4): void;
    /**
     * Stores a quat value under the given key.
     */
    putQuat(key: string, value: quat): void;
    /**
     * Stores an integer array under the given key.
     */
    putIntArray(key: string, value: number[]): void;
    /**
     * Stores a floating point array under the given key.
     */
    putFloatArray(key: string, value: number[]): void;
    /**
     * Stores a boolean array under the given key.
     */
    putBoolArray(key: string, value: boolean[]): void;
    /**
     * Stores a string array under the given key.
     */
    putStringArray(key: string, value: string[]): void;
    /**
     * Stores a vec2 array under the given key.
     */
    putVec2Array(key: string, value: vec2[]): void;
    /**
     * Stores a vec3 array under the given key.
     */
    putVec3Array(key: string, value: vec3[]): void;
    /**
     * Stores a vec4 array under the given key.
     */
    putVec4Array(key: string, value: vec4[]): void;
    /**
     * Stores a mat2 array under the given key.
     */
    putMat2Array(key: string, value: mat2[]): void;
    /**
     * Stores a mat3 array under the given key.
     */
    putMat3Array(key: string, value: mat3[]): void;
    /**
     * Stores a mat4 array under the given key.
     */
    putMat4Array(key: string, value: mat4[]): void;
    /**
     * Stores a quat array under the given key.
     */
    putQuatArray(key: string, value: quat[]): void;
    /**
     * Returns true if a value is being stored under the given key.
     */
    has(key: string): boolean;
    /**
     * Clears all data stored in the General Data Store.
     */
    clear(): void;
    /**
     * Returns the maximum total size allowed, in bytes, of all data stored in this General Data Store.
     */
    getMaxSizeInBytes(): number;
    /**
     * Returns an array with all the keys in the store.
     */
    getAllKeys(): string[];
    /**
     * If `onStoreFull` has been set, this method returns the current total size, in bytes, of all data stored in this General Data Store. Otherwise, `0` is returned.
     */
    getSizeInBytes(): number;
    /**
     * Removes the value being stored under the given key. If no value exists under the key, nothing will happen.
     */
    remove(key: string): void;
    /**
     * Callback function that gets called when the allowed storage limit has been passed.
     * The store won't be saved if it is full, so if this is called make sure to remove data until back under the limit.
     */
    onStoreFull: () => void;
}

declare class RotatedRect extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a RotatedRect object.
     */
    static create(center: vec2, size: vec2, angle: number): RotatedRect;
    /**
     * Returns the description of RotatedRect.
     */
    toString(): string;
    /**
     * The center point (mass center) of RotatedRect.
     */
    center: vec2;
    /**
     * The width and height of RotatedRect.
     */
    size: vec2;
    /**
     * The rotation angle in degrees.
     */
    angle: number;
}

/**
 * A {@link GeneralDataStore} that persists data across multiple Snaps within
 * the same Lens session. Data is retained until a different Lens is opened.
 * Unlike {@link PersistentStorageSystem#store}, this store supports saving
 * procedural assets such as {@link MeshBuilder} meshes and
 * {@link ProceduralTextureProvider} textures. Retrieved via
 * {@link PersistentStorageSystem.sessionStore}.
 */
declare class DataStoreWithScene extends GeneralDataStore {
    
    /** @hidden */
    protected constructor()
    
    saveAsset(asset: Asset, name: string): void;
    hasAsset(name: string): boolean;
    getAsset(name: string, successCallback: (asset: Asset) => void, failureCallback: (error: number, description: string) => void): void;
    removeAsset(name: string): void;
}

/**
 * Provides additional data for the tracked object. For example, with hand tracking, you can figure out whether the tracked hand is the left hand by accessing the `isLeft` property [true/false], as well as the probability of this data through the `isLeftProbability` property [0-1].
 */
declare class ObjectSpecificData extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides additional data for the tracked hand. You can figure out whether the tracked hand is the left hand by accessing the *isLeft* property [true/false], as well as the probability of this data through the  *isLeftProbability*  property [0-1].
 */
declare class HandSpecificData extends ObjectSpecificData {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * @wearableOnly
 */
declare class SpectaclesHandSpecificData extends ObjectSpecificData {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The location of the device.
 */
declare class GeoPosition extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a new GeoPosition.
     */
    static create(): GeoPosition;
    /**
     * Indicates whether the device is able to provide heading information.
     * 
     * > **Spectacles** Not supported, use {@link LocationService#onNorthAlignedOrientationUpdate | onNorthAlignedOrientationUpdate} instead
     * 
     * @readonly
     */
    isHeadingAvailable: boolean;
    /**
     * Represents the direction towards which the device is facing. This value, specified in degrees, indicates how far off from heading true north the device is. 0 degrees represents true north, and the direction is determined clockwise. The recommended alternative to this field is to use {@link LocationService#onNorthAlignedOrientationUpdate | onNorthAlignedOrientationUpdate} which provides more accurate and frequent updates.
     * 
     * > **Spectacles** Not supported, use {@link LocationService#onNorthAlignedOrientationUpdate | onNorthAlignedOrientationUpdate} instead
     * 
     * @readonly
     */
    heading: number;
    /**
     * The position's latitude in decimal degrees.
     */
    latitude: number;
    /**
     * The position's longitude in decimal degrees.
     */
    longitude: number;
    /**
     * Represents the position's elevation from sea level in meters. Value will be zero if not available.
     */
    altitude: number;
    /**
     * The accuracy of the latitude and longitude properties, expressed in meters.
     */
    horizontalAccuracy: number;
    /**
     * The accuracy of the altitude property, expressed in meters.
     */
    verticalAccuracy: number;
    /**
     * Represents the date and time when the location coordinates were acquired.
     */
    timestamp: Date;
    /**
     * Represents the location source of the provided location
     * 
     * | Value | Description |
     * | ----- | ----------- |
     * | NOT_AVAILABLE | Unknown source. Non-wearables users will always receive this option |
     * | GNSS_RECEIVER | Uses built-in antenna to acquire a location. Not expected to work indoors or in challenging scenarios where reception is poor. |
     * | WIFI_POSITIONING_SYSTEM | Provides rough location in indoor and challenging scenarios. Useful for urban environments with no GPS reception.
     * | FUSED_LOCATION | Provides a fused location between several location sources. Accuracy is dependent on the accuracy of the sources. Update frequency coincides with rendering rate. Ideal for navigation scenarios. Enable this source by selecting {@link GeoLocationAccuracy#Navigation | Navigation Location Accuracy}.|
     */
    locationSource: string;
}

/**
 * The LocationService allows the user to provide their location to Lens applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
 * 
 * > **Spectacles**: To use location services, users must be logged in and paired with their Snapchat account, and their location permission must be enabled. Users are also expected to be connected to the internet. To access the location API on Spectacles, refer to the [Spectacles Location](/spectacles/about-spectacles-features/apis/location) documentation for examples and extra setup instructions regarding permissions.
 */
declare class LocationService extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Retrieves the device's current location.
     * 
     * @remarks
     * 
     * * `onSuccess`: a callback function that takes a GeoPosition object as its sole input parameter.
     * * `onError`: a callback function that takes a string error message as its sole input parameter.
     * 
     * @exposesUserData
     */
    getCurrentPosition(onSucess: (geoPosition: GeoPosition) => void, onError: (error: string) => void): void;
    /**
     * Event to notify when north aligned orientation data is available to use. Use in combination with {@link GeoLocation.getNorthAlignedHeading} to acquire heading direction.
     * Arguments:
     * * `northAlignedOrientation`: The north-aligned orientation of the device as a quaternion
     * * `headingAccuracy`: The accuracy of the heading, represented by the {@link CompassTrackingData.Accuracy} enum.
     * 
     * @readonly
     */
    onNorthAlignedOrientationUpdate: event2<quat, CompassTrackingData.Accuracy, void>;
    /**
     * The desired accuracy of the provided position.
     */
    accuracy: GeoLocationAccuracy;
}

/**
 * A curve that contains a set of keyframes and can evaluate values at specific timestamps.
 */
declare class AnimationCurve extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create new animation keyframe
     */
    static createKeyFrame(): AnimationKeyFrame;
    /**
     * Creates curve based on CSS easing values.
     */
    static createEasingCurve(startValue: number, endValue: number, x1: number, y1: number, x2: number, y2: number): AnimationCurve;
    /**
     * Create new animation curve.
     */
    static create(): AnimationCurve;
    /**
     * Evaluate value of the curve at specific point.
     */
    evaluate(time: number): number;
    /**
     * Adds keyframe to the curve.
     */
    addKeyframe(frame: AnimationKeyFrame): void;
    /**
     * Remove animation keyframe at specific timestamp. The closest keyframe will be deleted.
     */
    removeKeyFrame(t: number): void;
    /**
     * Get an `AnimationKeyFrame` at the passed in index.
     */
    getKeyFrame(index: number): AnimationKeyFrame;
    /**
     * The number of keyframes in the animation curve.
     * 
     * @readonly
     */
    keyFrameCount: number;
}

/**
 * A keyframe with time and respective value. Could be added to Animation Curve.
 */
declare class AnimationKeyFrame extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Value of the respective timestamp.
     */
    value: number;
    /**
     * Incoming Control Point.
     */
    inWeightPoint: vec2;
    /**
     * Outgoing Control Point.
     */
    outWeightPoint: vec2;
    rightTangentType: TangentType;
    leftTangentType: TangentType;
    weightedMode: WeightedMode;
    /**
     * Timestamp of the keyframe.
     */
    time: number;
}

/**
 * Container for one or more {@link AnimationCurve}s. Can be sampled to drive attributes (e.g. animation, vfx, code etc.)
 * 
 * @remarks
 * When evaluating multiple values, the values are selected from left to right in order. For example, for a {@link vec3} containing `x`,`y`,`z` it will correspond to track index `0`, `1`, `2` from left to right.
 */
declare class AnimationCurveTrack extends AnimationTrack {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create new animation curve track.
     */
    static create(name: string): AnimationCurveTrack;
    /**
     * Retrieves all properties.
     */
    getProperties(): AnimationCurve[];
    /**
     * Retrieves an AnimationCurve associated with the given key.
     */
    getProperty(key: string): AnimationCurve;
    /**
     * Sets an AnimationCurve to a given key.
     */
    setProperty(key: string, curve: AnimationCurve): void;
    /**
     * Returns an array of strings, which are the names of properties associated with the AnimationCurveTrack.
     */
    getPropertyKeys(): string[];
    /**
     * Samples the track at the given time to get some value.
     */
    evaluateNumber(time: number): number;
    /**
     * Samples the track at the given time to get some value. Returns 0 for non-existent channels.
     */
    evaluateVec2(time: number): vec2;
    /**
     * Samples the track at the given time to get some value. Returns 0 for non-existent channels.
     */
    evaluateVec3(time: number): vec3;
    /**
     * Samples the track at the given time to get some value. Returns 0 for non-existent channels.
     */
    evaluateVec4(time: number): vec4;
    /**
     * Samples the track at the given time to get some value. Returns 0 for non-existent channels.
     */
    evaluateRotation(time: number): quat;
}

/**
 * Displays text in the scene.
 * @deprecated Use {@link Text} instead
 * 
 * @deprecated
 */
declare class Label extends SpriteVisual {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the potential width and height of the Label if it were to display the input text.
     * 
     * @deprecated
     */
    measureText(text: string): vec2;
    /**
     * The text displayed by the Label.
     * 
     * @deprecated
     */
    text: string;
    /**
     * The font used to display text.
     * 
     * @deprecated
     */
    fontAsset: Font;
    /**
     * The font size being used.
     * 
     * @deprecated
     */
    size: number;
    /**
     * The color used for drawing text.
     * 
     * @deprecated
     */
    textColor: vec4;
    /**
     * If enabled, adds a dropshadow to the text.
     * 
     * @deprecated
     */
    useDropshadow: boolean;
    /**
     * The horizontal and vertical offset used for dropshadow.
     * 
     * @deprecated
     */
    shadowOffset: vec2;
    /**
     * The color used for dropshadow.
     * 
     * @deprecated
     */
    shadowColor: vec4;
    /**
     * If enabled, adds an outline around the text.
     * 
     * @deprecated
     */
    useOutline: boolean;
    /**
     * The strength of the outline effect.
     * 
     * @deprecated
     */
    outlineSize: number;
    /**
     * The color used for the outline effect.
     * 
     * @deprecated
     */
    outlineColor: vec4;
}

type TextVisual = Label;

/**
 * Controls a text rendering texture. Can be accessed through the main rendering pass on a {@link Text} component.
 * The properties here mirror those on Text.
 */
declare class TextProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The text being rendered.
     */
    text: string;
    /**
     * The font used for rendering text.
     */
    fontAsset: Font;
    /**
     * The font size being used.
     */
    size: number;
    /**
     * The color for rendering text.
     */
    textColor: vec4;
    /**
     * If enabled, adds a dropshadow to the text.
     */
    useDropshadow: boolean;
    /**
     * The horizontal and vertical offset used for dropshadow.
     */
    shadowOffset: vec2;
    /**
     * The color used for dropshadow.
     */
    shadowColor: vec4;
    /**
     * If enabled, renders an outline around the text.
     */
    useOutline: boolean;
    /**
     * The strength of the outline effect.
     */
    outlineSize: number;
    /**
     * The color used for the outline effect.
     */
    outlineColor: vec4;
}

/**
 * A font asset used for rendering text.
 * 
 * @see {@link Text}.
 * @see [Text](/lens-studio/features/text/2d-text) guide.
 */
declare class Font extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Groups multiple Font assets into a single family, mapping each to a style (weight + italic).
 * 
 * @see {@link Text}.
 * @see {@link Font}.
 */
declare class FontFamily extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new, empty FontFamily asset.
     */
    static create(): FontFamily;
    /**
     * The Font asset assigned to the Thin (weight 100) style slot.
     */
    thin: Font;
    /**
     * The Font asset assigned to the Thin Italic (weight 100, italic) style slot.
     */
    thinItalic: Font;
    /**
     * The Font asset assigned to the ExtraLight (weight 200) style slot.
     */
    extraLight: Font;
    /**
     * The Font asset assigned to the ExtraLight Italic (weight 200, italic) style slot.
     */
    extraLightItalic: Font;
    /**
     * The Font asset assigned to the Light (weight 300) style slot.
     */
    light: Font;
    /**
     * The Font asset assigned to the Light Italic (weight 300, italic) style slot.
     */
    lightItalic: Font;
    /**
     * The Font asset assigned to the Regular (weight 400) style slot.
     */
    regular: Font;
    /**
     * The Font asset assigned to the Regular Italic (weight 400, italic) style slot.
     */
    regularItalic: Font;
    /**
     * The Font asset assigned to the Medium (weight 500) style slot.
     */
    medium: Font;
    /**
     * The Font asset assigned to the Medium Italic (weight 500, italic) style slot.
     */
    mediumItalic: Font;
    /**
     * The Font asset assigned to the SemiBold (weight 600) style slot.
     */
    semiBold: Font;
    /**
     * The Font asset assigned to the SemiBold Italic (weight 600, italic) style slot.
     */
    semiBoldItalic: Font;
    /**
     * The Font asset assigned to the Bold (weight 700) style slot.
     */
    bold: Font;
    /**
     * The Font asset assigned to the Bold Italic (weight 700, italic) style slot.
     */
    boldItalic: Font;
    /**
     * The Font asset assigned to the ExtraBold (weight 800) style slot.
     */
    extraBold: Font;
    /**
     * The Font asset assigned to the ExtraBold Italic (weight 800, italic) style slot.
     */
    extraBoldItalic: Font;
    /**
     * The Font asset assigned to the Heavy (weight 900) style slot.
     */
    heavy: Font;
    /**
     * The Font asset assigned to the Heavy Italic (weight 900, italic) style slot.
     */
    heavyItalic: Font;
    /**
     * The full list of font entries in this family. Setting this property replaces all entries.
     */
    entries: FontFamilyEntry[];
    familyName: string;
}

/**
 * An ordered collection of Font and FontFamily assets, allowing a Text component to access multiple fonts and font families.
 * 
 * @see {@link Text}.
 * @see {@link Font}.
 * @see {@link FontFamily}.
 */
declare class FontCollection extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new, empty FontCollection asset.
     */
    static create(): FontCollection;
    /**
     * The full list of entries in this collection. Setting this property replaces all entries.
     */
    entries: FontCollectionEntry[];
}

/**
 * Allows {@link SceneObject} to be tracked in a Connected Lens Experience.
 * 
 * @remarks
 * Creates Colocated Connected Lenses experiences by enabling the creation and tracking of a shared space which can be used to place several users in the same coordinate frame. This shared space will be made available and can be tracked by any friend you invite to join your session via Snapcode. Users are expected to be located in the same room when using the colocated feature. This component needs to be attached to the camera.
 * 
 * @see [Connected Lenses Overview](/lens-studio/features/connected-lenses/connected-lenses-overview#remote-and-colocated)
 */
declare class ColocatedTrackingComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Joins an existing session, retrieving the shared space that the colocated session initiator just created. Throws an exception if a join or build operation is in progress or if a shared space is already present.
     */
    join(session: MultiplayerSession): void;
    /**
     * Starts the shared space building process locally in the session initiator's device.
     * 
     * If a session is provided, the shared space is placed into the session after building has completed, which is required for Colocated experiences running on mobile devices. When running the experience in Lens Studio Preview or solo mode the session is not required.
     * 
     * Throws an exception if a join or build operation is in progress or if a map is already present.
     */
    startBuilding(session: MultiplayerSession): void;
    /**
     * Indicates whether a shared space can be built on this device. Colocated Tracking is available on devices with ARKit/ARCore in the rear camera. This flag should be checked before attempting to build or join a session. If it is false, you should inform users: "Sorry, your device does not support shared AR experiences."
     * 
     * @readonly
     */
    canBuild: boolean;
    /**
     * Indicates whether a shared space is present and ready to be tracked.
     * 
     * @readonly
     */
    canTrack: boolean;
    /**
     * Indicates whether a shared space building operation is in progress. Once the flag is false, the shared space still needs to be shared. Use `onTrackingAvailable` to determine when your space has been shared.
     * 
     * @readonly
     */
    isBuilding: boolean;
    /**
     * Indicates whether a session joining operation is in progress.
     * 
     * @readonly
     */
    isJoining: boolean;
    /**
     * Indicates whether a shared space is actively being tracked. This value will be true while tracking is active, either with or without the shared space in view. This property matches the equivalent one in `MarkerTrackingComponent`.
     * 
     * @readonly
     */
    isTracking: boolean;
    /**
     * Provides the shared space building progress expressed in values 0-1. These values can be used to populate a progress bar. Once this value has reached 1, the colocated tracking component attempts to share the space which the user created.
     * 
     * @readonly
     */
    buildingProgress: number;
    /**
     * Event fired when the building operation fails (for example, sharing your space failed). Once `onTrackingAvailable` event is triggered, this event will not be triggered anymore.
     * 
     * @readonly
     */
    onBuildFailed: event0<void>;
    /**
     * Event fired when a shared space starts being actively tracked. This property is an analogue of the `onMarkerFound` property in `MarkerTrackingComponent`.
     * 
     * @readonly
     */
    onFound: event0<void>;
    /**
     * Event fired when a join operation completes but no shared space was found in the session.
     * 
     * @readonly
     */
    onJoinFailed: event0<void>;
    /**
     * Event fired when a shared space stops being actively tracked. This property is an analogue of the `onMarkerLost` property in `MarkerTrackingComponent`.
     * 
     * @readonly
     */
    onLost: event0<void>;
    /**
     * Event fired when a shared space has been shared or received and the device can attempt to start tracking.  If this event is not being triggered for a long period, the process will time out and `onBuildFailed` event will be triggered.
     * 
     * @readonly
     */
    onTrackingAvailable: event0<void>;
}

declare class ColocatedLandmarksRenderObjectProviderBase extends RenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Not usable from JS. Accessed via the Colocated Landmarks 2D Mesh resource. Contains the 2D keypoints when creating a Colocated map. Expanded by the material provided with template.
 */
declare class ColocatedLandmarks2DRenderObjectProvider extends ColocatedLandmarksRenderObjectProviderBase {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Not usable from JS. Accessed via the Colocated Landmarks 3D Mesh resource. Contains the 3D landmarks when creating a Colocated map. Expanded by the material provided with template.
 */
declare class ColocatedLandmarks3DRenderObjectProvider extends ColocatedLandmarksRenderObjectProviderBase {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides a frame of reference in which to localize objects to the real world. Use with {@link LocatedAtComponent}.
 */
declare class LocationAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Deserialize the provided serialized LocationAsset.
     * 
     * @exposesUserData
 * @snapOS
     */
    static fromSerialized(serialized: string): LocationAsset;
    /**
     * Get an {@link Anchor} based on the given GPS coordinate.
     */
    static getGeoAnchoredPosition(longitude: number, latitude: number): Anchor;
    /**
     * Gets nearby LocationAsset tiles, where each argument represents the x,y,z position relative to the current LocationAsset.
     */
    static getNearby(xOffset: number, yOffset: number, zoomOffset: number): LocationAsset;
    /**
     * Get a Proxy LocationAsset with the proxyId embedded in the locationId. proxyId must not be null, must start with an alpha char, and consist only of alphanumerics or ".".
     */
    static getProxy(proxyId: string): LocationAsset;
    /**
     * Gets the origin position of the `LocationAsset`.
     */
    static getAROrigin(): LocationAsset;
    /**
     * Serialize the LocationAsset to a string representation.
     * 
     * @exposesUserData
 * @snapOS
     */
    toSerialized(): string;
    /**
     * Returns the `LocationAsset` Tile that is  specified by the containing tile and the specified `xOffset`, `yOffset` and `zoomOffset`. When zooming in, index offset is relative to the center. When zooming out or not zooming, index offset is relative to the containing tile.
     */
    adjacentTile(xOffset: number, yOffset: number, zoomOffset: number): LocationAsset;
    /**
     * Gets the Proxy LocationID if the LocationAsset is a proxyLocation; returns null otherwise. This is useful in instances where a callback may return a mix of different location assets, and the creator of the proxy asset has specific handling in mind for particular proxy locations.
     */
    getProxyId(): string | null;
}

/**
 * Provides access to a location's Mesh--such as when working with City Scale AR. Usually used in conjunction with `LocationTextureProvider`.
 */
declare class LocationRenderObjectProvider extends RenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates the location mesh.
     */
    static create(): RenderMesh;
    /**
     * The Render Object's `LocationAsset` nearby tile.
     */
    location: LocationAsset;
    /**
     * @readonly
     */
    onLocationDataDownloaded: event0<void>;
    /**
     * @readonly
     */
    onLocationDataDownloadFailed: event0<void>;
}

/**
 * Used to track a real-world location in a Lens.
 * 
 * @see [Landmarkers](/lens-studio/features/location-ar/guide) guide.
 * @see [Custom Location AR](/lens-studio/features/location-ar/custom-landmarker) guide.
 */
declare class DeviceLocationTrackingComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns whether the location landmarker is currently being tracked.
     */
    isTracking(): boolean;
    /**
     * Returns the user's current LocationProximityStatus. Useful for telling if a user is close enough to the location to track it.
     * 
     * @readonly
     */
    locationProximityStatus: LocationProximityStatus;
    /**
     * Returns the distance, in meters, to the location. If the distance is unavailable, -1 is returned.
     * 
     * @readonly
     */
    distanceToLocation: number;
    /**
     * The location that the tracker is tracking. Useful for dynamically controlling the target location being tracked.
     */
    location: LocationAsset;
    /**
     * A function that gets called when location data is downloaded.
     */
    onLocationDataDownloaded: () => void;
    /**
     * A function that gets called when location data fails to download.
     */
    onLocationDataDownloadFailed: () => void;
    /**
     * A function that gets called when location is found.
     */
    onLocationFound: () => void;
    /**
     * A function that gets called when location is lost. Note this will also happen when the user flips the camera.
     */
    onLocationLost: () => void;
}

/**
 * Enables placing a {@link SceneObject} at a real world location provided by {@link LocationAsset} and specified relative position.
 */
declare class LocatedAtComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates an option object for the `LocatedAtComponent`.
     */
    static createMappingOptions(): MappingOptions;
    /**
     * Creates a mapping session.
     */
    static createMappingSession(options: MappingOptions): MappingSession;
    /**
     * @readonly
     */
    onCanTrack: event0<void>;
    /**
     * @readonly
     */
    onCannotTrack: event0<void>;
    /**
     * @readonly
     */
    onFound: event0<void>;
    /**
     * @readonly
     */
    onLost: event0<void>;
    /**
     * @readonly
     */
    onReady: event0<void>;
    /**
     * @readonly
     */
    onError: event0<void>;
    /**
     * @readonly
     */
    proximityStatus: LocationProximityStatus;
    /**
     * @readonly
     */
    distanceToLocation: number;
    /**
     * The geo anchored position within a LocationAsset that this object should be anchored to.
     */
    position: vec3;
    /**
     * The LocationAsset which contains the position this object should be anchored to.
     */
    location: LocationAsset;
}

/**
 * A component managing and tracking a group of Custom Locations with known relative transforms. The {@link Transform} of the Custom Location Group's {@link SceneObject} is updated when any child is successfully tracked.
 */
declare class CustomLocationGroupComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Provides a hint of the user's position relative to the Custom Location Group's origin and used to optimize tracking when this position is known.
     * 
     * **Note:** You can set this value through the Inspector panel in Lens Studio, or by using this API. When setting by API, it will override any initially trackable location set (child Custom Locations of this group) within Lens Studio. However, the next time the Lens opens again, it will default to what was set in the Inspector panel of Lens Studio.
     */
    hintUserPosition(groupLocalPosition: vec3): void;
    /**
     * Event fired when a child Custom Location successfully tracks for the first time. Event is fired with the ID of the newly tracking Custom Location.
     * 
     * @readonly
     */
    onFound: event1<string, void>;
}

/**
 * Provides access to a location's texture--such as when working with City Scale AR.
 */
declare class LocationTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create location texture.
     */
    static create(): Texture;
    /**
     * The location texture's `LocationAsset` nearby tile.
     */
    location: LocationAsset;
}

/**
 * Instance of location cloud store which has a similar interface as cloud store.
 */
declare class LocationCloudStore extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Gets a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
     */
    getValue(key: string, readOptions: CloudStorageReadOptions, onRetrieved: (key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string, collection: string) => void, onError: (code: string, description: string) => void): void;
    /**
     * Create/update a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
     */
    setValue(key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string, writeOptions: CloudStorageWriteOptions, onSaved: () => void, onError: (code: string, description: string) => void): void;
    /**
     * Deletes a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
     */
    deleteValue(key: string, readOptions: CloudStorageReadOptions, onDeleted: () => void, onError: (code: string, description: string) => void): void;
    /**
     * List values on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
     */
    listValues(listOptions: CloudStorageListOptions, onRetrieved: (values: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string[][], cursor: string, collection: string) => void, onError: (code: string, description: string) => void): void;
}

/**
 * Used to configure LocationCloudStorage module with various options.
 */
declare class LocationCloudStorageOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create options to provide to LocationCloudStorageModule
     */
    static create(): LocationCloudStorageOptions;
    /**
     * Provides a frame of reference in which to localize objects to the real world. Could be any location type.
     */
    location: LocationAsset;
    /**
     * Tag to represent a collection of objects/entities
     */
    collection: string;
    /**
     * Event raised on discovery of nearby cloud stores.
     * 
     * @readonly
     */
    onDiscoveredNearby: event2<LocationAsset, LocationCloudStore, void>;
    /**
     * Error event raised when failing to instantiate a location cloud store associated with that location asset.
     * 
     * @readonly
     */
    onError: event3<LocationAsset, string, string, void>;
}

/**
 * Provides access to location cloud storage depending upon the {@link LocationCloudStorageOptions}.
 */
declare class LocationCloudStorageModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Request discovery of LocationCloudStores based on the user location.
     */
    getNearbyLocationStores(options: LocationCloudStorageOptions): void;
    /**
     * Stores the specified `LocationAsset`.
     */
    storeLocation(location: LocationAsset, onStoredLocation: (persistedLocationId: string) => void, onError: (error: string) => void): void;
    /**
     * Retrieves the specified `LocationAsset`.
     */
    retrieveLocation(persistedLocationId: string, onRetrievedLocation: (location: LocationAsset) => void, onError: (error: string) => void): void;
    /**
     * The active session used in the CloudStorageModule.
     * 
     * @snapOS
     */
    session: MultiplayerSession;
}

/**
 * Used with `MappingSession` to describe the session to be created.
 */
declare class MappingOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Use case for mapping. Default "auto".
     */
    policy: string;
    /**
     * Location hint for mapping. Leave unset or use `LocationAsset.getAROrigin()` for mapping in the current AR session frame. (planned future extension) Use a pre-existing location for incremental mapping.
     */
    location: LocationAsset;
    /**
     * Toggles the acquisition of geolocation metadata during a mapping session.
     */
    geoPositionEnabled: boolean;
    /**
     * Must be present to provide a sharing model for the location. Map storage is private to the user, or shared via ConnectedLensSession on the the module (Spectacles only).
     */
    locationCloudStorageModule: LocationCloudStorageModule;
    /**
     * If All, the checkpoint will contain all seen and tracked areas. If New, it will only contain areas seen and tracked after the MappingSession was constructed.
     * The option is used to define which parts of the map should be included in a checkpoint.
     * For small maps, including only the data visible at an instance, use New. For complete maps encompassing all visited areas, use All.
     * 
     * Default: All
     */
    scope: MappingSession.MappingScope;
}

/**
 * Used with the `LocatedAtComponent` to map the current physical location.
 */
declare class MappingSession extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Stops the current mapping session. No more events will be queued after this is called, although previously queued `onMapped` events may complete.
     */
    cancel(): void;
    /**
     * Require the `onMapped` event to fire. Fires as soon as minimum quality condition is met. Mapping can be left running and can be called multiple times (Spectacles only).
     * @returns A promise that resolves to the LocationAsset when the checkpoint is complete. The `onMapped` callback will also be triggered for backward compatibility.
     */
    checkpoint(): Promise<LocationAsset>;
    /**
     * Minimum conditions for trigerring onMapped via checkpoint() have been met - ie quality >= 1.
     * 
     * @readonly
     */
    canCheckpoint: boolean;
    /**
     * Current throttling of mapping process, i.e. how much effort the device is putting into it. (planned future extension)
     */
    throttling: MappingSession.MappingThrottling;
    /**
     * Capacity used up for a map, goes from 0 to 1, where 1 will automatically trigger a checkpoint. Capacity will not reach 1.0 while quality <1.0. 1.0 is maximum capacity used, implemented per-device and per-mapping-policy.
     * 
     * @readonly
     */
    capacityUsed: number;
    /**
     * Event fired when checkpoint is requested and then once quality is acceptable.
     * @deprecated Use the Promise returned by {@link MappingSession.checkpoint} instead.
     * 
     * @deprecated
 * @readonly
     */
    onMapped: event1<LocationAsset, void>;
    /**
     * @readonly
     */
    onQualityAcceptable: event0<void>;
    /**
     * @readonly
     */
    onCapacityUsedAtLimit: event0<void>;
    /**
     * Progress towards an acceptable map, goes from 0 -> 1.0, where 1.0 is defined as 'Acceptable' given a specific mapping policy.
     * 
     * @readonly
     */
    quality: number;
    wearableMinimumSize: number;
    wearableMaximumSize: number;
    wearableAcceptableRawCapacity: number;
    wearableAllowEarlyCheckpoint: boolean;
    handheldMinimumSize: number;
    handheldMaximumSize: number;
}

/**
 * Gives access to motion data and touch events from an external device to Spectacles, as well as haptic feedback requests from Spectacles to an external device. Currently, the API supports Mobile Controller only, allowing one motion controller to be connected at a time. Developers use the Motion Controller API through the {@link MotionControllerModule} in Lens Studio.
 * 
 * @see [Motion Controller Module](/spectacles/about-spectacles-features/apis/motion-controller) guide.
 * 
 * @wearableOnly
 */
declare class MotionController extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the last known position of the motion controller in world coordinate space. If no motion data has been received, or the motion type is set to `3DOF` or `NoMotion`, this value will be `null`.
     * 
     * @wearableOnly
     */
    getWorldPosition(): vec3;
    /**
     * Returns the last known rotation of the motion controller in world coordinate space. If no motion data has been received or the motion type is set to `NoMotion`, this value will be `null`.
     * 
     * @wearableOnly
     */
    getWorldRotation(): quat;
    /**
     * Invokes haptic feedback on the controller using a preset of options, if supported.
     * 
     * @wearableOnly
     */
    invokeHaptic(hapticRequest: MotionController.HapticRequest): void;
    /**
     * Get the current motion type being provided by the motion controller.
     * 
     * @wearableOnly
     */
    getMotionState(): MotionController.MotionType;
    /**
     * Indicates whether the selected controller is currently available to use. This means that the device is connected, properly set up, and transmitting data.
     * 
     * @wearableOnly
     */
    isControllerAvailable(): boolean;
    /**
     * Returns the size of the touchpad in points. Returns `null` if motion controller is not connected.
     * 
     * @wearableOnly
     */
    getTouchpadPointSize(): vec2 | null;
    /**
     * Returns the size of the touchpad in centimeters. Returns `null` if motion controller is not connected.
     * 
     * @wearableOnly
     */
    getTouchpadPhysicalSize(): vec2 | null;
    /**
     * Returns the tracking quality state of the motion controller, indicating whether the data received from it is accurate or not.
     * 
     * @wearableOnly
     */
    getTrackingQuality(): MotionController.TrackingQuality;
    /**
     * Returns the configuration of the motion controller.
     * 
     * @readonly
 * @wearableOnly
     */
    options: MotionController.MotionControllerOptions;
    /**
     * An event triggered when the selected controller's state changes between being available for use (connected, properly set up, and transmitting data) and otherwise.
     * 
     * @readonly
 * @wearableOnly
     */
    onControllerStateChange: event1<boolean, void>;
    /**
     * Event triggered when the motion type of the controller changes.
     * 
     * @readonly
 * @wearableOnly
     */
    onMotionTypeChange: event1<MotionController.MotionType, void>;
    /**
     * Triggered by a touch event from the controller.
     * Arguments:
     * - **normalizedPosition:** A normalized 2D position of the user's touch on the touchpad. The coordinates range from ([0-1], [0-1]), where (0,0) represents the top-left and (1,1) represents the bottom-right.
     * - **touchId:** Returns the unique identifier of the specific touch; useful for distinguishing between multiple simultaneous touches.
     * - **timestampMilliseconds:** Returns the timestamp, in milliseconds, of when the touch event occurred.
     * - **phase:** The current state of the touch.
     * 
     * @readonly
 * @wearableOnly
     */
    onTouchEvent: event4<vec2, number, number, MotionController.TouchPhase, void>;
    /**
     * Triggered when the touchpad size is changed. Custom controllers can adjust the interactable area of the touchpad.
     * 
     * @readonly
 * @wearableOnly
     */
    onTouchpadSizeChange: event2<vec2, vec2, void>;
    /**
     * Event triggered when the tracking quality state of the motion controller changes.
     * 
     * @readonly
 * @wearableOnly
     */
    onTrackingQualityChange: event1<MotionController.TrackingQuality, void>;
    /**
     * An event is triggered when new motion data becomes available. The arguments are the world position and the world rotation of the motion controller, respectively.
     * 
     * @readonly
 * @wearableOnly
     */
    onTransformEvent: event2<vec3, quat, void>;
}

/**
 * Provides access to {@link MotionController}.
 * 
 * @see [Motion Controller Module](/spectacles/about-spectacles-features/apis/motion-controller) guide.
 * 
 * @wearableOnly
 */
declare class MotionControllerModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the Motion Controller with the provided options. If no options are provided, default value will be used.
     * 
     * @wearableOnly
     */
    getController(options: MotionController.MotionControllerOptions): MotionController;
}

/**
 * Segmentation model used for {@link SegmentationTextureProvider}.
 */
declare class SegmentationModel extends BinAsset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Controls a segmentation texture resource.
 * Can be accessed through {@link Texture.control} on a Segmentation texture.
 * For more information, see the [Segmentation](/lens-studio/features/ar-tracking/body/segmentation/fullscreen-segmentation) guide.
 */
declare class SegmentationTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the percentage of screen covered by the current segmentation mask, from 0 to 1.
     * 
     * @deprecated Use {@link SegmentationTextureProvider#onMaskPercentageUpdated}
     * 
     * @deprecated
     */
    getMaskPercentage(): number;
    trackingScope: TextureTrackingScope;
    /**
     * Triggered when the area segmented changes.
     * 
     * @readonly
     */
    onMaskPercentageUpdated: event1<number, void>;
}

/**
 * Allows the creation of Shopping Lenses with an integrated Product Catalog.
 * 
 * @remarks
 * The ShoppingModule includes several input fields for you to define as you create your Shopping Lens. The fields include:
 * 
 * **Domain:** name of the product line (e.g., Running Shoes).
 * **Description:** (of the domain): description of the domain (e.g., Winter Season Collection).
 * **State(s):** name of the single product displayed in that state (e.g., Shoe ABC).
 * **Description** (of each state): description of the product in the state (e.g., SKU ID 12345, red shoe).
 * 
 * @see [Shopping Lens](/lens-studio/sponsored/sponsored-lens-templates/shopping/surface-objects) guide.
 */
declare class ShoppingModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the status of whether the module has loaded.
     */
    loadingStarted(): ShoppingLoadingIndicator;
    selectProduct(index: number): void;
    /**
     * The domain within this shopping module.
     * 
     * @readonly
     */
    domains: DomainInfo[];
    /**
     * Triggered when an error has occured on the module.
     * 
     * @readonly
     */
    onError: event2<number, string, void>;
    /**
     * Triggered when the client (e.g. Snapchat) has changed the product state.
     * 
     * @readonly
     */
    onProductStateUpdate: event1<string, void>;
    /**
     * @readonly
     */
    onProductsLoaded: event1<string, void>;
}

/**
 * A state used in an {@link DomainInfo} used by a {@link ShoppingModule}.
 */
declare class StateInfo {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The name of the state.
     * 
     * @readonly
     */
    name: string;
    /**
     * @readonly
     */
    description: string;
}

/**
 * The domain of a {@link ShoppingModule}. You can leave this empty if you are tagging the products from the catalog dynamically, and assets are fetched and sent to the Lens.
 */
declare class DomainInfo {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The name of the domain.
     * 
     * @readonly
     */
    name: string;
    /**
     * The description of the domain.
     * 
     * @readonly
     */
    description: string;
    /**
     * The type of assets in the domain. You can leave this empty.
     * 
     * @readonly
     */
    assetType: string;
    /**
     * The states available in the domain.
     * 
     * @readonly
     */
    states: StateInfo[];
}

/**
 * Represents the loading state of the {@link ShoppingModule}. Returned by
 * {@link ShoppingModule.loadingStarted}. Subscribe to the
 * {@link ShoppingLoadingIndicator#loadingSucceeded} and
 * {@link ShoppingLoadingIndicator#loadingFailed} events to be notified
 * when loading completes.
 */
declare class ShoppingLoadingIndicator extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
     */
    loadingSucceeded: () => void;
    /**
     * @readonly
     */
    loadingFailed: () => void;
}

/**
 * Base class for Input and Output Placeholders used by MLComponent.
 */
declare class BasePlaceholder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The name of the Placeholder.
     * 
     * @readonly
     */
    name: string;
    /**
     * The shape of the Placeholder's data.
     * 
     * @readonly
     */
    shape: vec3;
    /**
     * Transformer object for applying transformations on the PlaceHolder's data.
     * 
     * @readonly
     */
    transformer: Transformer;
    /**
     * The internal data layout of the current BasePlaceholder. This layout is used by ML backend. If `dataLayout` is not the same as `internalDataLayout`, a layout conversion will happen when process model’s input/output.
     * 
     * @readonly
     */
    internalDataLayout: MachineLearning.DataLayout;
    /**
     * The data layout of the current BasePlaceholder, which defines the order in which multidimensional data is accessed in memory. The default layout is {@link MachineLearning.DataLayout.NHWC}.
     */
    dataLayout: MachineLearning.DataLayout;
}

/**
 * Controls input data for a neural network used by an MLComponent.
 * For more information, see the [MLComponent Scripting](/lens-studio/features/snap-ml/ml-component/scripting-ml-component) guide.
 */
declare class InputPlaceholder extends BasePlaceholder {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Texture used as input.
     */
    texture: Texture;
    /**
     * Data used as input.
     * 
     * @readonly
     */
    data: Float32Array;
}

/**
 * Provides output data from the neural network used by an MLComponent.
 * For more information, see the [MLComponent Scripting](/lens-studio/features/snap-ml/ml-component/scripting-ml-component) guide.
 */
declare class OutputPlaceholder extends BasePlaceholder {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Output as a Texture. Usable when `mode` is set to `MachineLearning.OutputMode.Texture`.
     * 
     * @readonly
     */
    texture: Texture;
    /**
     * Output as a Float32Array. Usable when `mode` is set to `MachineLearning.OutputMode.Data`.
     * 
     * @readonly
 * @exposesUserData
     */
    data: Float32Array;
    /**
     * Which type of data the output is provided as. For example, Texture or Data.
     */
    mode: MachineLearning.OutputMode;
}

/**
 * Builds InputPlaceHolders for MLComponent.
 */
declare class InputBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the name of the InputPlaceholder to be built.
     */
    setName(name: string): InputBuilder;
    /**
     * Sets the shape of the InputPlaceholder to be built.
     */
    setShape(shape: vec3): InputBuilder;
    /**
     * Sets the input texture of the InputPlaceholder to be built.
     */
    setInputTexture(texture: Texture): InputBuilder;
    /**
     * Sets the Transformer of the InputPlaceholder to be built.
     */
    setTransformer(transformer: Transformer): InputBuilder;
    /**
     * Sets sampler for input placeholder builder.
     */
    setSampler(sampler: Sampler): InputBuilder;
    /**
     * Builds and returns a new InputPlaceholder.
     */
    build(): InputPlaceholder;
}

/**
 * Builds OutputPlaceholders for MLComponent.
 */
declare class OutputBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the name of the OutputPlaceholder to be built.
     */
    setName(name: string): OutputBuilder;
    /**
     * Sets the shape of the OutputPlaceholder to be built.
     */
    setShape(shape: vec3): OutputBuilder;
    /**
     * Sets the OutputMode of the OutputPlaceholder to be built.
     */
    setOutputMode(outputMode: MachineLearning.OutputMode): OutputBuilder;
    /**
     * Sets the Transformer of the OutputPlaceholder to be built.
     */
    setTransformer(transformer: Transformer): OutputBuilder;
    /**
     * Builds and returns a new OutputPlaceholder.
     */
    build(): OutputPlaceholder;
}

/**
 * Builds Transformer objects for MLComponent.
 */
declare class TransformerBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enables or disables horizontal flipping.
     */
    setFlipX(value: boolean): TransformerBuilder;
    /**
     * Enables or disables vertical flipping.
     */
    setFlipY(value: boolean): TransformerBuilder;
    /**
     * Sets the rotation type used.
     */
    setRotation(mode: TransformerRotation): TransformerBuilder;
    /**
     * Sets the stretching type used.
     */
    setStretch(value: boolean): TransformerBuilder;
    /**
     * Sets the vertical alignment type used.
     */
    setVerticalAlignment(mode: VerticalAlignment): TransformerBuilder;
    /**
     * Sets the horizontal alignment type used.
     */
    setHorizontalAlignment(mode: HorizontalAlignment): TransformerBuilder;
    /**
     * Sets the fill value used.
     */
    setFillColor(color: vec4): TransformerBuilder;
    /**
     * Builds and returns a Transformer object based on the current settings.
     */
    build(): Transformer;
}

/**
 * Class for building Sampler.
 */
declare class SamplerBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the filtering mode used for textures sampling.
     */
    setFilteringMode(filteringMode: FilteringMode): SamplerBuilder;
    /**
     * Sets the same wrap mode for all U, V and W axes.
     */
    setWrapMode(wrapMode: WrapMode): SamplerBuilder;
    /**
     * Sets the wrap mode U axis.
     */
    setWrapUMode(wrapMode: WrapMode): SamplerBuilder;
    /**
     * Sets the wrap mode V axis.
     */
    setWrapVMode(wrapMode: WrapMode): SamplerBuilder;
    /**
     * Sets the wrap mode W axis.
     */
    setWrapWMode(wrapMode: WrapMode): SamplerBuilder;
    /**
     * Sets border color that will be used for `WrapMode.ClampToBorder` case.
     */
    setBorderColor(borderColor: vec4): SamplerBuilder;
    /**
     * Sets the flag to use/generate texture mipmaps if they exist/requested.
     */
    setUseMipmaps(value: boolean): SamplerBuilder;
    /**
     * Builds Sampler.
     */
    build(): Sampler;
}

declare class Sampler extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Applies additional transform processing on data for InputPlaceholders and OutputPlaceholders used with MLComponent.
 * For more information, see the [MLComponent Overview](/lens-studio/features/snap-ml/ml-component/ml-component-overview).
 */
declare class Transformer extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Transformation matrix of this Transformer.
     * 
     * @readonly
     */
    matrix: mat3;
    /**
     * Inverse transformation matrix of this Transformer.
     * 
     * @readonly
     */
    inverseMatrix: mat3;
}

/**
 * The builder class for Spectrogram.
 */
declare class SpectrogramBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets the frame size.
     */
    setFrameSize(frameSize: number): SpectrogramBuilder;
    /**
     * Sets the number of samples between successive FFT segments.
     */
    setHopSize(hopSize: number): SpectrogramBuilder;
    /**
     * Sets the length of the window.
     */
    setFFTSize(fftSize: number): SpectrogramBuilder;
    /**
     * Creates a new Spectrogram.
     */
    build(): Spectrogram;
}

/**
 * A builder class for MelSpectrogram.
 */
declare class MelSpectrogramBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Length of the window, which is the length of frameSize and then padded with zeros to match fftSize.
     */
    setFrameSize(frameSize: number): MelSpectrogramBuilder;
    /**
     * Set number of samples between successive fft segments.
     */
    setHopSize(hopSize: number): MelSpectrogramBuilder;
    /**
     * Set length of the fft window.
     */
    setFFTSize(fftSize: number): MelSpectrogramBuilder;
    /**
     * Set number of mel bins.
     */
    setNumMel(numMel: number): MelSpectrogramBuilder;
    /**
     * Set min frequency.
     */
    setMinFreq(minFreq: number): MelSpectrogramBuilder;
    /**
     * Set max frequency.
     */
    setMaxFreq(maxFreq: number): MelSpectrogramBuilder;
    /**
     * Set number of samples per second.
     */
    setSampleRate(sampleRate: number): MelSpectrogramBuilder;
    /**
     * Create new MelSpectrogram object.
     */
    build(): MelSpectrogram;
}

/**
 * Builder class for the MFCC (Mel Frequency Cepstral Co-efficients).
 */
declare class MFCCBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Length of the window, the window will be the length of frameSize and then padded with zeros to mach FFTSize.
     */
    setFrameSize(frameSize: number): MFCCBuilder;
    /**
     * Sets the number of samples between successive FFT segments.
     */
    setHopSize(hopSize: number): MFCCBuilder;
    /**
     * Sets the length of the FFT window.
     */
    setFFTSize(fftSize: number): MFCCBuilder;
    /**
     * Sets the number of MFCCs to return.
     */
    setNumMFCC(numMFCC: number): MFCCBuilder;
    /**
     * Sets number of mel bins.
     */
    setNumMel(numMel: number): MFCCBuilder;
    /**
     * If lifter > 0, apply liftering to the MFCCs.
     */
    setLifter(lifter: number): MFCCBuilder;
    /**
     * Sets the min frequency.
     */
    setMinFreq(minFreq: number): MFCCBuilder;
    /**
     * Sets the max frequency.
     */
    setMaxFreq(maxFreq: number): MFCCBuilder;
    /**
     * Sets the number of samples per second.
     */
    setSampleRate(sampleRate: number): MFCCBuilder;
    /**
     * Create a new MFCC object.
     */
    build(): MFCC;
}

/**
 * Builder class for Delta.
 */
declare class DeltaBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Specify number of channels. Currently, only mono is supported, so should be set to `1`.
     */
    setNumFeatures(numFeatures: number): DeltaBuilder;
    /**
     * Set the size of the window.
     */
    setWindowSize(winSize: number): DeltaBuilder;
    /**
     * Create a new Delta object.
     */
    build(): Delta;
}

/**
 * Builder class for the Delay.
 */
declare class DelayBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Specify number of channels. Currently, only mono is supported, so should be set to `1`.
     */
    setNumFeatures(numFeatures: number): DelayBuilder;
    /**
     * Set the delay of the Delay object in samples. Delay is equal to `sampleRate * delayInSeconds`.
     */
    setDelay(delay: number): DelayBuilder;
    /**
     * Creates new Delay object.
     */
    build(): Delay;
}

declare class PitchShifterBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    setSampleRate(sampleRate: number): PitchShifterBuilder;
    build(): PitchShifter;
}

declare class NoiseReductionBuilder extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    setSampleRate(sampleRate: number): NoiseReductionBuilder;
    build(): NoiseReduction;
}

/**
 * Representation the signal strength over time at various frequencies present in a particular waveform. Created by applying Fast Fourier Transform (FFT) on the overlapping segments of the audio data.
 */
declare class Spectrogram extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Processes audio data from the inTensor of inShape, writes result to the outTensor and returns the outTensor shape.
     */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    /**
     * Returns the maximum buffer length.
     * 
     * @readonly
     */
    maxTensorSize: number;
}

/**
 * Computes a mel scale spectrogram - a spectrogram where the frequencies are converted to the mel scale.
 */
declare class MelSpectrogram extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Process in tensor with shape, write result to the outTensor and return the shape of outTensor.
     */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    /**
     * @readonly
     */
    maxTensorSize: number;
}

/**
 * Mel-frequency cepstral coefficients.
 */
declare class MFCC extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Process in tensor with `shape`, write result to the `outTensor`, and returns the shape of `outTensor`.
     */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    /**
     * Max tensor size.
     * 
     * @readonly
     */
    maxTensorSize: number;
}

/**
 * Local estimate of the derivative of the input data along the selected axis. Outputs the derivative of the input features along the window.
 */
declare class Delta extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Process `inTensor` with shape `inShape` and writes the result to the `outTensor` and returns the shape of `outTensor`.
     */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    /**
     * Maximum amount of features (channels).
     * 
     * @readonly
     */
    maxTensorSize: number;
}

/**
 * Creates a buffer for the audio data.
 */
declare class Delay extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Process current frame data passed in `inTensor` of shape `inShape`, writes the result (delayed frame) to the `outTensor` and returns the shape of `outTensor`.
     */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    /**
     * Maximum amount of features (channels).
     * 
     * @readonly
     */
    maxTensorSize: number;
}

declare class PitchShifter extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    pitch: number;
    /**
     * @readonly
     */
    maxTensorSize: number;
}

declare class NoiseReduction extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3;
    amount: number;
    /**
     * @readonly
     */
    maxTensorSize: number;
}

/**
 * Used to analyze camera input and apply similar image artifacts to AR objects to better blend and match with the real world.
 */
declare class BlurNoiseEstimation extends Component {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Positions {@link ScreenTransform} according to a cropped region of a texture provided by {@link CropTextureProvider}.
 * 
 * @remarks
 * Used with Hand Segmentation texture and ML face effects.
 * 
 * @see [Crop Textures](/lens-studio/features/snap-ml/ml-component/crop-textures) guide.
 */
declare class RectangleSetter extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Cropped texture to match the screen region of. Should be a texture using a RectCropTextureProvider, such as a Screen Crop Texture or Face Crop Texture.
     */
    cropTexture: Texture;
}

/**
 * 
 * Used to integrate machine learning models into a Lens.
 * 
 * @remarks
 * This component allows developers to use neural networks for processing inputs such as textures or data arrays to produce specific outputs, which could be in the form of processed textures or data alterations. The MLComponent relies on MLAsset that defines the neural network model used. It supports tasks like image classification, object detection, etc.
 * 
 * @see [MLComponent Overview](/lens-studio/features/snap-ml/ml-component/ml-component-overview).
 */
declare class MLComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the InputPlaceholder with the matching name.
     */
    getInput(name: string): InputPlaceholder;
    /**
     * Returns the OutputPlaceholder with the matching name.
     */
    getOutput(name: string): OutputPlaceholder;
    /**
     * Returns an array of InputPlaceholders of the MLComponent's model with default settings. Returns empty array if the model asset is not set.
     */
    getInputs(): InputPlaceholder[];
    /**
     * Returns an array of OutputPlaceholders of MLComponent's model with default settings. Returns empty array if the model is not set.
     */
    getOutputs(): OutputPlaceholder[];
    /**
     * Builds the MLComponent model when all placeholders are determined. Config is an array of Input and Output placeholders.
     */
    build(placeholders: BasePlaceholder[]): void;
    /**
     * Build the MLComponent asynchronously.
     */
    buildAsync(placeholders: BasePlaceholder[]): Promise<void>;
    /**
     * If running asynchronously, makes the entire system wait until the last run is finished.
     */
    waitOnRunning(): void;
    /**
     * If loading asynchronously, makes the entire system wait until loading is finished.
     */
    waitOnLoading(): void;
    /**
     * Stops running the MLComponent. The `onRunningFinished` callback will not be executed.
     */
    cancel(): void;
    /**
     * Stops running the MLComponent.
     */
    stop(): void;
    /**
     * Runs the MLComponent once.
     */
    runImmediate(sync: boolean): void;
    /**
     * Schedules the MLComponent to run at the start timing and terminate at the end timing. The scheduled running will recur if `recurring` is true.
     */
    runScheduled(recurring: boolean, startTiming: MachineLearning.FrameTiming, endTiming: MachineLearning.FrameTiming): void;
    /**
     * Returns the start time of the scheduled MLComponent run.
     */
    getScheduledStart(): MachineLearning.FrameTiming;
    /**
     * Returns the end time of the scheduled MLComponent run.
     */
    getScheduledEnd(): MachineLearning.FrameTiming;
    /**
     * Returns true if running is requested on each frame.
     */
    isRecurring(): boolean;
    /**
     * Binary ML model supplied by the user.
     */
    model: MLAsset;
    /**
     * Returns the current status of the neural network model.
     * 
     * @readonly
     */
    state: MachineLearning.ModelState;
    /**
     * Controls the inference mode that MLComponent will run in. For example, GPU, CPU, etc.
     */
    inferenceMode: MachineLearning.InferenceMode;
    /**
     * Function that gets called when model loading is finished.
     */
    onLoadingFinished: () => void;
    /**
     * Function that gets called when the model stops running.
     */
    onRunningFinished: () => void;
    /**
     * Bind a function that is triggered when the component fails to load a model.
     */
    onLoadingFailed: (error: string) => void;
    /**
     * Bind a function that is triggered when the component fails to run a model.
     */
    onRunningFailed: (error: string) => void;
    /**
     * Render order of the MLComponent.
     */
    renderOrder: number;
    /**
     * Runs the MLComponent automatically when the object or component it's on is enabled.
     */
    autoRun: boolean;
}

/**
 * Represents a machine learning model that can be integrated with an {@link MLComponent}.
 */
declare class MLAsset extends BinAsset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns model metadata as JSON object.
     */
    getMetadata(): any;
}

/**
 * Base class for Texture Providers that crop an input texture.
 */
declare class CropTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Input texture to crop.
     */
    inputTexture: Texture;
}

/**
 * Texture Provider providing a cropped region of the input texture. The region is specified by the cropRect in local space and rotation.
 * Can be accessed using Texture.control on a RectCropTexture asset, such as a Screen Crop Texture.
 * For more information, see the [Crop Textures](/lens-studio/features/snap-ml/ml-component/crop-textures) guide.
 */
declare class RectCropTextureProvider extends CropTextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The cropped region to draw.
     */
    cropRect: Rect;
    /**
     * Angle, in radians, the cropped region is rotated by.
     */
    rotation: number;
}

/**
 * A state generated for ColliderComponent collision events.
 */
declare class Collision extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Array of contacts in the collision.
     * 
     * @readonly
     */
    contacts: Contact[];
    /**
     * Primitive shapes that physics objects interact with, such as spheres, boxes, and meshes, or compound shapes formed from multiple shapes. Used with Physics, Hair Simulation and Cloth Simulation.
     * 
     * @readonly
     */
    collider: ColliderComponent;
    /**
     * ID of the collision, unique for this collider.
     * 
     * @readonly
     */
    id: number;
    /**
     * The number of contact points in the collision.
     * 
     * @readonly
     */
    contactCount: number;
}

/**
 * Contact point between two colliding objects.
 * 
 * @see {@link ColliderComponent}
 * @see {@link CollisionEnterEventArgs}
 * @see {@link CollisionExitEventArgs}
 */
declare class Contact extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Distance along the normal between the hit collider and this collider.
     * 
     * @readonly
     */
    distance: number;
    /**
     * Impulse (kg*cm/s) applied along the normal in response to the collision.
     * 
     * @readonly
     */
    impulse: number;
    /**
     * Position on the hit collider.
     * 
     * @readonly
     */
    position: vec3;
    /**
     * Normal on the hit collider.
     * 
     * @readonly
     */
    normal: vec3;
}

/**
 * Exposes state generated for ColliderComponent overlap events.
 * 
 * @see {@link ColliderComponent}
 * @see {@link OverlapEnterEventArgs}
 * @see {@link OverlapExitEventArgs}
 * @see {@link OverlapStayEventArgs}
 */
declare class Overlap extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The collider which is overlapping.
     * 
     * @readonly
     */
    collider: ColliderComponent;
    /**
     * ID of the overlap, unique for this overlap.
     * 
     * @readonly
     */
    id: number;
}

/**
 * Args used for {@link ColliderComponent.onCollisionEnter}, which is triggered when a collision begins.
 */
declare class CollisionEnterEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Structure containing information about the current collision.
     * 
     * @readonly
     */
    collision: Collision;
}

/**
 * Args used for {@link ColliderComponent.onCollisionStay}, which is triggered every frame while a collision continues.
 */
declare class CollisionStayEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Structure containing information about the current collision.
     * 
     * @readonly
     */
    collision: Collision;
}

/**
 * Args used for {@link ColliderComponent.onCollisionExit}, which is triggered when a collision ends.
 */
declare class CollisionExitEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Structure containing information about the current collision.
     * 
     * @readonly
     */
    collision: Collision;
}

/**
 * Args used for {@link ColliderComponent.onOverlapEnter}, which is triggered when the collider begins overlapping another object. Typically used for volume triggers
 */
declare class OverlapEnterEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     *  Structure containing information about the current overlap.
     * 
     * @readonly
     */
    overlap: Overlap;
    /**
     * Array of all current overlaps.
     * 
     * @readonly
     */
    currentOverlaps: Overlap[];
    /**
     * Number of objects currently overlapping.
     * 
     * @readonly
     */
    currentOverlapCount: number;
}

/**
 * Args used for {@link ColliderComponent.onOverlapStay}, which is triggered every frame while the collider continues overlapping another object. Typically used for volume triggers.
 */
declare class OverlapStayEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     *  Structure containing information about the current overlap.
     * 
     * @readonly
     */
    overlap: Overlap;
    /**
     * Array of all current overlaps.
     * 
     * @readonly
     */
    currentOverlaps: Overlap[];
    /**
     * Number of objects currently overlapping.
     * 
     * @readonly
     */
    currentOverlapCount: number;
}

/**
 * Args used for {@link ColliderComponent.onOverlapExit}, which is triggered when the collider stops overlapping another object. Typically used for volume triggers.
 */
declare class OverlapExitEventArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     *  Structure containing information about the current overlap.
     * 
     * @readonly
     */
    overlap: Overlap;
    /**
     * Array of all current overlaps.
     * 
     * @readonly
     */
    currentOverlaps: Overlap[];
    /**
     * Number of objects currently overlapping.
     * 
     * @readonly
     */
    currentOverlapCount: number;
}

/**
 * Used to define the physical boundaries of an object, allowing it to interact with other objects in Physics, Cloth or Hair simulation.
 * 
 * @remarks
 * Provides a way for {@link SceneObject}s to detect and respond to collisions. Useful for detecting when objects overlap or contact each other, which can then be used to trigger events or effects within the Lens experience.
 * 
 * @see [Collision and Overlap](https://developers.snap.com/lens-studio/features/physics/collision-and-overlap).
 * @see [Physics Examples](/lens-studio/features/physics/physics-examples/physics).
 * @see [Cloth Simulation](/lens-studio/features/physics/cloth-simulation)
 */
declare class ColliderComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Clears all velocities and forces on a collider.
     */
    clearMotion(): void;
    /**
     * The Shape object used for collision.
     */
    shape: Shape;
    /**
     * Collision filter used for overlap events.
     */
    overlapFilter: Physics.Filter;
    /**
     * The matter used by the collider to define its physical substance, such as friction and bounciness.
     */
    matter: Matter;
    /**
     * Collision filter to use for this collider.
     */
    filter: Physics.Filter;
    /**
     * The WorldSettingsAsset used by the collider to define the physics simulation settings.
     */
    worldSettings: Physics.WorldSettingsAsset;
    /**
     * Signals every frame while objects continue to collide.
     * 
     * @readonly
     */
    onCollisionStay: event1<CollisionStayEventArgs, void>;
    /**
     * Signals when objects initially collide.
     * 
     * @readonly
     */
    onCollisionEnter: event1<CollisionEnterEventArgs, void>;
    /**
     * Signals when objects stop colliding.
     * 
     * @readonly
     */
    onCollisionExit: event1<CollisionExitEventArgs, void>;
    /**
     * Signals every frame while colliders continue to overlap.
     * 
     * @readonly
     */
    onOverlapStay: event1<OverlapStayEventArgs, void>;
    /**
     * Signals when colliders stop overlapping.
     * 
     * @readonly
     */
    onOverlapExit: event1<OverlapExitEventArgs, void>;
    /**
     * Signals when colliders first overlap.
     * 
     * @readonly
     */
    onOverlapEnter: event1<OverlapEnterEventArgs, void>;
    /**
     * Expects a LevelsetColliderAsset. Contains distance field data which describes a collider's shape. A selection of default Levelset assets can be found in Resource->Add->Hairstyle Colliders
     * 
     * @deprecated Use {@link ColliderComponent#shape} to set the shape to a {@link LevelsetShape}
     * 
     * @deprecated
     */
    asset: LevelsetColliderAsset;
    /**
     * Toggle collider wire rendering for visualizing collider geometry shape and where it is placed.
     */
    debugDrawEnabled: boolean;
    /**
     * If enabled, the collider shape extends to fit the visual mesh, if any. Only applicable for Box and Sphere shapes.
     */
    fitVisual: boolean;
    /**
     * Nested collider/body components may be merged into compound shapes. By default, this occurs only for dynamic bodies and not for static colliders. If `forceCompound` is set, this occurs for static colliders as well.
     */
    forceCompound: boolean;
    /**
     * If enabled, the collider doesn't interact with the world but may still be detected with ray casts and intersection events.
     */
    intangible: boolean;
    /**
     * Smooth transform changes using a dampened spring. Useful to reduce motion noise. This only applies to the simulation and changes from outside the simulation. The {@link SceneObject}'s transform is not affected. It has no effect for dynamic bodies.
     */
    smooth: boolean;
    /**
     * Smoothing spring factor, for translation. This controls the restitution strength of the spring, so low values are smoother but lag more.
     */
    translateSmoothFactor: number;
    /**
     * Smoothing spring factor, for rotation.
     */
    rotateSmoothFactor: number;
    /**
     * Linear velocity (cm/s).
     */
    velocity: vec3;
    /**
     * Angular velocity, expressed as an axis of rotation scaled by angular speed (radians/s).
     */
    angularVelocity: vec3;
}

type HairSimulationColliderComponent = ColliderComponent;

/**
 * The arguments of the PinchDown event on `GestureModule`
 * 
 * @wearableOnly
 */
declare class PinchDownArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The orientation of the detected gesture.
     * 
     * @readonly
 * @wearableOnly
     */
    palmOrientation: vec3;
}

/**
 * The arguments of the PinchUp event on `GestureModule`
 * 
 * @wearableOnly
 */
declare class PinchUpArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The orientation of the detected gesture.
     * 
     * @readonly
 * @wearableOnly
     */
    palmOrientation: vec3;
}

/**
 * The arguments of the PinchStrength event on `GestureModule`
 * 
 * @wearableOnly
 */
declare class PinchStrengthArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The pinch strength of the detected gesture.
     * 
     * @readonly
 * @wearableOnly
     */
    strength: number;
}

/**
 * @wearableOnly
 */
declare class TargetingDataArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * @readonly
 * @wearableOnly
     */
    rayOriginInWorld: vec3;
    /**
     * @readonly
 * @wearableOnly
     */
    rayDirectionInWorld: vec3;
    /**
     * @readonly
 * @wearableOnly
     */
    isValid: boolean;
    /**
     * Whether the hand intends to target.
     * 
     * @readonly
 * @wearableOnly
     */
    handIntendsToTarget: boolean;
}

/**
 * The arguments of the PalmTapDown event on `GestureModule`
 * 
 * @wearableOnly
 */
declare class PalmTapDownArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The module's confidence in detecting the gesture.
     * 
     * @readonly
 * @wearableOnly
     */
    confidence: number;
}

/**
 * The arguments of the PalmTapUp event on `GestureModule`
 * 
 * @wearableOnly
 */
declare class PalmTapUpArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The module's confidence in detecting the gesture.
     * 
     * @readonly
 * @wearableOnly
     */
    confidence: number;
}

/**
 * @wearableOnly
 */
declare class GesturesDataArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The arguments of the GrabBegin event on `GestureModule`. Currently unused.
 * 
 * @wearableOnly
 */
declare class GrabBeginArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The arguments of the GrabEnd event on `GestureModule`. Currently unused.
 * 
 * @wearableOnly
 */
declare class GrabEndArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The arguments of `getIsPhoneInHandBeginEvent` on `GestureModule`. Currently empty.
 * 
 * @wearableOnly
 */
declare class IsPhoneInHandBeginArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The arguments of `getIsPhoneInHandEndEvent` on `GestureModule`. Currently empty.
 * 
 * @wearableOnly
 */
declare class IsPhoneInHandEndArgs extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Allows to detect hand gestures using machine learning algorithms.
 * 
 * @see [Gesture Module](/spectacles/about-spectacles-features/apis/gesture-module) guide.
 * 
 * @wearableOnly
 */
declare class GestureModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Triggered when the thumb and index fingers of the hand in view are pinched together.
     * 
     * @wearableOnly
     */
    getPinchDownEvent(handType: GestureModule.HandType): event1<PinchDownArgs, void>;
    /**
     * Triggered when the thumb and index fingers of the hand in view are separated after being pinched together.
     * 
     * @wearableOnly
     */
    getPinchUpEvent(handType: GestureModule.HandType): event1<PinchUpArgs, void>;
    /**
     * Triggered when the thumb and index fingers of the hand in view are pinched together. Compared to `getPinchDownEvent`, this event is more robust when moving the hand.
     * 
     * @wearableOnly
     */
    getFilteredPinchDownEvent(handType: GestureModule.HandType): event1<PinchDownArgs, void>;
    /**
     * Triggered when the thumb and index fingers of the hand in view are separated after being pinched together. Compared to `getPinchUpEvent`, this event is more robust when moving the hand.
     * 
     * @wearableOnly
     */
    getFilteredPinchUpEvent(handType: GestureModule.HandType): event1<PinchUpArgs, void>;
    /**
     * Get the strength of a pinch between the thumb and index fingers of the hand in view.
     * 
     * @wearableOnly
     */
    getPinchStrengthEvent(handType: GestureModule.HandType): event1<PinchStrengthArgs, void>;
    /**
     * Triggered when the user has an intent to target a digital content in space.
     * 
     * @wearableOnly
     */
    getTargetingDataEvent(handType: GestureModule.HandType): event1<TargetingDataArgs, void>;
    /**
     * Triggered when the index finger of one hand taps the palm of the opposite hand.
     * Specifically, a right-hand palm tap is recognized when the right index finger touches the left palm, and a left-hand palm tap when the left index finger touches the right palm.
     * 
     * @wearableOnly
     */
    getPalmTapDownEvent(handType: GestureModule.HandType): event1<PalmTapDownArgs, void>;
    /**
     * Triggered when the left index finger from one hand lifts from the palm on the opposite hand after touching. Currently, only the palm tap to the left hand is supported.
     * 
     * @wearableOnly
     */
    getPalmTapUpEvent(handType: GestureModule.HandType): event1<PalmTapUpArgs, void>;
    /**
     * Triggered when the hand in view starts performing a grab pose, enabling interactions such as grabbing virtual objects or making a fist.
     * 
     * @wearableOnly
     */
    getGrabBeginEvent(handType: GestureModule.HandType): event1<GrabBeginArgs, void>;
    /**
     * Triggered when the hand in view ends performing a grab pose and opens the hand, disabling interactions such as grabbing virtual objects or making a fist.
     * 
     * @wearableOnly
     */
    getGrabEndEvent(handType: GestureModule.HandType): event1<GrabEndArgs, void>;
    /**
     * Triggered when a phone is detected in a hand. Note: Only smartphone-like objects are detected.
     * 
     * Details:
     * The event indicates that the state of a hand not holding a phone has changed to a hand holding a phone. If a Lens contains a `GestureModel` and has subscribed to `getIsPhoneInHandBeginEvent`, an initial event is always sent at the start of the Lens if a hand already holds a phone.
     * 
     * For technical reasons, if a Lens does not initially subscribe to `getIsPhoneInHandBeginEvent`, but subscribes at a later time, no initial event will be sent after subscription.
     * 
     * @wearableOnly
     */
    getIsPhoneInHandBeginEvent(handType: GestureModule.HandType): event1<IsPhoneInHandBeginArgs, void>;
    /**
     * Triggered when a phone is no longer detected in a hand. Note: Only smartphone-like objects are considered.
     * 
     * Details:
     * The event indicates that the state of a hand holding a phone has changed to a hand not holding a phone. If a Lens contains a `GestureModel` and has subscribed to `getIsPhoneInHandEndEvent`, an initial event is always sent at the start of the Lens if a hand does not hold a phone.
     * 
     * For technical reasons, if a Lens does not initially subscribe to `getIsPhoneInHandEndEvent`, but subscribes at a later time, no initial event will be sent after subscription.
     * 
     * @wearableOnly
     */
    getIsPhoneInHandEndEvent(handType: GestureModule.HandType): event1<IsPhoneInHandEndArgs, void>;
}

/**
 * SpectaclesMobileKitModule serves as the primary entry point for the Spectacles Mobile Kit, enabling interaction with
 * a specific mobile application, such as requesting data or receiving events.
 * 
 * ⚠️ Best Practice: Only one SpectaclesMobileKitModule should be used per Lens.
 * 
 * ⚠️ Privacy Note: Using SpectaclesMobileKitModule requires the `INTERNET` permission. By default, access to sensitive
 * data is restricted when a Lens uses internet-connected components. To enable access to both sensitive data and the
 * internet simultaneously, certain Experimental APIs must be activated through a feature called Extended Permissions.
 * Note that Lenses using Extended Permissions cannot be published.
 * 
 * @snapOS
 */
declare class SpectaclesMobileKitModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a {@link SpectaclesMobileKitSession} instance. To begin interacting with your mobile application, a Lens
     * must first start a session. Once the mobile application connects to the session, the Lens can start communicating
     * with it.
     * 
     * @snapOS
     */
    createSession(): SpectaclesMobileKitSession;
}

/**
 * Spectacles Mobile Kit session allows you to initiate the connection to peer, and send data.
 * 
 * @snapOS
 */
declare class SpectaclesMobileKitSession extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Use sendData() to send a one-way message to the connected mobile app. This is a fire-and-forget operation, no
     * response is expected.
     * 
     * @snapOS
     */
    sendData(data: string): void;
    /**
     * Send a request expecting a response from the peer. Returns a promise with the response.
     * 
     * @snapOS
     */
    sendRequest(data: string): Promise<string>;
    /**
     * Start a subscription, multiple responses can be sent by the peer. Returns the subscription event. onError will be
     * called if the subscription is cancelled by peer.
     * 
     * @snapOS
     */
    startSubscription(data: string, onError: (error: string) => void): event1<string, void>;
    /**
     * Stop the subscription.
     * 
     * @snapOS
     */
    stopSubscription(id: event1<string, void>): void;
    /**
     * Initialize the session before interacting with the app. Ensure that all callbacks and events are configured prior
     * to calling this method. This action creates the session and begins listening for incoming connections.
     * 
     * @snapOS
     */
    start(): void;
    /**
     * Disconnect and stop the session. Session object will be invalid after this call and will need to be re-created.
     * 
     * @snapOS
     */
    close(): void;
    /**
     * Notified when the connection to the peer is established and ready.
     * 
     * @readonly
 * @snapOS
     */
    onConnected: event0<void>;
    /**
     * Triggered when the connection to the peer is severed. The session is no longer valid and must be re-created.
     * 
     * @readonly
 * @snapOS
     */
    onDisconnected: event0<void>;
    /**
     * True if we’re connected to the peer.
     * 
     * @readonly
 * @snapOS
     */
    isConnected: boolean;
}

/**
 * The DeepLinkModule brings the concept of deep linking, familiar from mobile platforms like Android and iOS, to Spectacles. This module allows Lenses to send and receive deep link URIs between Spectacles and the Spectacles App.
 * 
 * @snapOS
 */
declare class DeepLinkModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Initiates a deep link request by sending a specified URI from the Lens to SnapOS, allowing dynamic interaction based on the URI’s target action or content.
     * 
     * @snapOS
     */
    openUri(uri: string): Promise<void>;
    /**
     * An event triggered when a deep link request is received by the Lens from SnapOS, enabling the lens to process and respond to the incoming action or content linked by the URI.
     * 
     * @readonly
 * @snapOS
     */
    onUriReceived: event1<DeepLinkUriReceivedArgs, void>;
}

/**
 * Allows Physics simulation to control SceneObject.
 * 
 * @remarks
 * Derived from {@link ColliderComponent}, attaching this to a {@link SceneObject} turns it into a dynamic rigid-body that is automatically moved by the physics simulation in response to gravity, collisions, and other forces.
 * 
 * @see [Physics Body](/lens-studio/features/physics/physics-component#physics-body) guide.
 * @see [Physics Examples](/lens-studio/features/physics/physics-examples/physics).
 */
declare class BodyComponent extends ColliderComponent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Apply linear force at the object's center-of-mass.
     */
    addForce(force: vec3, mode: Physics.ForceMode): void;
    /**
     * Apply force at a point offset from the object's origin, effectively generating torque.
     */
    addForceAt(force: vec3, offset: vec3, mode: Physics.ForceMode): void;
    /**
     * Apply torque (angular force).
     */
    addTorque(torque: vec3, mode: Physics.ForceMode): void;
    /**
     * Relative to local rotation, apply linear force at the object's center-of-mass.
     */
    addRelativeForce(force: vec3, mode: Physics.ForceMode): void;
    /**
     * Relative to local rotation, apply force at a point offset from the object's origin, effectively generating torque.
     */
    addRelativeForceAt(force: vec3, position: vec3, mode: Physics.ForceMode): void;
    /**
     * Relative to local rotation, apply torque (angular force).
     */
    addRelativeTorque(torque: vec3, mode: Physics.ForceMode): void;
    /**
     * Add a point constraint between this body and the given collider, at the given position. `target` is optional. If null, it is statically constrained to the world.   This is a convenience function that creates a child SceneObject with a ConstraintComponent, and sets its type, target, and constraint parameters. To fully remove the constraint, its SceneObject must be removed - not the component. Call `removeConstraint()` to do this.
     */
    addPointConstraint(target: ColliderComponent, position: vec3): ConstraintComponent;
    /**
     * Removes a constraint that was added with one of the `add*Constraint()` functions.
     */
    removeConstraint(constraint: ConstraintComponent): void;
    /**
     * If enabled, the body is dynamically simulated, such that it responds to forces and collisions, nested collider/body components will be merged into compound shapes. Otherwise, it acts as a static collider, functionally equivalent to Physics.ColliderComponent.
     */
    dynamic: boolean;
    /**
     * Mass (kg) of the object. If modified from this field, mass is constant irrespective of shape and scale.
     */
    mass: number;
    /**
     * Density (kg/L) of the object, used to derive mass from volume. If modified, mass changes according to shape and scale.
     */
    density: number;
    /**
     * Damping applied to linear velocity, in the range 0.0 (no damping) to 1.0 (maximum damping). This produces an effect similar to drag in that it causes the object to slow down over time. It is not however physically accurate, and it doesn't take into account surface area or mass.
     */
    damping: number;
    /**
     * Damping applied to angular velocity, in the range 0.0 (no damping) to 1.0 (maximum damping).
     */
    angularDamping: number;
}

/**
 * Constraints body motion in configurable ways, for simulating physical objects such as joints and hinges.
 */
declare class Constraint extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The type of constraint that is applied.
     * 
     * @readonly
     */
    constraintType: Physics.ConstraintType;
}

/**
 * Fully constrain rotation and translation.
 * 
 * @see {@link ConstraintComponent}.
 */
declare class FixedConstraint extends Constraint {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Settings describing the independent force (motor) applied to the constraint. Motor within a hinge constraint is used to create controlled, powered movement along the hinge's axis, allowing objects to rotate automatically or maintain a particular speed or position.
 */
declare class HingeMotorSettings {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enable or disable motor settings.
     */
    enabled: boolean;
    /**
     * Maximum force allowed to be applied to constraint.
     */
    maxImpulse: number;
    /**
     * A type of the applied motor.
     */
    targetType: HingeMotorType;
    /**
     * Target value of the motor depending on type: speed or angle.
     */
    targetValue: number;
}

/**
 * Settings that describe how the position of the object should be limited in respect to the applied forces.
 */
declare class HingeLimitSettings {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Enable or disable constraint limits.
     */
    enabled: boolean;
    /**
     * Minimum allowed angle (in radians), relative to the constraint resting state.
     */
    low: number;
    /**
     * Maximum allowed angle (in radians), relative to the constraint resting state.
     */
    high: number;
    /**
     * Controls how strictly constraint respects the limits.
     */
    bias: number;
    /**
     * Controls how strictly the limit is enforced. Greater values relate to more "bouncy" behaviour of the constraint.
     */
    relaxation: number;
}

/**
 * Constraints translation and a single axis of rotation.  See also: {@link ConstraintComponent}.
 */
declare class HingeConstraint extends Constraint {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Settings describing the independent force (motor) applied to the constraint.
     */
    motorSettings: HingeMotorSettings;
    /**
     * Settings limiting the behaviour of hinge constraint in respect to the applied forces.
     */
    limitSettings: HingeLimitSettings;
}

/**
 * A type of constraint that only allows rotation.  See also: {@link ConstraintComponent}.
 */
declare class PointConstraint extends Constraint {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used to apply specific restrictions on how a {@link SceneObject} with {@link BodyComponent} can move.
 * 
 * @remarks
 * This component allows developers to simulate certain types of mechanical connections or joints between objects.
 * 
 * @see [Constrain Types](/lens-studio/features/physics/physics-examples/physics#constraint-types) guide.
 */
declare class ConstraintComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The target is attached to the constraint by a fixed local-space matrix, calculated from the difference between the target's and the constraint's world-space transforms. This local-space matrix is generated on-load, or whenever the target is changed. Call this function to explicitly recalculate it for the current world-space transforms.
     */
    reanchorTarget(): void;
    /**
     * Reference to connected target collider. If null, constraint target is attached to a fixed world transform.
     */
    target: ColliderComponent;
    /**
     * Dictates constraint type and settings. Note, when setting this field it creates a copy of the constraint, rather than referencing it. So if you intend to modify the constraint after assigning it, you must do so on the component's constraint field, rather than the source constraint object.
     */
    constraint: Constraint;
    /**
     * Show the constraint with debug-draw.
     */
    debugDrawEnabled: boolean;
}

/**
 * Settings for the physical substance, such as friction and bounciness, of a collider. If unset, uses the default matter from the world settings.
 */
declare class Matter extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Coefficient of friction.
     * * The effective friction between two objects is the product of both objects' friction. So for example, the default between two objects is 0.5*0.5=0.25.
     * * Typical ranges are between 0 and 1, but larger values (up to 10) are allowed. This may be used to increase the effective friction when colliding against another object with low friction.
     * * This is a very simplified approximation of realistic friction, since it does not correctly take into account the combined surface characteristics of both objects. It also doesn't distinguish between static and dynamic friction.
     */
    friction: number;
    /**
     * Friction applied to rolling objects. This isn't physically realistic, but helps prevent objects from rolling indefinitely.
     */
    rollingFriction: number;
    /**
     * Friction applied to spinning objects. This isn't physically realistic, but helps prevent objects from spinning indefinitely.
     */
    spinningFriction: number;
    /**
     * Bounciness (AKA restitution), for static colliders. This is the proportion of energy preserved after a collision, in the range 0 to 1.
     * * This defaults to 1.0. Typically we use high bounciness for static colliders because they are unaffected by collision, and thus maximally preserve energy.
     * * The effective bounciness for a collision is the product of both colliding objects. So if your bounciness setting appears to have no effect, it probably means the object it's colliding with has 0 bounciness.
     */
    staticBounciness: number;
    /**
     * Bounciness, or restitution, for dynamic bodies. This is the proportion of energy preserved after a collision, in the range 0 to 1.
     * * This defaults to 0.0. Dynamic bounciness should usually be less than 1.0, to prevent energy from accumulating excessively (there is a certain amount of energy gained due to collision response).
     * * The effective bounciness for a collision is the product of both colliding objects. So if your bounciness setting appears to have no effect, it probably means the object it's colliding with has 0 bounciness.
     */
    dynamicBounciness: number;
}

/**
 * Performs collision tests (such as ray casts) in one or more world.
 * @see {@link Physics.createGlobalProbe}
 * @see {@link Physics.createRootProbe}
 * @see {@link WorldComponent.createProbe}
 */
declare class Probe extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns (via callback) the nearest intersection in any world. If there is no hit, the callback is called with a null hit argument.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    rayCast(start: vec3, end: vec3, hitCB: (hit: RayCastHit) => void): void;
    /**
     * Returns (via callback) all intersections in every world. The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    rayCastAll(start: vec3, end: vec3, hitCB: (hit: RayCastHit[]) => void): void;
    /**
     * Like rayCast(), but sweeps a sphere from start to end positions.  This is shorthand for calling shapeCast() with a SphereShape.  Returns (via callback) the nearest intersection.  If there is no hit, the callback is called with a null hit argument.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    sphereCast(radius: number, start: vec3, end: vec3, hitCB: (hit: RayCastHit) => void): void;
    /**
     * Like rayCastAll(), but sweeps a sphere from start to end positions. This is shorthand for calling shapeCastAll() with a SphereShape. Returns (via callback) all intersections. The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    sphereCastAll(radius: number, start: vec3, end: vec3, hitCB: (hit: RayCastHit[]) => void): void;
    /**
     * Like rayCast(), but sweeps a sphere from start to end positions. This is shorthand for calling shapeCast() with a SphereShape. Returns (via callback) the nearest intersection. If there is no hit, the callback is called with a null hit argument. Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    shapeCast(shape: Shape, start: vec3, startRot: quat, end: vec3, endRot: quat, hitCB: (hit: RayCastHit) => void): void;
    /**
     * Like rayCastAll(), but sweeps a shape from start to end transforms (expressed as position and rotation).  The provided shape can be created with one of the Shape.create*() functions, or referenced from a Physics.ColliderComponent.  Does not support MeshShape, and will throw an exception if attempted.  Returns (via callback) all intersections.  The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0. Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
     */
    shapeCastAll(shape: Shape, start: vec3, startRot: quat, end: vec3, endRot: quat, hitCB: (hit: RayCastHit[]) => void): void;
    /**
     * Filter settings applied to intersection tests.
     */
    filter: Physics.Filter;
    /**
     * Show intersection tests with debug-draw.
     */
    debugDrawEnabled: boolean;
}

/**
 * Hit results of a ray-cast provided to script. See {@link Probe}.
 */
declare class RayCastHit extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Set to `true` to skip remaining results, if any.
     */
    skipRemaining: boolean;
    /**
     * Distance from the ray origin to the point of intersection.
     * 
     * @readonly
     */
    distance: number;
    /**
     * Ray interpolant at the point of intersection, in the range [0, 1].
     * 
     * @readonly
     */
    t: number;
    /**
     * Position at the point of intersection.
     * 
     * @readonly
     */
    position: vec3;
    /**
     * Surface normal on the collider at the point of intersection.
     * 
     * @readonly
     */
    normal: vec3;
    /**
     * The collider that was hit.
     * 
     * @readonly
     */
    collider: ColliderComponent;
    /**
     * The hit triangle, if it exists. This is set on intersection with mesh-based colliders, and null otherwise.
     * 
     * @readonly
     */
    triangle: TriangleHit;
}

/**
 * Triangle hit information, available when a ray cast intersects a collision mesh.
 */
declare class TriangleHit extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Collision mesh containing the triangle.
     * 
     * @readonly
     */
    mesh: CollisionMesh;
    /**
     * Index of the triangle in the mesh. Note, this is the index of the triangle in the collision mesh, which won't necessarily correspond to the same index on the render mesh (depending on type and bake settings).
     * 
     * @readonly
     */
    index: number;
    /**
     * Vertex indices in the mesh. Note, these are the indices of the vertices in the collision mesh, which won't necessarily correspond to the same indices in the render mesh (depending on type and bake settings).
     * 
     * @readonly
     */
    vertexIndices: number[];
    /**
     * World-space vertex positions.
     * 
     * @readonly
     */
    vertexPositions: vec3[];
    /**
     * Barycentric coordinate of the hit on the triangle. This is used to interpolate values over the triangle surface. Essentially, these are weights for each of the 3 triangle vertices. For example, you can compute the hit position from vertex positions as: (V0\*b0 + V1\*b1 + V2\*b2). We already have the hit position in RayCastHit, but 'V' can be any interpolated value, such as color or texture coordinate.
     * 
     * @readonly
     */
    barycentricCoordinate: vec3;
}

/**
 * Groups {@link Physics} objects in its subtree into an independent world simulation.
 * 
 * @remarks
 * All simulation occurs within a physics world, each with its own configurable settings (e.g. gravity). When a physics object is placed under a {@link WorldComponent}, it belongs to that world and will only interact with other objects in that world. By default, there exists a root-level world for the scene, but multiple worlds may be created to run independent simulations.
 * 
 * @see [World Component](/lens-studio/features/physics/physics-component#physics-world)
 */
declare class WorldComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create an intersection probe for a specific world.
     */
    createProbe(): Probe;
    /**
     * Update order of this world relative to other worlds (lower values are earlier). The implicit root world order is 0, so worlds with negative order will update before the root world, and worlds with non-negative order update after.
     */
    updateOrder: number;
    /**
     * Reference to world settings. If not set, use the default world settings for the project.
     */
    worldSettings: Physics.WorldSettingsAsset;
}

/**
 * Defines the physical boundaries of an object for collision detection.
 * 
 * @remarks
 * It represents the shape and form of a 3D object, allowing Physics engine to determine when and how objects interact with each other within a scene.
 */
declare class CollisionMesh extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used for collision meshes that remain static and do not change their shape over time.
 */
declare class FixedCollisionMesh extends CollisionMesh {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Used for collision meshes that can change shape or form dynamically.
 */
declare class DeformingCollisionMesh extends CollisionMesh {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Base type for collision shapes.
 */
declare class Shape extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new MeshShape.
     */
    static createMeshShape(): MeshShape;
    /**
     * Create a LevelsetShape with default settings.
     */
    static createLevelsetShape(): LevelsetShape;
    /**
     * Create a SphereShape with default settings.
     */
    static createSphereShape(): SphereShape;
    /**
     * Create a CapsuleShape with default settings.
     */
    static createCapsuleShape(): CapsuleShape;
    /**
     * Create a BoxShape with default settings.
     */
    static createBoxShape(): BoxShape;
    /**
     * Create a ConeShape with default settings.
     */
    static createConeShape(): ConeShape;
    /**
     * Create a CylinderShape with default settings.
     */
    static createCylinderShape(): CylinderShape;
}

/**
 * A levelset collision shape. A levelset is an asset that is generated to approximate a mesh.
 */
declare class LevelsetShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Reference to the levelset asset.
     */
    asset: LevelsetColliderAsset;
}

/**
 * A sphere collision shape.
 */
declare class SphereShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Local radius of the sphere.
     */
    radius: number;
}

/**
 * A capsule collision shape. Also known as a capped cylinder.
 */
declare class CapsuleShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Lengthwise local axis along which the capsule is oriented.
     */
    axis: Axis;
    /**
     * Length of the capsule along its local axis. This is the distance between the two end-cap centers.
     */
    length: number;
    /**
     * Radius of the capsule cylinder, and its end-cap spheres.
     */
    radius: number;
}

/**
 * A box collision shape.
 */
declare class BoxShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The size of the box on each local axis.
     */
    size: vec3;
}

/**
 * A cylinder collision shape.
 */
declare class CylinderShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Lengthwise local axis along which the cylinder is oriented.
     */
    axis: Axis;
    /**
     * The length of the cylinder.
     */
    length: number;
    /**
     * The radius of the cylinder.
     */
    radius: number;
}

/**
 * A cone collision shape.
 */
declare class ConeShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Lengthwise local axis along which the cone is oriented.
     */
    axis: Axis;
    /**
     * The length of the cone.
     */
    length: number;
    /**
     * The radius of the cone.
     */
    radius: number;
}

/**
 * Allows meshes to be used as collision shapes, for ColliderComponent and BodyComponent.
 */
declare class MeshShape extends Shape {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets geometry from a render mesh. The render mesh is automatically converted to a collision mesh.
     */
    mesh: RenderMesh;
    /**
     * Specifies skinning component used to animate skinned meshes.
     */
    skin: Skin;
    /**
     * Bake mesh as a convex hull, generated from mesh colliders. This allows for irregular shapes to be used as dynamic bodies.
     * 
     * **Limitations:**
     * 
     * They are non-deforming. A hull may be generated from a deforming render mesh, but it will not deform with it. Because of this, intrinsically deforming mesh types will not work as convex hulls. For instance world and face meshes. In these cases the convex hull will exist, but be empty and won’t simulate.
     * 
     * It produces an approximation of the source mesh, reducing triangle count and eliminating concave areas.
     * Concave shapes may be composed of convex hulls in the scene graph. Splitting a concave mesh into convex hulls is known as "convex decomposition". It is an expensive process not supported by Studio, but there are many standalone tools available for this purpose (including plugins for 3D modeling apps). The resulting split mesh can be imported into Studio as a prefab.
     * 
     * Original triangle data is lost, so it is not available to script in ray casts.
     */
    convex: boolean;
}

/**
 * An instance of a Connected Lens session among a group of participants who were successfully invited into the experience.
 */
declare class MultiplayerSession extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sends a string message via the realtime backend.
     */
    sendMessage(message: string): void;
    /**
     * Sends a string message with a timeout in milliseconds. Allows messages to be dropped from the outgoing message queue when they become too old. Useful to ensure the quick delivery of subsequent messages.
     */
    sendMessageWithTimeout(message: string, timeoutMs: number): void;
    /**
     * Get a value stored within the specified scope.
     * @deprecated Use Realtime Stores instead
     * 
     * @deprecated
     */
    getStoredValue(key: string, scope: StorageScope, onRetrieved: (key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string) => void, onError: (code: string, description: string) => void): void;
    /**
     * List all values stored within the specified scope.
     * @deprecated Use Realtime Stores instead
     * 
     * @deprecated
     */
    listStoredValues(scope: StorageScope, cursor: string, onRetrieved: (values: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string[][], cursor: string) => void, onError: (code: string, description: string) => void): void;
    /**
     * Saves the value to the specified scope.
     * @deprecated Use Realtime Stores instead
     * 
     * @deprecated
     */
    setStoredValue(key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string, options: StorageOptions, onSaved: () => void, onError: (code: string, description: string) => void): void;
    /**
     * Deletes the value from the specified scope.
     * 
     * @deprecated
     */
    deleteStoredValue(key: string, scope: StorageScope, onDeleted: () => void, onError: (code: string, description: string) => void): void;
    /**
     * Creates a realtime store to share data within a multiplayer session. The realtime store will allow you to pass data between multiple connected users in the same experience, such as: syncing the position of objects in the scene, syncing the current game score, etc.
     */
    createRealtimeStore(options: RealtimeStoreCreateOptions, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void;
    /**
     * Deletes a realtime store.
     */
    deleteRealtimeStore(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void;
    /**
     * Requests for ownership of the realtime store.
     */
    requestRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void;
    /**
     * Sets the realtime store to unowned.
     */
    clearRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void;
    /**
     * Gets information about the current user, which includes their display name and unique `userID` which can be used to identify them in session.
     */
    getLocalUserInfo(localUserInfoCallback: (userInfo: ConnectedLensModule.UserInfo) => void): void;
    getLocalUserId(localUserIdCallback: (userId: string) => void): void;
    /**
     * Returns a unix timestamp in milliseconds of the current time according to the server. Useful for synchronizing time-based game events across devices.
     * `-1` will be returned if session is not connected to the server.
     */
    getServerTimestamp(): number;
    /**
     * Returns information about the passed in RealtimeStore.
     */
    getRealtimeStoreInfo(store: GeneralDataStore): ConnectedLensModule.RealtimeStoreCreationInfo;
    /**
     * Get the current Snapchat user in the session.
     * 
     * @snapOS
     */
    getSnapchatUser(userInfo: ConnectedLensModule.UserInfo, snapchatUserCallback: (snapchatUser: SnapchatUser) => void): void;
    /**
     * Get the SafeSnapchatUser for a user in the session.
     * This returns only non-sensitive user info (userId, bitmojiInfo, name) suitable for Bitmoji rendering.
     */
    getSafeSnapchatUser(userInfo: ConnectedLensModule.UserInfo, safeSnapchatUserCallback: (safeSnapchatUser: SafeSnapchatUser) => void): void;
    /**
     * Get all the Realtime Stores in the current session.
     * 
     * @readonly
     */
    allRealtimeStores: GeneralDataStore[];
    /**
     * @readonly
     */
    activeUsersInfo: ConnectedLensModule.UserInfo[];
    /**
     * Get the number of active users in the Session.
     * 
     * @readonly
     */
    activeUserCount: number;
}

/**
 * Base class for MultiplayerSession options. This class is not used directly - use ConnectedLensSessionOptions instead.
 */
declare class BaseMultiplayerSessionOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Provides a single host for every session. Useful when an experience has a single authority. This should not be used in latency sensitive situations. The creator of the session will by default be the host. If the host leaves, thee server will determine a new host and transfer all ownership of entities owned by the original host. Use with `onHostUpdated` API to get a callback.
     */
    hostManagementEnabled: boolean;
    /**
     * Function to be called when a connection to the realtime backend is established. All realtime requests can be called after this callback. When you invite others to join, a new session will be created, hence you should update your session handler with the argument passed in this callback.
     */
    onConnected: (session: MultiplayerSession, connectionInfo: ConnectedLensModule.ConnectionInfo) => void;
    /**
     * Function to be called when the connection to the realtime backend is lost, either via successful disconnect or passive disconnect due to error.
     */
    onDisconnected: (session: MultiplayerSession, disconnectInfo: string) => void;
    /**
     * Function to be called when a string-based message sent by sendMessage() is received from another user via the realtime backend.
     */
    onMessageReceived: (session: MultiplayerSession, userId: string, message: string, senderInfo: ConnectedLensModule.UserInfo) => void;
    /**
     * Function to be called when another user joins the session. When joining a session, the current user will get a callback for each of the existing active users in the current session. This way you can build a list of existing players in game.
     */
    onUserJoinedSession: (session: MultiplayerSession, userInfo: ConnectedLensModule.UserInfo) => void;
    /**
     * Function to be called when another user leaves the session, either deliberately or via passive disconnect due to error.
     */
    onUserLeftSession: (session: MultiplayerSession, userInfo: ConnectedLensModule.UserInfo) => void;
    /**
     * Callback function that will be executed when a realtime store is created.
     */
    onRealtimeStoreCreated: (session: MultiplayerSession, store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, creationInfo: ConnectedLensModule.RealtimeStoreCreationInfo) => void;
    /**
     * Callback function that will be executed when a realtime store is updated.
     */
    onRealtimeStoreUpdated: (session: MultiplayerSession, store: GeneralDataStore, key: string, updateInfo: ConnectedLensModule.RealtimeStoreUpdateInfo) => void;
    /**
     * Callback function that will be executed when a realtime store is deleted.
     */
    onRealtimeStoreDeleted: (session: MultiplayerSession, store: GeneralDataStore, deleteInfo: ConnectedLensModule.RealtimeStoreDeleteInfo) => void;
    /**
     * Callback function that will be executed when ownership of a realtime store is updated.
     */
    onRealtimeStoreOwnershipUpdated: (session: MultiplayerSession, store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, ownershipUpdateInfo: ConnectedLensModule.RealtimeStoreOwnershipUpdateInfo) => void;
    /**
     * Function to be called when a key is removed from a RealtimeStore.
     */
    onRealtimeStoreKeyRemoved: (session: MultiplayerSession, removalInfo: ConnectedLensModule.RealtimeStoreKeyRemovalInfo) => void;
    onHostUpdated: (session: MultiplayerSession, removalInfo: ConnectedLensModule.HostUpdateInfo) => void;
    /**
     * Function to be called when an error occurs in the session life cycle.
     */
    onError: (session: MultiplayerSession, code: string, description: string) => void;
}

declare class DirectMultiplayerSessionOptions extends BaseMultiplayerSessionOptions {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Settings for configuring a Connected Lens session.
 */
declare class ConnectedLensSessionOptions extends DirectMultiplayerSessionOptions {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a new ConnectedLensesOptions object.
     */
    static create(): ConnectedLensSessionOptions;
    /**
     * Function called when the session is created. The session creation type in this callback can be used to tell if the session is being created from scratch, or is being received from another user.
     */
    onSessionCreated: (session: MultiplayerSession, sessionCreationType: ConnectedLensSessionOptions.SessionCreationType) => void;
    /**
     * Defines maximum number of receipients that a user of connected lens can select while sharing a connected lens session via Invitation flow.
     */
    maxNumberOfInvitations: number;
}

/**
 * The options for the realtime store.
 */
declare class RealtimeStoreCreateOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates the realtime store options object.
     */
    static create(): RealtimeStoreCreateOptions;
    /**
     * The ownership model for the realtime store.
     */
    ownership: RealtimeStoreCreateOptions.Ownership;
    /**
     * The persistence model for the realtime store.
     */
    persistence: RealtimeStoreCreateOptions.Persistence;
    /**
     * An existing store to be used as the initial values for the real time store.
     */
    initialStore: GeneralDataStore;
    allowOwnershipTakeOver: boolean;
    /**
     * Writes an id string to the store that can be used to identify it later.
     */
    storeId: string;
}

/**
 * Enables the creation and management of networked Lens experiences, allowing for real-time communication and interaction between users through [Connected Lenses](/lens-studio/features/connected-lenses/connected-lenses-overview).
 * 
 * @remarks
 * Allows use of networked Lens communication capabilities such as real-time communication, co-located session creation and joining, and shared persistent storage.
 * It's recommended to only use one ConnectedLensModule per Lens.
 * 
 * @see [Connected Lenses Overview](/lens-studio/features/connected-lenses/connected-lenses-overview).
 */
declare class ConnectedLensModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create session with the provided options. Will also check if there is a session that can be created from a session sharetype received from other users.
     */
    createSession(sessionOptions: ConnectedLensSessionOptions): void;
    /**
     * Share the session with other users, specified by the SessionShareType. Note that if shared via Invitation, a new session will be created. Expect a new onConnected callback with the new session being passed in.
     */
    shareSession(sessionShareType: ConnectedLensModule.SessionShareType, onSessionShared: (session: MultiplayerSession, snapcode: Texture) => void): void;
}

/**
 * Settings for saving values in a MultiplayerSession.
 */
declare class StorageOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a new StorageOptions object.
     */
    static create(): StorageOptions;
    /**
     * The Storage Scope to set, get, or delete values from.
     */
    scope: StorageScope;
}

/**
 * Used to configure `Cloud Storage Module` with various options. Note: if `session` scoped storage is required, this option must be provided.
 */
declare class CloudStorageOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create options for use with Cloud Storage.
     */
    static create(): CloudStorageOptions;
    /**
     * If session scoped storage is required, set this property with the session object from {@link ConnectedLensModule}.
     */
    session: MultiplayerSession;
}

/**
 * An instance of Cloud Storage that can store data in a multiplayer experience.
 */
declare class CloudStore extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Gets a value from the persistence backend. Note that scope must match that which was used when the value was originally saved.
     */
    getValue(key: string, readOptions: CloudStorageReadOptions, onRetrieved: (key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string) => void, onError: (code: string, description: string) => void): void;
    /**
     * Sets a value in the persistence backend.
     */
    setValue(key: string, value: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string, writeOptions: CloudStorageWriteOptions, onSaved: () => void, onError: (code: string, description: string) => void): void;
    /**
     * Lists values from the persistence backend. Note that the scope must match that which was used when the values were originally saved.
     */
    listValues(listOptions: CloudStorageListOptions, onRetrieved: (values: mat4 | mat3 | mat2 | vec4 | vec2 | vec3 | boolean | quat | number | string[][], cursor: string) => void, onError: (code: string, description: string) => void): void;
    /**
     * Deletes a value from the persistence backend. Note that the scope must match that which was used when the value was originally saved.
     */
    deleteValue(key: string, readOptions: CloudStorageReadOptions, onDeleted: () => void, onError: (code: string, description: string) => void): void;
}

/**
 * Options associated with the getValue/deleteValue methods for Cloud Storage.
 */
declare class CloudStorageReadOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Options associated with the getValue/deleteValue methods for Cloud Storage.
     */
    static create(): CloudStorageReadOptions;
    /**
     * The scope of the request.
     */
    scope: StorageScope;
}

/**
 * Options associated with the setValue method for Cloud Storage.
 */
declare class CloudStorageWriteOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates the setValue options object for Cloud Storage.
     */
    static create(): CloudStorageWriteOptions;
    /**
     * The scope of the write option.
     */
    scope: StorageScope;
}

/**
 * Options associated with the listValues method call.
 */
declare class CloudStorageListOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates the listValues options object for Cloud Storage
     */
    static create(): CloudStorageListOptions;
    /**
     * The scope of the listValues request. Required
     */
    scope: StorageScope;
    /**
     * The position in the resulting list. Each time a list is requested, 10 entities are returned. If no cursor is provided, first 10 entities will be returned.
     */
    cursor: string;
}

/**
 * Provides access to Cloud Storage capabilities.
 * 
 * @see [Cloud Storage Overview](/lens-studio/features/lens-cloud/lens-cloud-overview).
 */
declare class CloudStorageModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the Cloud Store. Future calls to this method will return the same cloud store, even if the options change.
     */
    getCloudStore(options: CloudStorageOptions, onCloudStoreReady: (store: CloudStore) => void, onError: (code: string, description: string) => void): void;
}

/**
 * Allows the Lens to incorporate transcription, keyword detection, voice command detection and other NLP based features into Lenses.
 * 
 * @see [VoiceML](/lens-studio/features/voice-ml/speech-recognition) guide.
 * 
 * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
 * 
 * @deprecated
 */
declare class VoiceMLModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts transcribing the user audio, the NLP model is connected and sends back results using an event, optionally could request for transcription and interim results.  Notice, you can only `startListening`, after microphone permissions have been granted. It is recommended to use `startListening` method only after `onListeningEnabled` callback was called.
     * 
     * @deprecated
 * @exposesUserData
     */
    startListening(options: VoiceML.ListeningOptions): void;
    /**
     * Stops voice commands.
     * 
     * @deprecated
     */
    stopListening(): void;
    /**
     * Allows the user to provide voice commands for the VoiceML to execute on behalf of the users.  Current supported commands: "Take a Snap", "Start Recording", "Stop Recording". In case a command was detected, it will be automtically executed by the system and returned as part of the {@link VoiceML.NlpCommandResponse} in the `onListeningUpdate` callback. You can retrieve the command that was executed using the following snippet:
     * 
     * ```js
     * var onUpdateListeningEventHandler = function(eventArgs) {
     *     var commandResponses = eventArgs.getCommandResponses();
     *     var nlpResponseText = "";
     * 
     *     for (var i = 0; i < commandResponses.length; i++) {
     *         var commandResponse = commandResponses[i];
     *         nlpResponseText += "Command Response: " + commandResponse.modelName + "\n command: " + commandResponse.command;
     *     }
     * }
     * ```
     * 
     * @deprecated
     */
    enableSystemCommands(): void;
    /**
     * Registers a callback, which will be called with interim transcription or related NLP models.
     * 
     * @deprecated
 * @readonly
     */
    onListeningUpdate: event1<VoiceML.ListeningUpdateEventArgs, void>;
    /**
     * Registers a callback, which will be called in case the VoiceML module can't process the inputs. Most errors are due to network connectivity, or misconfigured NLP inputs.
     * 
     * @deprecated
 * @readonly
     */
    onListeningError: event1<VoiceML.ListeningErrorEventArgs, void>;
    /**
     * Registers a callback which will be called when microphone permissions are granted to the Lens, the microphone is initialized, and is actively listening. The expected design pattern is to start the listening session once those permissions have been granted:
     * 
     * ```js
     * //@input Asset.VoiceMLModule vmlModule
     * var onListeningEnabledHandler = function(){
     *     script.vmlModule.startListening(options);
     * }
     * script.vmlModule.onListeningEnabled.add(onListeningEnabledHandler);
     * ```
     * 
     * @deprecated
 * @readonly
     */
    onListeningEnabled: event0<void>;
    /**
     * Registers a callback which will be called when microphone permissions are taken from the lens. `stopListening()` is implicitly called in such case.
     * 
     * @deprecated
 * @readonly
     */
    onListeningDisabled: event0<void>;
}

/**
 * Allows generation of audio from a given text with a variety of options.
 * 
 * @remarks
 * 
 * You can use only one `TextToSpeechModule` in a Lens. However, its methods can be called multiple times in parallel if needed.
 * 
 * @see {@link TextToSpeech.Options}
 * @see [Text To Speech](/lens-studio/features/voice-ml/text-to-speech) guide.
 * 
 * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
 * 
 * @deprecated
 */
declare class TextToSpeechModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides access to [Question Answering Service](/lens-studio/features/voice-ml/q&a-template-guide) powered by VoiceML.
 * 
 * @remarks
 * Allows to answer questions based on provided text.
 */
declare class DialogModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sends a request to ask questions using the DialogModule. `context` is the text the model will use as context for answering the question. `questions` is a list of questions to ask. When answers are ready, `onQuestionsAnswerComplete` will be called with a list of `Dialog.Answer` objects corresponding to the questions in the `questions` list. `onQuestionsAnswerError` will be called if any error occurs.
     */
    askQuestions(context: string, questions: string[], onQuestionsAnswerComplete: (answers: Dialog.Answer[]) => void, onQuestionsAnswerError: (error: number, description: string) => void): void;
}

/**
 * A texture of the map at the given location of a `LocationAsset`.
 */
declare class MapTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * A function that gets called when location data fails to download.
     * 
     * @readonly
     */
    onFailed: event0<void>;
    /**
     * A function that gets called when location data is downloaded.
     * 
     * @readonly
     */
    onReady: event0<void>;
    /**
     * The location asset associated with the `MapTextureProvider`.
     */
    location: LocationAsset;
}

/**
 * Allows access to map texture data around a specified location.
 * 
 * @see [Map Component](/lens-studio/features/location-ar/map-component) guide.
 */
declare class MapModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a new texture which holds a `MapTextureProvider`.
     */
    createMapTextureProvider(): Texture;
    /**
     * Returns the position of the marker (relative to the associated map tile) based on the specified `longitude`, `latitude` and `location`. The top left corner of the provided `location` has a value of `[0,0]` and the right down corner has a value of `[1.1]`.
     */
    longLatToImageRatio(longitude: number, latitude: number, location: LocationAsset): vec2;
}

/**
 * The options used with `requestBitmoji2DResource`.
 */
declare class Bitmoji2DOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create the option.
     */
    static create(): Bitmoji2DOptions;
    /**
     * The user which the Bitmoji should represent.
     */
    user: SafeSnapchatUser;
    /**
     * The pose id for the 2D Bitmoji.
     */
    poseId: string;
}

/**
 * The `DynamicResource` of a 2D Bitmoji which can be loaded with `RemoteMediaModule`.
 */
declare class Bitmoji2DResource extends DynamicResource {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * The options used with `requestBitmoji3DResource`
 */
declare class Bitmoji3DOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create the option.
     */
    static create(): Bitmoji3DOptions;
    /**
     * The user which the Bitmoji should represent.
     */
    user: SafeSnapchatUser;
    /**
     * Options used with {@link requestBitmoji3DResourceWithOptions}
     */
    requestType: Bitmoji3DOptions.RequestType;
    /**
     * Used to set the animation params for the request type.
     */
    animationParams: Bitmoji3DOptions.AnimationParams;
    /**
     * Used to set the custom params for the request type. You shouldn't need to modify these values directly. Instead you can use this API via the [Bitmoji Suite](/lens-studio/features/bitmoji-suite/overview).
     */
    customParams: Bitmoji3DOptions.CustomParams;
    /**
     * Used to set optimization parameters for the Bitmoji 3D asset.
     */
    optimizationParams: Bitmoji3DOptions.OptimizationParams;
}

/**
 * Provides information about the current user's 3D Bitmoji avatar to be downloaded via the RemoteMediaModule.
 */
declare class Bitmoji3DResource extends DynamicResource {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides access to functionalities related to [Bitmoji](/lens-studio/features/bitmoji-avatar/overview) avatar.
 * 
 * @see [Bitmoji Overview](/lens-studio/features/bitmoji-avatar/overview) guide.
 */
declare class BitmojiModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Request the current user's 3D Bitmoji avatar.
     */
    requestBitmoji3DResource(callback: (resource: Bitmoji3DResource) => void): void;
    /**
     * Request the Bitmoji3D resource.
     */
    requestBitmoji3DResourceWithOptions(options: Bitmoji3DOptions, callback: (resource: Bitmoji3DResource) => void): void;
    /**
     * Request a base Bitmoji3D resource with explicit body customization options.
     * Uses the default base avatar and applies body parameters from `baseBodyParams` if provided.
     * If `baseBodyParams` is not provided or missing values, falls back to cached avatar data.
     */
    requestBaseBitmoji3DResourceWithOptions(options: Bitmoji3DOptions, baseBodyParams: Bitmoji3DOptions.BaseBodyParams, callback: (resource: Bitmoji3DResource) => void): void;
    /**
     * Returns a `DynamicResource` via the provided `callback`, which can be resolved into a texture using `RemoteMediaModule`.
     */
    requestBitmoji2DResource(options: Bitmoji2DOptions, callback: (resource: Bitmoji2DResource) => void): void;
    /**
     * Creates a mock user with a deterministic Bitmoji avatar.
     * The returned user can be set on `Bitmoji3DOptions.user` or `Bitmoji2DOptions.user` to load a Bitmoji
     * without requiring a real Snapchat user.
     * The same `seed` value always produces the same avatar within a given lens,
     * while different seeds produce different avatars.
     * @param seed A non-empty string used to deterministically select the avatar.
     */
    createMockUser(seed: string): SafeSnapchatUser;
}

/**
 * Provides access to a specific camera on Spectacles device.
 * 
 * @remarks
 * Useful for requesting a specific camera on Spectacles or requesting images from both cameras simultaneously.
 * 
 * @see [Camera Module](/spectacles/about-spectacles-features/apis/camera-module) guide.
 * 
 * @exposesUserData
 * @snapOS
 */
declare class CameraModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates a camera request object.
     * 
     * @exposesUserData
 * @snapOS
     */
    static createCameraRequest(): CameraModule.CameraRequest;
    /**
     * Spectacles: create a {@link CameraImage.ImageRequest}. This object can be used to configure a request for a high resolution image of the user's camera stream. The resolution of this image will be fixed to 3200x2400.
     * 
     * @exposesUserData
 * @snapOS
     */
    static createImageRequest(): CameraModule.ImageRequest;
    /**
     * Returns a {@link Texture} whose provider is {@link CameraTextureProvider} which provides images from the requested camera ID.
     * 
     * @exposesUserData
 * @snapOS
     */
    requestCamera(request: CameraModule.CameraRequest): Texture;
    /**
     * Spectacles: Request a still image of the user's camera stream. Unlike {@CameraModule.requestCamera}, this method takes more time but yields a higher resolution image (3200x2400) suitable for tasks like OCR. This method is asynchronous and when complete will return an {@link ImageFrame} that contains a {@Texture} that can be attached to a visual.
     * 
     * ```js
     * let cameraModule = require("LensStudio:CameraModule");
     * let imageRequest = CameraModule.createImageRequest();
     * 
     * try {
     *   let imageFrame = await cameraModule.requestImage(imageRequest);
     * 
     *   // Use the texture in some visual
     *   script.image.mainPass.baseTex = imageFrame.texture;
     *   let timestamp = imageFrame.timestampMillis; // scene-relative time
     * } catch (error) {
     *   print(`Still image request failed: ${error}`);
     * }
     * ```
     * 
     * @exposesUserData
 * @snapOS
     */
    requestImage(request: CameraModule.ImageRequest): Promise<ImageFrame>;
    /**
     * Get the list of resolutions this hardware camera can provide.
     * 
     * @exposesUserData
 * @snapOS
     */
    getSupportedImageResolutions(): vec2[];
}

/**
 * Spectacles: ImageFrame contains the results of a still image request initiated from the {@link CameraModule}. Still images are high resolution images of the user's current camera stream.
 * 
 * @exposesUserData
 * @snapOS
 */
declare class ImageFrame extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The texture of the ImageFrame.
     * 
     * @readonly
 * @exposesUserData
 * @snapOS
     */
    texture: Texture;
}

/**
 * WebPageTextureProvider is the associated texture control that can be accessed from the `texture.control` property. This allows you to call functions such as `loadUrl(“https://snap.com”)` or to pass input events to.
 * 
 * _Note: Most functionality will require the `onReady` event to have been called. Any calls before this event may cause an exception._
 * 
 * @see {@link RemoteServiceModule#createWebView}
 * 
 * @experimental
 * @snapOS
 */
declare class WebPageTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Request a url to be loaded.
     * 
     * @experimental
 * @snapOS
     */
    loadUrl(url: string): void;
    /**
     * Navigate forward in the web history.
     * 
     * @experimental
 * @snapOS
     */
    goForward(): void;
    /**
     * Navigate back in the web history.
     * 
     * @experimental
 * @snapOS
     */
    goBack(): void;
    /**
     * Request the current page to be reloaded.
     * 
     * @experimental
 * @snapOS
     */
    reload(): void;
    /**
     * Request the current page loading to stop.
     * 
     * _Note: Has no effect if the page is already loaded._
     * 
     * _Note: Does not stop scripts on the webpage._
     * 
     * @experimental
 * @snapOS
     */
    stop(): void;
    /**
     * Get the current user-agent for the webview.
     * 
     * @experimental
 * @snapOS
     */
    getUserAgent(): string;
    /**
     * Set a custom user-agent for the webview.
     * 
     * _Note: By default all webview’s will have the same user-agent set by the platform. This can be used to target Spectacles specific websites._
     * 
     * @experimental
 * @snapOS
     */
    setUserAgent(userAgent: string): void;
    /**
     * Touch will allow the lens creator to pass input events from the Lens to the WebView.
     * 
     * - **id:** of the touch (in the case of multi-finger, etc), for continuous interactions it is required they share the same id.
     * - **state:** What type of action is preformed.
     * - **x:** the x coordinate of the touch, in WebView space (2d).
     * - **y:** the Y coordinate of the touch, in WebView space (2d).
     * 
     * _Note: Using the WebView from the Asset Library will have already implemented this logic with SIK and Hand Tracking and Mobile Controller and it is not expected for creators to re-implement this handling unless they wish to provide further customization and options._
     * 
     * @experimental
 * @snapOS
     */
    touch(id: number, state: TouchState, x: number, y: number): void;
    /**
     * Check if there is any forward history on the web stack.
     * 
     * @readonly
 * @experimental
 * @snapOS
     */
    canGoForward: boolean;
    /**
     * Check if there is any back history on the web stack.
     * 
     * @readonly
 * @experimental
 * @snapOS
     */
    canGoBack: boolean;
    /**
     * This event signals that the webview is ready for performing actions such as `loadUrl`, etc. This also is when the WebView should be visible on the {@link Texture} that was originally provided.
     * 
     * @readonly
 * @experimental
 * @snapOS
     */
    onReady: event0<void>;
}

/**
 * Used to track objects in 3D space, such as body, hands.
 * 
 * @see [3D Body and Hand Tracking](/lens-studio/features/ar-tracking/body/object-tracking-3d) guide.
 */
declare class ObjectTracking3D extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns whether this object is currently being tracked.
     */
    isTracking(): boolean;
    /**
     * Returns whether the specified attachment point is being tracked.
     */
    isAttachmentPointTracking(name: string): boolean;
    /**
     * Returns all SceneObjects currently attached to the specified point.
     */
    getAttachedObjects(name: string): SceneObject[];
    /**
     * Creates a SceneObject which is attached to the specified attachment point.
     */
    createAttachmentPoint(name: string): SceneObject;
    /**
     * Attaches the SceneObject to the specified attachment point.
     */
    addAttachmentPoint(name: string, object: SceneObject): void;
    removeAttachmentPoint(object: SceneObject): void;
    /**
     * Asset containing tracking parameters, such as the tracking model and specific options.
     */
    trackingAsset: Object3DAsset;
    /**
     * Function called when tracking begins.
     */
    onTrackingStarted: () => void;
    /**
     * Function called when tracking is lost.
     */
    onTrackingLost: () => void;
    /**
     * Index of the object to track, starting at 0. Useful when tracking multiple instances of the same type of object.
     */
    objectIndex: number;
    /**
     * Strategy for updating attached SceneObjects.
     */
    trackingMode: ObjectTracking3D.TrackingMode;
    /**
     * When true, the attached root SceneObject's world position will be updated to match the tracked object's world position.
     */
    trackPosition: boolean;
    /**
     * Whether world scale is applied or not.
     */
    attachmentModeInheritScale: boolean;
    /**
     * Whether world rotation is applied or not.
     */
    attachmentModeInheritRotation: boolean;
    /**
     * The data provided by the tracker on this component.
     * 
     * @see {@link SpectaclesHandSpecificData}
     * 
     * @readonly
 * @wearableOnly
     */
    objectSpecificData: ObjectSpecificData;
}

/**
 * Provider for full Body Mesh render object.
 */
declare class BodyRenderObjectProvider extends RenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Index of body in scene to track.
     */
    bodyIndex: number;
    /**
     * When true, hand tracking will be enabled.
     */
    handTrackingEnabled: boolean;
    /**
     * Enable main Body Mesh geometry.
     */
    bodyGeometryEnabled: boolean;
    /**
     * Enable left hand mesh.
     */
    leftHandGeometryEnabled: boolean;
    /**
     * Enable right hand mesh.
     */
    rightHandGeometryEnabled: boolean;
    /**
     * Enable head mesh.
     */
    headGeometryEnabled: boolean;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope;
}

/**
 * Provides surface normal values of the tracked body encoded as RGBA (x, y, z, confidence) in `R8G8B8A8_UNORM` format in screen resolution. The XYZ values may need to be remapped from [0 -> 1] to [-1 -> 1] using the "Normal Map" mode of the `Texture 2D Sample` node in Material Editor.
 */
declare class BodyNormalsTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the body to track. The first body detected is `0`.
     */
    bodyIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope;
}

/**
 * Provides depth values of the tracked body encoded as D24_UNORM_S8_UINT in screen resolution. Depth is normalized between 0-1, and the stencil component is ignored. The values may be remapped from normalized units (0 to 1) to negative centimeters from the camera (-near in cm to -far in cm) using the `Depth Map` mode of the `Texture 2D Sample` node in Material Editor.
 */
declare class BodyDepthTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the body to track. The first body detected is `0`.
     */
    bodyIndex: number;
    /**
     * Near plane value in cm, Read only, always outputs 1.0.
     * 
     * @readonly
     */
    zNear: number;
    /**
     * Far plane value in cm, Read only, always outputs 1000.0.
     * 
     * @readonly
     */
    zFar: number;
    /**
     * A background depth (where confidence < `minimumConfidence`) is represented by 1.0 (zFar). A value from 0.0 to 1.0 (default value 0.5).
     */
    minimumConfidence: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope;
}

/**
 * Base class for configuring object tracking in the {@link ObjectTracking3D} component.
 */
declare class Object3DAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Configures 3D Body Tracking for the {@link ObjectTracking3D} component.
 * 
 * @see [3D Body and Hand Tracking](/lens-studio/features/ar-tracking/body/object-tracking-3d) guide.
 */
declare class BodyTrackingAsset extends Object3DAsset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * When true, hand tracking will be enabled.
     */
    handTrackingEnabled: boolean;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope;
}

/**
 * The person that a tracker should use. Allows you to to apply the same person index to a group of Components. Useful for correlating tracking between Body Tracking and Face Tracking.
 */
declare class PersonTrackingScope extends TrackingScope {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The scope that the current PersonTrackingScope be based on.
     */
    parentScope: TextureTrackingScope;
    /**
     * The person to track. The first person is 0, the second is 1, and so on.
     */
    personIndex: number;
}

/**
 * Configures 3D Upper Body Tracking for the {@link ObjectTracking3D} component.
 * 
 * @remarks
 * It is optimized to track with the face and in selfie use cases.
 * 
 * @see [Upper Body Tracking](https://developers.snap.com/lens-studio/features/ar-tracking/body/upper-body-tracking) guide.
 */
declare class UpperBodyTrackingAsset extends Object3DAsset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides a render object of the upper body, without the head. Unlike `BodyMesh` which handles the whole body, this model is optimized to work better with `FaceMesh` and selfie use cases.
 */
declare class UpperBodyRenderObjectProvider extends MeshRenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The index of the face whose upper body you want to render. The first face detected is `0`, the second `1`, and so on.
     */
    faceIndex: number;
}

/**
 * Provides segmentation confidence values encoded in the `R` channel. The texture has the {@link Colorspace#RGBA} format in screen resolution, but `G`, `B`, `A` channels should be ignored.
 */
declare class BodyInstanceSegmentationTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Which body to segment if multiple are available.
     */
    bodyIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope;
    /**
     * Refine the edge of the segmentation of the body.
     */
    refineEdge: boolean;
    /**
     * Invert the segmentation of the body.
     */
    invertMask: boolean;
}

/**
 * Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals.
 * 
 * @deprecated Use a {@link PostEffectVisual} with a {@link Material} using {@link WorldDepthTextureProvider} instead
 * 
 * @remarks
 * Only works in some cases where depth information is supplied by the device.
 * 
 * @deprecated
 */
declare class DepthSetter extends PostEffectVisual {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Provides depth information of the video feed that the Lens is being applied to when available.
 * Can be accessed from `mainPass.baseTex.control` of a Spectacles Depth material.
 */
declare class DepthTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Get the depth at the given `point`
     * 
     * @exposesUserData
     */
    sampleDepthAtPoint(point: vec2): number;
}

/**
 * Provides depth information of the video feed that the Lens is being applied to when available.
 */
declare class WorldDepthTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the depth at the passed in point (values between 0 and 1, where (0, 0) represents the top-left corner) of the physical camera. The depth returned samples raw depth captured by the camera--that is: the depth of the real world in cm. The depth will be provided as a positive number.
     * @deprecated Prefer the newer {@link DepthModule} APIs.
     * 
     * @deprecated
 * @exposesUserData
     */
    sampleDepthAtPoint(point: vec2): number;
}

type ARDepthTextureProvider = WorldDepthTextureProvider;

/**
 * Provides access to a {@link DepthFrameSession} on Spectacles device.
 * 
 * @remarks
 * Used for requesting {@link DepthFrameData}.
 * 
 * @see [Depth Module](/spectacles/about-spectacles-features/apis/depth-module) guide.
 * 
 * @exposesUserData
 */
declare class DepthModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a {@link DepthFrameSession}.
     * 
     * @exposesUserData
     */
    createDepthFrameSession(): DepthFrameSession;
}

/**
 * Used for receiving {@link DepthFrameData} on Spectacles device.
 * 
 * @exposesUserData
 */
declare class DepthFrameSession extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Starts depth estimation for the {@link DepthFrameSession} on Spectacles.
     * 
     * @remarks
     * The {@link DepthFrameSession.onNewFrame} events will only be triggered after start has been called.
     * 
     * @exposesUserData
     */
    start(): void;
    /**
     * Stops depth estimation for the {@link DepthFrameSession} on Spectacles.
     * 
     * @exposesUserData
     */
    stop(): void;
    /**
     * Register a callback to be called whenever new {@link DepthFrameData} is available. On Spectacles, the depth update rate is different from the color frame update rate and the render update rate.
     * 
     * @readonly
 * @exposesUserData
     */
    onNewFrame: event1<DepthFrameData, void>;
}

/**
 * The depth frame data as provided by the {@link DepthFrameSession.onNewFrame}.
 * 
 * @exposesUserData
 */
declare class DepthFrameData extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The timestamp of the start of exposure of the frame in seconds.
     * 
     * @readonly
 * @exposesUserData
     */
    timestampSeconds: number;
    /**
     * The depth frame as a linear Float32Array in centimeters.
     * 
     * @readonly
 * @exposesUserData
     */
    depthFrame: Float32Array;
    /**
     * Provides information about the depth device camera.
     * 
     * @readonly
 * @exposesUserData
     */
    deviceCamera: DeviceCamera;
    /**
     * The pose of the device reference relative to the frame of reference of the tracked device position.
     * 
     * @readonly
 * @exposesUserData
 * @wearableOnly
     */
    toWorldTrackingOriginFromDeviceRef: mat4;
}

/**
 * Applies the device's gyroscope rotation to the SceneObject it is attached to.
 * @deprecated Use {@link DeviceTracking} with Tracking Mode set to rotation. See the [Tracking Modes](/lens-studio/features/ar-tracking/world/tracking-modes) guide for more information.
 * 
 * @deprecated
 */
declare class Gyroscope extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the Gyroscope's rotation will be inverted.
     * 
     * @deprecated
     */
    invertRotation: boolean;
    /**
     * If enabled, the Gyroscope's rotation will be inverted when the front facing camera is active.
     * 
     * @deprecated
     */
    invertOnFrontCamera: boolean;
}

/**
 * Enables a {@link SceneObject} to align with the movements and orientation of the user's device. Provides tracking modes such as `Surface`, `Rotation`, and `World`.
 * 
 * @remarks
 * 
 * Usually added to SceneObject with {@link Camera} component.
 * 
 * If using `Surface` tracking mode, adding this to a SceneObject enables surface tracking for the scene, and moves the
 * object to a position and rotation that matches the physical camera's pose in the world. Surface tracking can also be enhanced
 * with native AR by enabling the `Use Native AR` option in the Inspector panel, or through script by setting the
 * component's {@link SurfaceOptions.enhanceWithNativeAR} property.
 * 
 * If using `Rotation` tracking mode, adding this to a SceneObject will apply the device's real world rotation to the object.
 * 
 * If using `World` tracking mode, adding this to a SceneObject enables native AR tracking for the scene, and moves the
 * object to a position and rotation that matches the physical camera's pose in the world.
 * 
 * @see [Tracking Modes](/lens-studio/features/ar-tracking/world/tracking-modes) guide for more information.
 */
declare class DeviceTracking extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Offsets the default position of the World Tracking surface origin by `offset`.
     * Avoid using a `y` value of zero in `offset`, because it may cause problems with tracking.
     * If used outside of `Initialized` or `TurnOnEvent`, you will need to call `resetTracking()` to apply the offset.
     * Note: calling `resetTracking()` will overwrite the `x` and `z` components of the offset.
     */
    setWorldOriginOffset(offset: vec3): void;
    /**
     * Resets the World Tracking origin to the point on the surface plane aligned with the screen position `position`.
     * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
     */
    resetTracking(position: vec2): void;
    /**
     * Requests that a DeviceTrackingMode be used. This requested change may not happen immediately.
     */
    requestDeviceTrackingMode(val: DeviceTrackingMode): void;
    /**
     * Returns the DeviceTrackingMode currently requested to be used.
     * This may be different from the actual DeviceTrackingMode being used.
     */
    getRequestedDeviceTrackingMode(): DeviceTrackingMode;
    /**
     * Returns the actual DeviceTrackingMode being used. This may be different from the requested DeviceTrackingMode.
     */
    getActualDeviceTrackingMode(): DeviceTrackingMode;
    /**
     * Returns whether the DeviceTrackingMode is supported.
     */
    isDeviceTrackingModeSupported(mode: DeviceTrackingMode): boolean;
    /**
     * Performs a raycast against world meshes along a ray from world position `from` to world position `to`.
     * Returns detailed intersection information for each mesh surface hit by the ray.
     * 
     * @param from Starting point of the ray in world space coordinates
     * @param to Ending point of the ray in world space coordinates
     * @returns Array of {@link TrackedMeshHitTestResult} objects, sorted by distance from `from` (nearest first).
     *          Returns an empty array if no meshes are hit.
     * 
     * @remarks
     * - World mesh tracking must be supported by the device (check {@link WorldTrackingCapabilities.sceneReconstructionSupported})
     * - Only available when world mesh tracking is enabled via a World Mesh in the scene graph or {@link WorldOptions.enableWorldMeshesTracking}
     * - Requires the {@link DeviceTracking} component to be in `World` tracking mode
     */
    raycastWorldMesh(from: vec3, to: vec3): TrackedMeshHitTestResult[];
    /**
     * Performs a raycast against world meshes from a screen position. The ray starts at the camera's near plane
     * and extends through the camera's far plane at the given screen coordinates.
     * 
     * @param screenPos Screen coordinates in normalized device coordinates ([0-1], [0-1]), where (0,0) is the
     *                  top-left of the screen and (1,1) is the bottom-right
     * @returns Array of {@link TrackedMeshHitTestResult} objects, sorted by distance from camera (nearest first).
     *          Returns an empty array if no meshes are hit.
     * 
     * @remarks
     * - World mesh tracking must be supported by the device (check {@link WorldTrackingCapabilities.sceneReconstructionSupported})
     * - Only available when world mesh tracking is enabled via a World Mesh in the scene graph or {@link WorldOptions.enableWorldMeshesTracking}
     * - The {@link DeviceTracking} component must be attached to a {@link SceneObject} with a {@link Camera} component
     * - Requires the {@link DeviceTracking} component to be in `World` tracking mode
     * - The ray length is determined by the camera's far clip plane distance
     */
    hitTestWorldMesh(screenPos: vec2): TrackedMeshHitTestResult[];
    /**
     * Creates a TrackedPoint at world position `worldPos` and world rotation `worldRot`.
     * When creating a TrackedPoint, the {@link DeviceTracking} component must be set to `World` mode.
     */
    createTrackedWorldPoint(worldPos: vec3, worldRot: quat): TrackedPoint;
    /**
     * Calculates a histogram of world mesh surfaces within a sphere at the given world position and radius. Only available when world mesh tracking is supported and enabled.
     */
    calculateWorldMeshHistogram(center: vec3, radius: number): TrackedMeshHistogramResult;
    /**
     * Returns the 3D point cloud representing important features visible by the camera.
     * 
     * @exposesUserData
     */
    getPointCloud(): PointCloud;
    /**
     * This capability is no longer available.
     * 
     * @deprecated
     */
    getDevicePath(): BasicTransform[];
    /**
     * This capability is no longer available.
     * 
     * @deprecated
     */
    getDevicePathIndex(): number;
    /**
     * Access to the {@link TrackingStatus} for this Component. Can be used to check if tracking is available and subscribe to events for status changes.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
    /**
     * Returns the World Tracking Capabilities of the current device.
     * 
     * @readonly
     */
    worldTrackingCapabilities: WorldTrackingCapabilities;
    /**
     * Helps to improve surface tracking accuracy while the target `SceneObject` is being moved.
     * 
     * @deprecated
     */
    surfaceTrackingTarget: SceneObject;
    /**
     * Used to access rotation tracking settings.
     */
    rotationOptions: RotationOptions;
    /**
     * Used to access surface tracking settings.
     */
    surfaceOptions: SurfaceOptions;
    /**
     * Returns the WorldOptions object of this component, which can be used to control World Tracking settings.
     */
    worldOptions: WorldOptions;
}

type WorldTracking = DeviceTracking;

/**
 * A point on the real world not attached to any detected plane.
 */
declare class TrackedPoint extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Stops tracking this point and invalidates the TrackedPoint.
     * After calling this method, the TrackedPoint will no longer update its position.
     */
    stopTracking(): void;
    /**
     * Provides the world position of the tracked point.
     * 
     * @readonly
     */
    position: vec3;
    /**
     * Provides the orientation of the tracked point.
     * 
     * @readonly
     */
    orientation: quat;
}

/**
 * Allows you to bind the position and rotation of an object with this component to a {@link TrackedPoint}.
 */
declare class TrackedPointComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns whether the trackedPoint is valid.
     * 
     * @readonly
     */
    isValid: boolean;
    /**
     * The {@link TrackedPoint} which this component will copy the position and rotation from.
     */
    trackedPoint: TrackedPoint;
}

/**
 * If a {@link DeviceTracking} component is present in the scene, this event is triggered when
 * the tracking is restarted (typically when the Lens starts, or if the user taps the ground).
 */
declare class WorldTrackingResetEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
}

type SurfaceTrackingResetEvent = WorldTrackingResetEvent;

/**
 * Triggered when plane(s) are newly detected. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, {@link DeviceTracking} component must be set to `World` mode to orient the Camera relative to the planes correctly.
 */
declare class WorldTrackingPlanesAddedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of newly added {@link TrackedPlane}.
     */
    getPlanes(): TrackedPlane[];
}

/**
 * Triggered when plane(s) are no longer detected.  This usually happens when two planes merge into one.  Planes persist when no longer seen by camera(s) and when previously detected objects move (e.g. a door is opened) to create a static scene. {@link DeviceTracking} component must be set to `World` mode to orient the Camera relative to the planes correctly.
 */
declare class WorldTrackingPlanesRemovedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of {@link TrackedPlane} that are no longer detected.
     */
    getPlanes(): TrackedPlane[];
}

/**
 * Triggered when currently detected plane(s) are updated.  This usually happens when a plane grows in size. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, {@link DeviceTracking} component must be set to `World` mode to orient the Camera relative to the planes correctly.
 */
declare class WorldTrackingPlanesUpdatedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of {@link TrackedPlane} that were updated.
     */
    getPlanes(): TrackedPlane[];
}

/**
 * Mesh provider for a Face Mesh. Accessible through the `control` property on a Face Mesh `RenderMesh`.
 */
declare class FaceRenderObjectProvider extends RenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a list of all expression names being tracked.
     * 
     * @deprecated Use {@link FaceRenderObjectProvider.onExpressionWeightsUpdate} instead.
     * 
     * @deprecated
     */
    getExpressionNames(): string[];
    /**
     * Returns the weight of the expression with the passed in name. See {@link Expressions} for valid expression names.
     * 
     * @deprecated Use {@link FaceRenderObjectProvider.onExpressionWeightsUpdate} instead.
     * 
     * @deprecated
     */
    getExpressionWeightByName(expressionName: string): number;
    /**
     * Returns a Float32Array of all expression weights being tracked.
     * 
     * @deprecated Use {@link FaceRenderObjectProvider.onExpressionWeightsUpdate} instead.
     * 
     * @deprecated
     */
    getExpressionWeights(): Float32Array;
    /**
     * When true, the general face (not including eyes and mouth) will be included in the Face Mesh geometry.
     */
    faceGeometryEnabled: boolean;
    /**
     * When true, eyes will be included in the Face Mesh geometry.
     */
    eyeGeometryEnabled: boolean;
    /**
     * When true, a small area in the corners of the eyes will be included in the Face Mesh geometry.
     */
    eyeCornerGeometryEnabled: boolean;
    /**
     * When true, the mouth will be included in the Face Mesh geometry.
     */
    mouthGeometryEnabled: boolean;
    /**
     * When true, the skull will be included in the Face Mesh geometry.
     */
    skullGeometryEnabled: boolean;
    /**
     * When true, ears will be included in the Face Mesh geometry.
     */
    earGeometryEnabled: boolean;
    /**
     * Index of the face this FaceRenderObjectProvider mirrors.
     */
    faceIndex: number;
    /**
     * An event that will fire each time new expression weights are available.
     * 
     * @readonly
     */
    onExpressionWeightsUpdate: event1<NamedValues, void>;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
}

/**
 * This is the base class for all face tracking events. This event won't actually get triggered itself, so use one of the child classes instead.
 */
declare class FaceTrackingEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * The index of the face this event is tracking. Change this value to control which face the event tracks.
     */
    faceIndex: number;
}

/**
 * Triggered when a new face is detected and starts being tracked.
 */
declare class FaceFoundEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when a face can no longer be tracked.  For example, if a face gets blocked from the camera's view, or gets too far away.
 */
declare class FaceLostEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Triggered when the tracked face's mouth opens.
 */
declare class MouthOpenedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type MouthWasJustOpenedEvent = MouthOpenedEvent;

/**
 * Triggered when the tracked face's mouth closes.
 */
declare class MouthClosedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type MouthWasJustClosedEvent = MouthClosedEvent;

/**
 * Triggered when the tracked face starts a kiss.
 */
declare class KissStartedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type KissJustStartedEvent = KissStartedEvent;

/**
 * Triggered when a smile begins on the tracked face.
 */
declare class SmileStartedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type SmileJustStartedEvent = SmileStartedEvent;

/**
 * Triggered when the tracked face ends a kiss.
 */
declare class KissFinishedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type KissJustFinishedEvent = KissFinishedEvent;

/**
 * Triggered when a smile ends on the tracked face.
 */
declare class SmileFinishedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type SmileJustFinishedEvent = SmileFinishedEvent;

/**
 * Triggered when eyebrows are raised on the tracked face.
 */
declare class BrowsRaisedEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type BrowsWereJustRaisedEvent = BrowsRaisedEvent;

/**
 * Triggered when eyebrows are lowered on the tracked face.
 */
declare class BrowsLoweredEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type BrowsWereJustFrownedEvent = BrowsLoweredEvent;

/**
 * Triggered when eyebrows are returned to normal on the tracked face.
 */
declare class BrowsReturnedToNormalEvent extends FaceTrackingEvent {
    
    /** @hidden */
    protected constructor()
    
}

type BrowsWereJustReturnedToNormalEvent = BrowsReturnedToNormalEvent;

/**
 * TextureProvider for face textures.
 * See the [Face Texture Guide](/lens-studio/features/ar-tracking/face/face-texture) for more information.
 * Can be accessed using {@link Texture | Texture.control} on a face texture asset.
 * 
 * @deprecated Use {@link FaceCropTextureProvider} instead
 * 
 * @deprecated
 */
declare class FaceTextureProvider extends TextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * The x and y scale used to draw the face within the texture region.
     * A lower scale will be more zoomed in on the face, and a higher scale will be more zoomed out.
     * The default scale is (1, 1).
     * 
     * @deprecated
     */
    scale: vec2;
    /**
     * Index of the face to track.
     * 
     * @deprecated
     */
    faceIndex: number;
    /**
     * The source texture being drawn.
     * This is useful for controlling which effects are visible on the face texture, based on which camera output texture is being used.
     * 
     * @deprecated
     */
    inputTexture: Texture;
}

/**
 * Controls the face image picker texture resource.
 * Can be accessed through {@link Texture | Texture.control} on a Face Image Picker texture.
 * For more information, see the [Face Image Picker Texture guide](/lens-studio/features/ar-tracking/face/face-image-picker-texture).
 * 
 * @deprecated Use {@link MediaPickerTextureProvider} configured to select faces.
 * 
 * @deprecated
 */
declare class FaceImagePickerTextureProvider extends ImagePickerTextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the selected image will be cropped to only show the face region.
     * 
     * @deprecated
     */
    cropToFace: boolean;
    /**
     * The FaceTextureProvider used to provide the face texture.
     * 
     * @deprecated
     */
    faceControl: FaceTextureProvider;
}

type ExternalImageProvider = FaceImagePickerTextureProvider;

/**
 * Texture Provider giving a cropped region of the input texture, calculated based on face position.
 * Can be accessed using `Texture.control` on a FaceCropTexture asset.
 * For more information, see the [Crop Textures](/lens-studio/features/snap-ml/ml-component/crop-textures) guide.
 */
declare class FaceCropTextureProvider extends CropTextureProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns a new copy of this FaceCropTextureProvider. Useful for keeping crop settings while assigning a different TrackingScope for instance.
     */
    clone(): FaceCropTextureProvider;
    /**
     * Ratio of the mouth position on the cropped texture. Value ranges from 0 to 1, with 0 having no effect and 1 centering the image on the mouth.
     */
    faceCenterMouthWeight: number;
    /**
     * Scaling of the cropped texture.
     */
    textureScale: vec2;
    /**
     * Index of the face being tracked.
     */
    faceIndex: number;
    /**
     * The tracking context this effect is being applied to.
     */
    trackingScope: PersonTrackingScope | TextureTrackingScope | FaceTrackingScope;
    /**
     * Access to the {@link TrackingStatus} for this Texture. Can be used to check if tracking is available and subscribe to events for status changes. Subscribing to events on TrackingStatus will also trigger the Texture to request tracking even if it is not otherwise being used in the Scene.
     * 
     * @readonly
     */
    trackingStatus: TrackingStatus;
}

/**
 * Used to track objects in 2D space, such as body parts, pet, hand.
 * 
 * @remarks
 * Moves the local {@link ScreenTransform} to match the detected image.
 * 
 * @see [Object Tracking](/lens-studio/features/ar-tracking/world/object-tracking) guide.
 * @see[Hand Gestures](/lens-studio/features/ar-tracking/hand/hand-gestures) guide.
 */
declare class ObjectTracking extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Registers a callback to be executed when the passed in descriptor starts for this tracked object. For example, the possible descriptors for hand tracking are: "victory", "open", "index_finger", "horns", "close", "thumb".
     */
    registerDescriptorStart(descriptor: string, callback: (descriptor: string) => void): void;
    /**
     * Registers a callback to be executed when the passed in descriptor ends for this tracked object. For example, the possible descriptors for hand tracking are: "victory", "open", "index_finger", "horns", "close", "thumb".
     */
    registerDescriptorEnd(descriptor: string, callback: (descriptor: string) => void): void;
    /**
     * Returns true if the object is currently being tracked on camera.
     */
    isTracking(): boolean;
    /**
     * The index of the object being tracked.
     */
    objectIndex: number;
    /**
     * If true, child objects of this Component's {@link SceneObject} will be disabled when the object is not being tracked.
     */
    autoEnableWhenTracking: boolean;
    /**
     * Function that gets called when the tracked object is found.
     */
    onObjectFound: () => void;
    /**
     * Function that gets called when the tracked object is lost.
     */
    onObjectLost: () => void;
    /**
     * Gets additional data of the current object being tracked.
     * 
     * @readonly
     */
    objectSpecificData: ObjectSpecificData;
}

type ObjectTracker2D = ObjectTracking;

declare class ObjectTrackingMaskedTextureProvider extends CropTextureProvider {
    
    /** @hidden */
    protected constructor()
    
    objectIndex: number;
}

/**
 * Controls a segmentation texture and its placement using information provided by Object tracking.
 */
declare class ObjectTrackingTextureProvider extends ObjectTrackingMaskedTextureProvider {
    
    /** @hidden */
    protected constructor()
    
}

declare class ObjectTrackingNormalsTextureProvider extends ObjectTrackingMaskedTextureProvider {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents reusable {@link SceneObject} hierarchy stored as a resource.
 * 
 * @remarks
 * Can be instantiated through script or brought into the scene by dragging from `Asset Browser` to `Scene Hierarchy` panel.
 * 
 * @see [Prefabs](/lens-studio/lens-studio-workflow/prefabs) guide.
 */
declare class ObjectPrefab extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Creates an ObjectPrefab based on the given {@link SceneObject} and it's children. That ObjectPrefab can then be instantiated.
     * /
     */
    static createFromSceneObject(sceneObject: SceneObject): ObjectPrefab;
    /**
     * Creates and returns a new instance of this object hierarchy underneath the specified parent object.
     * If parent is null, the object will be created with no parent.
     * 
     * @mutates
     */
    instantiate(parent: SceneObject): SceneObject;
    /**
     * Instantiate a prefab asynchronously.
     * 
     * @mutates
     */
    instantiateAsync(parent: SceneObject, onSuccess: (sceneObject: SceneObject) => void, onFailure: (error: string) => void, onProgress: (progress: number) => void): void;
}

/**
 * Enables Hand Tracking 3D for the {@link ObjectTracking3D} component.
 * 
 * @see [3D Body and Hand Tracking](/lens-studio/features/ar-tracking/body/object-tracking-3d) guide.
 */
declare class HandTracking3DAsset extends Object3DAsset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Represents a mesh generated by world tracking. Only available when world mesh tracking is supported and enabled.
 */
declare class TrackedMesh extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns whether the tracked mesh is valid.
     * 
     * @readonly
     */
    isValid: boolean;
    /**
     * Returns the World Transformation matrix of the detected mesh.
     * 
     * @readonly
     */
    transform: mat4;
}

/**
 * Provides information about a TrackedMesh surface hit during a raycast. Is returned in an array when calling `DeviceTracking.hitTestWorldMesh()` or `DeviceTracking.raycastWorldMesh()`.
 */
declare class TrackedMeshHitTestResult extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the world space position of the intersection point.
     * 
     * @readonly
     */
    position: vec3;
    /**
     * Returns the world space normal direction of the intersection point.
     * 
     * @readonly
     */
    normal: vec3;
    /**
     * Returns the classification of the mesh face at the intersection point.
     * 
     * @readonly
     */
    classification: TrackedMeshFaceClassification;
    /**
     * Returns the TrackedMesh that was hit.
     * 
     * @readonly
     */
    mesh: TrackedMesh;
}

/**
 * Provides histogram information about tracked world mesh faces in a given area. Returned by `DeviceTracking.calculateWorldMeshHistogram()`.
 */
declare class TrackedMeshHistogramResult extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Array of relative proportions for each classification, in the order described below. The values all add up to a total of 1.0.
     * 
     * The classification value order is:
     * * 0: None
     * * 1: Wall
     * * 2: Floor
     * * 3: Ceiling
     * * 4: Table
     * * 5: Seat
     * * 6: Window
     * * 7: Door
     * 
     * @readonly
     */
    histogram: number[];
    /**
     * Average normal direction, in world space, of the mesh faces.
     * 
     * @readonly
     */
    avgNormal: vec3;
}

/**
 * Provider for RenderMesh data representing the estimated shape of real world objects generated from depth information. Only available when world mesh tracking is supported and enabled.
 */
declare class WorldRenderObjectProvider extends MeshRenderObjectProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns the number of vertices of the mesh.
     * 
     * @readonly
     */
    vertexCount: number;
    /**
     * Returns the number of faces of the mesh.
     * 
     * @readonly
     */
    faceCount: number;
    /**
     * Mesh classification format being used.
     */
    meshClassificationFormat: MeshClassificationFormat;
    /**
     * Enable or disable normal direction usage.
     */
    useNormals: boolean;
    /**
     * Enable or disable world mesh tracking.
     */
    enableWorldMeshesTracking: boolean;
}

/**
 * Triggered when new world tracking meshes are detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
 * In addition, {@link DeviceTracking} component must be set to `World` mode to orient the Camera relative to the mesh correctly.
 */
declare class WorldTrackingMeshesAddedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of newly added Tracked Meshes.
     */
    getMeshes(): TrackedMesh[];
}

/**
 * Triggered when some world tracking meshes are no longer detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
 */
declare class WorldTrackingMeshesRemovedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of TrackedMeshes that are no longer detected.
     */
    getMeshes(): TrackedMesh[];
}

/**
 * Triggered when world tracking meshes are updated. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
 */
declare class WorldTrackingMeshesUpdatedEvent extends SceneEvent {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Returns an array of TrackedMeshes that were updated.
     */
    getMeshes(): TrackedMesh[];
}

/**
 * Provides access to various APIs which can perform hit test for real surfaces to sample the depth and normal at a certain location.
 * 
 * @see [World Query Module](/spectacles/about-spectacles-features/apis/world-query) guide.
 * 
 * @wearableOnly
 */
declare class WorldQueryModule extends Asset {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a HitTestSession with default options.
     * 
     * @wearableOnly
     */
    createHitTestSession(): HitTestSession;
    /**
     * Create a new HitTestSession with options.
     * 
     * @wearableOnly
     */
    createHitTestSessionWithOptions(options: HitTestSessionOptions): HitTestSession;
}

/**
 * The result of the hitTest method call. This includes the world position of the hit, the world normal of the hit. Returns `null` if no intersection with environment was detected.
 * 
 * @wearableOnly
 */
declare class WorldQueryHitTestResult extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * A position where ray intersects with the environment.
     * 
     * @readonly
 * @wearableOnly
     */
    position: vec3;
    /**
     * A normal of the surface at the position where the ray intersects with the environment.
     * 
     * @readonly
 * @wearableOnly
     */
    normal: vec3;
    /**
     * The classification of the surface at the position where the ray intersects with the environment.
     * 
     * @readonly
 * @experimental
 * @wearableOnly
     */
    classification: SurfaceClassification;
}

/**
 * Class responsible for detecting intersections between a virtual ray and real-world surfaces.
 * 
 * @wearableOnly
 */
declare class HitTestSession extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Perform a hit test.
     * 
     * @wearableOnly
     */
    hitTest(rayStart: vec3, rayEnd: vec3, hitCallback: (hit: WorldQueryHitTestResult) => void): void;
    /**
     * Start the session. Depth computation is started once a session is started. Multiple sessions access the same depth data, thus there is no additional cost.
     * 
     * @wearableOnly
     */
    start(): void;
    /**
     * Stop the session. Depth computation stops once all hit test sessions are stopped.
     * 
     * @wearableOnly
     */
    stop(): void;
    /**
     * Reset the session.
     * 
     * @wearableOnly
     */
    reset(): void;
}

/**
 * Options for configuring a HitTestSession.
 * 
 * @wearableOnly
 */
declare class HitTestSessionOptions extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Create a new HitTestSessionOptions object.
     * 
     * @wearableOnly
     */
    static create(): HitTestSessionOptions;
    /**
     * If true - a double exponential filter is applied to filter/smooth over multiple hit test results.
     * By default the filter is set to `false`.
     * 
     * @wearableOnly
     */
    filter: boolean;
    /**
     * If set to true, the surface classification of the hit surface is enabled. By default the classification is set to false.
     * 
     * @experimental
 * @wearableOnly
     */
    classification: boolean;
}

/**
 * Used to add effects to audio recorded by the device, such as Robot, Alien, etc.
 * 
 * @remarks
 * When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens.
 * 
 * @see [Audio Effect](/lens-studio/features/audio/audio-effect) Guide.
 */
declare class AudioEffectComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
}

type AudioChainComponent = AudioEffectComponent;

declare class SpatialAudio extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Sets whether spatial audio is enabled or not.
     */
    enabled: boolean;
    /**
     * Distance effect settings.
     * 
     * @readonly
     */
    distanceEffect: DistanceEffect;
    /**
     * Directivity effect settings.
     * 
     * @readonly
     */
    directivityEffect: DirectivityEffect;
    /**
     * Position effect settings.
     * 
     * @readonly
     */
    positionEffect: PositionEffect;
}

/**
 * Used to play audio in a Lens.
 * 
 * @remarks
 * You can assign an {@link AudioTrackAsset} to play through script, or through the Audio Component input in the Inspector panel of Lens Studio.
 * 
 * @see [Playing Audio](/lens-studio/features/audio/playing-audio) guide for more information.
 */
declare class AudioComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Plays the current sound `loops` number of times.  If `loops` is -1, the sound will repeat forever.
     */
    play(loops: number): void;
    /**
     * Returns whether the AudioComponent is currently playing sound.
     */
    isPlaying(): boolean;
    /**
     * Returns whether the sound is currently paused.
     */
    isPaused(): boolean;
    /**
     * Sets the callback function to be called whenever this sound stops playing.
     */
    setOnFinish(eventCallback: (audioComponent: AudioComponent) => void): void;
    /**
     * Stops the current sound if already playing.
     */
    stop(fade: boolean): void;
    /**
     * Pauses the sound.
     */
    pause(): boolean;
    /**
     * Resumes a paused sound.
     */
    resume(): boolean;
    /**
     * The audio asset currently assigned to play.
     */
    audioTrack: AudioTrackAsset;
    /**
     * A volume multiplier for any sounds played by this AudioComponent.
     */
    volume: number;
    /**
     * The length (in seconds) of the current sound assigned to play.
     * 
     * @readonly
     */
    duration: number;
    /**
     * The current playback time in seconds
     */
    position: number;
    /**
     * Length (in seconds) of a volume fade in applied to the beginning of sound playback.
     */
    fadeInTime: number;
    /**
     * Length (in seconds) of a volume fade out applied to the end of sound playback.
     */
    fadeOutTime: number;
    /**
     * When true, records sound directly into the snap. This mode works only when all Audio Components in the scene are using mix to snap. In this case input from microphone will be ignored.
     */
    mixToSnap: boolean;
    /**
     * The volume of audio recorded to the snap, from 0 to 1.
     */
    recordingVolume: number;
    /**
     * Spatial Audio settings.
     * 
     * @readonly
     */
    spatialAudio: SpatialAudio;
    /**
     * How the audio should be played back. Useful in optimizing audio in Spectacles.
     * 
     * @snapOS
     */
    playbackMode: Audio.PlaybackMode;
}

type AudioPlayer = AudioComponent;

/**
 * An audio effect that simulates sound attenuation based on the distance between the Audio and the {@link AudioListenerComponent}.
 */
declare class DistanceEffect extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the distance effect will be applied.
     */
    enabled: boolean;
    /**
     * Curve type that describes how volume attenuates with distance.
     */
    type: Audio.DistanceCurveType;
    /**
     * If the distance is less than this value, the distance effect is not applied at all.
     */
    minDistance: number;
    /**
     * If the distance is higher than this value, the sound cannot be heard at all.
     */
    maxDistance: number;
}

/**
 * An Audio Component effect that simulates sound attenuation based on the orientation of the transform relative to the {@link AudioListenerComponent}.
 */
declare class DirectivityEffect extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Whether the audio directivity effect is applied or not.
     */
    enabled: boolean;
    /**
     * A ratio that specifies the shape of pattern directivity from omnidirectional(0) to cardioid (1.0).
     */
    shapeFactor: number;
    /**
     * The width of main lobe.
     */
    shapeDecay: number;
}

/**
 * An Audio Component effect that allows the Lens to simulate sound based on the direction of the Audio Listener relative to the Audio Component.
 */
declare class PositionEffect extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
     * If enabled, the position effect will be applied.
     */
    enabled: boolean;
}

/**
 * Processes input from {@link AudioComponent}s that use Spatial Audio.
 * 
 * @remarks
 * The Audio Listener component acts as a microphone-like device. It receives input from {@link AudioComponent}s that have Spatial Audio setting enabled and allows to calculate their relative positions to the {@link SceneObject} it is attached to and properly mix them.
 * 
 * @see [Audio Listener](/lens-studio/features/audio/audio-listener) guide
 */
declare class AudioListenerComponent extends Component {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Configures an audio effect for {@link AudioEffectComponent}.
 */
declare class AudioEffectAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * A file track provider of the Licensed Sounds from Asset LIbrary.
 */
declare class FileLicensedSoundProvider extends AudioTrackProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Writes current audio frame to the passed in Float32Array and returns the frame shape.
     */
    getAudioFrame(audioFrame: Float32Array): vec3;
    /**
     * Writes readSize samples into the passed in audioBuffer Float32Array.
     */
    getAudioBuffer(audioBuffer: Float32Array, readSize: number): vec3;
    /**
     * The duration of the AudioTrackAsset in seconds.
     * 
     * @readonly
     */
    duration: number;
    /**
     * Loop count, if -1 is provided, the audio track will loop forever.
     */
    loops: number;
}

/**
 * The Audio Track Provider of the audio from microphone.
 */
declare class MicrophoneAudioProvider extends AudioTrackProvider {
    
    /** @hidden */
    protected constructor()
    
    /**
     * Writes current frame audio data to the passed in `Float32Array` and returns its shape. The length of the array can't be more than `maxFrameSize`.
     * 
     * @exposesUserData
     */
    getAudioFrame(audioFrame: Float32Array): vec3;
    /**
     * Retrieves the current audio frame, converts it to PCM16 (Pulse-Code Modulation) format, and writes the raw audio samples into the provided `audioFrame` as an `Int16Array`. The length of the array can’t be more than `maxFrameSize`.
     * 
     * @exposesUserData
     */
    getAudioFramePCM16(audioFrame: Int16Array): vec3;
    /**
     * Start processing audio from microphone. Useful to avoid redundant processing.
     */
    start(): void;
    /**
     * Stop processing audio from microphone.
     */
    stop(): void;
}

/**
 * Hair asset converted from an FBX containing splines to be used with {@link HairVisual}.
 */
declare class HairDataAsset extends Asset {
    
    /** @hidden */
    protected constructor()
    
}

/**
 * Collider asset generated from a mesh to be used with the {@link HairVisual} as part of the hair simulation.
 */
declare class LevelsetColliderAsset extends BinAsset {
    
    /** @hidden */
    protected constructor()
    
}

type HairSimulationColliderAsset = LevelsetColliderAsset;

declare namespace SourceMaps {
    /**
     * Applies the SourceMaps to the stack trace to map JavaScript to TypeScript.
     */
    function applyToStackTrace(trace: string): string;
}

declare namespace MathUtils {
    /**
     * Generate a random floating-point value in the range `[lo, hi)`. Note, the range is inclusive at the lower end, and exclusive at the upper.
     */
    function randomRange(lo: number, hi: number): number;
    /**
     * Linearly interpolate from floating-point `a` to `b`, based on fraction `t` (where t=0.0 returns a, and t=1.0 returns b). This is equivalent to the vec2 and vec3 lerp() functions, but operates on scalar floating-point values.
     */
    function lerp(a: number, b: number, time: number): number;
    /**
     * Clamp floating-point value `v` in the range `[lo, hi]` (inclusive).
     */
    function clamp(v: number, lo: number, hi: number): number;
    /**
     * Map floating-point `v` from range [inMin, inMax] to [outMin, outMax].
     */
    function remap(v: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
    /**
     * Constant mapping degrees to radians. This equals pi/180.
     */
    const DegToRad: number;
    /**
     * Constant mapping radians to degrees. This equals 180/pi.
     */
    const RadToDeg: number;
}

declare namespace console {
    /**
     * Prints out a message to the Logger window.
     */
    function log(...data: any[]): void;
    /**
     * Prints out a message to the Logger window at the info log level.
     */
    function info(...data: any[]): void;
    /**
     * Prints out a message to the Logger window at the warning log level.
     */
    function warn(...data: any[]): void;
    /**
     * Prints out a message to the Logger window at the error log level.
     */
    function error(...data: any[]): void;
    /**
     * Prints out a message to the Logger window at the debug log level.
     */
    function debug(...data: any[]): void;
    /**
     * Prints out a stack trace to the Logger window.
     */
    function trace(...data: any[]): void;
    /**
     * Starts a timer named label or "default" if no label specified.
     */
    function time(...label: any[]): void;
    /**
     * Logs current time for timer named label or "default" if no label specified.
     */
    function timeLog(...label: any[]): void;
    /**
     * Ends timer with name label or "default" if no label specified.
     */
    function timeEnd(...label: any[]): void;
}

declare namespace RenderTargetProvider {
    /**
     * Specifies what kind of render target it is. Some texture types, for example TextureCubemap, need additional properties set on the rendering camera to work correctly.
     */
    enum TextureType {
        /**
         * A 2d texture. Render targets are this type by default.
         */
        Texture2D,
        /**
         * A 2D array texture allowing for multiple layers in a single texture.
         */
        Texture2DArray,
        /**
         * A 3D texture (volume texture) with width, height, and depth dimensions.
         */
        Texture3D,
        /**
         * A cubemap render target.
         */
        TextureCubemap,
    }

    /**
     * The anti-aliasing technique to use on a render target.
     */
    enum AntialiasingMode {
        /**
         * No anti-aliasing technique is applied.
         */
        Disabled,
        /**
         * MSAA anti-aliasing technique is applied.
         */
        MSAA,
    }

    /**
     * The fidelity of the anti-aliasing technique to apply.
     */
    enum AntialiasingQuality {
        /**
         * Apply the anti-aliasing technique with low quality.
         */
        Low,
        /**
         * Apply the anti-aliasing technique with medium quality.
         */
        Medium,
        /**
         * Apply the anti-aliasing technique with high quality.
         */
        High,
        /**
         * Apply the anti-aliasing technique with ultra quality.
         */
        Ultra,
        /**
         * Apply the anti-aliasing technique with default quality (which corresponds to Ultra).
         */
        Default,
    }

    /**
     * Controls depth buffer usage strategy for the render target.
     */
    enum DepthBufferUsage {
        /**
         * Automatically determines depth buffer usage.
         */
        Auto,
        /**
         * Forces depth buffer off.
         */
        ForceOff,
        /**
         * Forces depth buffer on (used internally to preserve depth buffer from discard).
         */
        ForceOn,
    }

    /**
     * How MSAA should be applied to the render target.
     */
    enum MSAAStrategy {
        /**
         * Apply MSAA with the default strategy (always on, without optimization).
         */
        Default,
        /**
         * Apply MSAA only when it's needed.
         */
        OnlyWhenRequired,
    }

    /**
     * Controls the resolution source for the render target.
     */
    enum OutputResolution {
        /**
         * Uses camera resolution.
         */
        Camera,
        /**
         * Uses custom provided resolution.
         */
        Custom,
        /**
         * Uses externally provided output target resolution (screen resolution).
         */
        Screen,
    }

}

declare namespace Audio {
    /**
     * The curve that specifies how sound fades with the distance from Audio Component to the Audio Listener.****
     */
    enum DistanceCurveType {
        /**
         * Linear Curve ~ y(x) = ax+b
         */
        Linear,
        /**
         * Inverse Curve ~ y(x) = (a/x)+b
         */
        Inverse,
        /**
         * Logarithmic Curve ~ -log(x)
         */
        Logarithm,
        /**
         * Inverse Logarithmic Curve ~ +log(x)
         */
        InverseLogarithm,
    }

    /**
     * The Playback Mode property of the `AudioComponent` used in Lenses targeting Spectacles. Spectacles default all Playback Modes to Low Power.
     * 
     * @snapOS
     */
    enum PlaybackMode {
        /**
         * Reduces power usage for the Spectacles device. but introduces latency in audio playback. Suitable for ambient sounds or background music where slight delays are acceptable.
         * 
         * @snapOS
         */
        LowPower,
        /**
         * Minimizes audio playback latency but increases power usage for the Spectacles device. Recommended for audio requiring immediate auditory reaction, such as button press feedback.
         * 
         * @snapOS
         */
        LowLatency,
    }

}

declare namespace Camera {
    /**
     * Different faces of the cubemap that a camera can render into.
     */
    enum CubemapFace {
        /**
         * The positive X cubemap face.
         */
        PositiveX,
        /**
         * The negative X cubemap face.
         */
        NegativeX,
        /**
         * The positive Y cubemap face.
         */
        PositiveY,
        /**
         * The negative Y cubemap face.
         */
        NegativeY,
        /**
         * The positive Z cubemap face.
         */
        PositiveZ,
        /**
         * The negative Z cubemap face.
         */
        NegativeZ,
        /**
         * The left cubemap face, same as NegativeX.
         */
        Left,
        /**
         * The right cubemap face, same as PositiveX.
         */
        Right,
        /**
         * The top cubemap face, same as PositiveY.
         */
        Top,
        /**
         * The bottom cubemap face, same as NegativeY.
         */
        Bottom,
        /**
         * The front cubemap face, same as PositiveZ.
         */
        Front,
        /**
         * The back cubemap face, same as NegativeZ.
         */
        Back,
    }

    /**
     * Returned from {@link Camera}'s `type` property.
     */
    enum Type {
        /**
         * Simulates how perspective and depth perception work in the real world. Useful for rendering objects in 3D space.
         */
        Perspective,
        /**
         * Does not simulate perspective distortion. Useful for 2D effects like Images and Text.
         */
        Orthographic,
    }

    /**
     * Used in {@link Camera}'s `depthBufferMode` property.
     * Each mode is suited for handling objects at a certain distance range.
     * For more information on depth modes, see the [Camera and Layers](/lens-studio/lens-studio-workflow/scene-set-up/camera) guide.
     */
    enum DepthBufferMode {
        /**
         * Gives higher depth precision on nearby objects, so is better suited for scenes near to the camera.
         */
        Regular,
        /**
         * Gives higher depth precision on far away objects, so is better suited for scenes far away from the camera.
         */
        Logarithmic,
    }

    /**
     * Used in {@link Camera}'s `devicePropertyUsage` property.
     * Specifies which camera properties should be overridden by device properties.
     */
    enum DeviceProperty {
        /**
         * No Camera properties are overridden with device properties.
         */
        None,
        /**
         * Overrides the Camera's `aspect` property to use the device's aspect ratio instead.
         */
        Aspect,
        /**
         * Overrides the Camera's `fov` property to use the device's field of view instead.
         */
        Fov,
        /**
         * Overrides both `aspect` and `fov` with the device's properties.
         */
        All,
    }

    /**
     * The base class from which ColorRenderTarget and DepthStencilRenderTarget are derived from
     */
    class BaseRenderTarget extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Render target texture. Camera will render scene color values to this texture.
         */
        targetTexture: Texture;
        /**
         * Color texture used in clear color operation in "CustomTexture" mode.
         */
        inputTexture: Texture;
        /**
         * Texture used like a color mask for target texture.
         */
        maskTexture: Texture;
    }

    /**
     * This class inherits from the BaseRenderTarget class. BaseRenderTarget class is not available for creation and is used like the base class for DepthStencilRenderTarget class to provide access to targetTexture, inputTexture and maskTexture properties.
     */
    class DepthStencilRenderTarget extends BaseRenderTarget {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The same as "depthClearOption" property of DepthStencilRenderTargetProvider. But if Camera's depth clear option property is set to "CustomValue" or "CustomTexture" then this has priority over depth/stencil provider settings.
         */
        depthClearOption: DepthClearOption;
        /**
         * The same as "stencilClearOption" property of DepthStencilRenderTargetProvider. But if Camera's stencil clear option property is set to "CustomValue" or "CustomTexture" then this has priority over depth/stencil provider settings.
         */
        stencilClearOption: StencilClearOption;
        /**
         * Float value in range [0.0..1.0] used in depth buffer clear operation in "CustomValue" mode. The initial value is 1.0.
         */
        clearDepthValue: number;
        /**
         * Unsigned int value in range [0..0xFF] used in stencil buffer clear operation in "CustomValue" mode. The initial value is 0.
         */
        clearStencilValue: number;
    }

    /**
     * Color based RenderTarget.
     */
    class ColorRenderTarget extends BaseRenderTarget {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Sets how the RenderTarget's color will be cleared before rendering during each frame.
         */
        clearColorOption: ClearColorOption;
        /**
         * Sets the clear color of the camera when its `clearColorOption` is set to `ClearColorOption.CustomColor`
         */
        clearColor: vec4;
    }

}

declare namespace Canvas {
    /**
     * Used by Canvas to set how an object is positioned.
     */
    enum UnitType {
        /**
         * How objects are positioned outside of canvas.
         */
        World,
        /**
         * The smallest addressable element on a display.
         */
        Pixels,
        /**
         * Sometimes referred to as “Density Independent Pixels (dp)”, are abstractions of pixels that make it easier to deal with displays of different densities.
         */
        Points,
    }

    /**
     * Used by Canvas to set how an object is sorted during rendering.
     */
    enum SortingType {
        /**
         * Sort based on their position in the hierarchy. This is the default.
         */
        Hierarchy,
        /**
         * Sort based on their position in worldspace.
         */
        Depth,
    }

}

declare enum FaceInsetRegion {
    /**
     * Targets the left eye.
     */
    LeftEye,
    /**
     * Targets the right eye.
     */
    RightEye,
    /**
     * Targets the mouth.
     */
    Mouth,
    /**
     * Targets the nose.
     */
    Nose,
    /**
     * Targets the entire face.
     */
    Face,
}

declare enum AttachmentPointType {
    HeadCenter,
    CandideCenter,
    TriangleBarycentric,
    LeftEyeballCenter,
    RightEyeballCenter,
    MouthCenter,
    Chin,
    Forehead,
    LeftForehead,
    RightForehead,
    LeftCheek,
    RightCheek,
}

declare namespace LookAtComponent {
    /**
     * The "aim" and "up" vectors used with {@link LookAtComponent} when determining rotation.
     * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
     * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
     */
    enum AimVectors {
        /**
         * X Aim, Y Up
         */
        XAimYUp,
        /**
         * X Aim, Z Up
         */
        XAimZUp,
        /**
         * Y Aim, X Up
         */
        YAimXUp,
        /**
         * Y Aim, Z Up
         */
        YAimZUp,
        /**
         * Z Aim, X Up
         */
        ZAimXUp,
        /**
         * Z Aim, Y Up
         */
        ZAimYUp,
        /**
         * X Aim, -Y Up
         */
        XAimNegativeYUp,
        /**
         * X Aim, -Z Up
         */
        XAimNegativeZUp,
        /**
         * Y Aim, -X Up
         */
        YAimNegativeXUp,
        /**
         * Y Aim, -Z Up
         */
        YAimNegativeZUp,
        /**
         * Z Aim, -X Up
         */
        ZAimNegativeXUp,
        /**
         * Z Aim, -Y Up
         */
        ZAimNegativeYUp,
        /**
         * -X Aim, Y Up
         */
        NegativeXAimYUp,
        /**
         * -X Aim, Z Up
         */
        NegativeXAimZUp,
        /**
         * -Y Aim, X Up
         */
        NegativeYAimXUp,
        /**
         * -Y Aim, Z Up
         */
        NegativeYAimZUp,
        /**
         * -Z Aim, X Up
         */
        NegativeZAimXUp,
        /**
         * -Z Aim, Y Up
         */
        NegativeZAimYUp,
        /**
         * -X Aim, -Y Up
         */
        NegativeXAimNegativeYUp,
        /**
         * -X Aim, -Z Up
         */
        NegativeXAimNegativeZUp,
        /**
         * -Y Aim, -X Up
         */
        NegativeYAimNegativeXUp,
        /**
         * -Y Aim, -Z Up
         */
        NegativeYAimNegativeZUp,
        /**
         * -Z Aim, -X Up
         */
        NegativeZAimNegativeXUp,
        /**
         * -Z Aim, -Y Up
         */
        NegativeZAimNegativeYUp,
    }

    /**
     * Used with {@link LookAtComponent} to set the "up" vector when determining rotation.
     */
    enum WorldUpVector {
        /**
         * Scene's X vector
         */
        SceneX,
        /**
         * Scene's Y vector
         */
        SceneY,
        /**
         * Scene's Up vector
         */
        SceneUp,
        /**
         * Scene's Z vector
         */
        SceneZ,
        /**
         * Target object's X vector
         */
        TargetX,
        /**
         * Target object's Y vector
         */
        TargetY,
        /**
         * Target object's Z vector
         */
        TargetZ,
        /**
         * Current object's X vector
         */
        ObjectX,
        /**
         * Current object's Y vector
         */
        ObjectY,
        /**
         * Current object's Z vector
         */
        ObjectZ,
    }

    /**
     * Modes used in `LookAtComponent.lookAtMode` to determine the rotation method being used.
     */
    enum LookAtMode {
        /**
         * Rotation is based on the target object's position
         */
        LookAtPoint,
        /**
         * Rotation is based on the target object's rotation
         */
        LookAtDirection,
    }

}

declare namespace PinToMeshComponent {
    /**
     * Used with {@link PinToMeshComponent.orientation}.
     */
    enum Orientation {
        /**
         * Pins only the position. Rotation is independent from the target mesh.
         */
        OnlyPosition,
        /**
         * Pins both the position and direction. The normal of the target mesh is the Y axis.
         * The U texture coordinate of the target mesh's UV is the X axis.
         */
        PositionAndDirection,
    }

}

declare namespace AsrModule {
    /**
     * The mode of the transcription to prioritise, between speed and accuracy.
     * 
     * @snapOS
     */
    enum AsrMode {
        /**
         * Focus on higher accuracy at the cost of speed.
         * 
         * @snapOS
         */
        HighAccuracy,
        /**
         * A balance between accuracy and speed.
         * 
         * @snapOS
         */
        Balanced,
        /**
         * Faster transcription time but at the cost of accuracy.
         * 
         * @snapOS
         */
        HighSpeed,
    }

    /**
     * An enum stating the status of the transcription.
     * 
     * @snapOS
     */
    enum AsrStatusCode {
        /**
         * Asr operation was successfully executed.
         * 
         * @snapOS
         */
        Success,
        /**
         * An unknown internal error occurred.
         * 
         * @snapOS
         */
        InternalError,
        /**
         * User is not authenticated.
         * 
         * @snapOS
         */
        Unauthenticated,
        /**
         * Device is not connected to the internet.
         * 
         * @snapOS
         */
        NoInternet,
    }

    /**
     * Argument passed for a transcription update event.
     * 
     * @snapOS
     */
    class TranscriptionUpdateEvent extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates a new instance.
         * 
         * @snapOS
         */
        static create(): AsrModule.TranscriptionUpdateEvent;
        /**
         * Transcribed text.
         * 
         * @snapOS
         */
        text: string;
        /**
         * Specifies whether the transcription returned is final, or partial (interim) which can be updated later as the sentence continues.
         * 
         * @snapOS
         */
        isFinal: boolean;
    }

    /**
     * Provides the options for the session.
     * 
     * @snapOS
     */
    class AsrTranscriptionOptions extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates a new instance.
         * 
         * @snapOS
         */
        static create(): AsrModule.AsrTranscriptionOptions;
        /**
         * Silence duration in milliseconds to detect the end of the speech.
         * 
         * @snapOS
         */
        silenceUntilTerminationMs: number;
        /**
         * The operation mode of the ASR session.
         * 
         * @snapOS
         */
        mode: AsrModule.AsrMode;
        /**
         * An event triggered by transcription updates.
         * 
         * @readonly
 * @snapOS
         */
        onTranscriptionUpdateEvent: event1<AsrModule.TranscriptionUpdateEvent, void>;
        /**
         * An event triggered by transcription errors.
         * 
         * @readonly
 * @snapOS
         */
        onTranscriptionErrorEvent: event1<AsrModule.AsrStatusCode, void>;
    }

}

declare namespace Bitmoji3DOptions {
    /**
     * Enum representing the gender of the avatar.
     */
    enum Gender {
        /**
         * Unknown
         */
        Unknown,
        /**
         * Male gender.
         */
        Male,
        /**
         * Female gender.
         */
        Female,
    }

    /**
     * Enum representing different body types for the avatar.
     */
    enum BodyType {
        /**
         * Male average body type.
         */
        MaleAverage,
        /**
         * Male heavy body type.
         */
        MaleHeavy,
        /**
         * Male heaviest body type.
         */
        MaleHeaviest,
        /**
         * Male slim body type.
         */
        MaleSlim,
        /**
         * Male fit body type.
         */
        MaleFit,
        /**
         * Male heavier body type.
         */
        MaleHeavier,
        /**
         * Male pear soft body type.
         */
        MalePearsoft,
        /**
         * Male hourglass body builder body type.
         */
        MaleHourGlassBodyBuilder,
        /**
         * Male rectangle power lifter body type.
         */
        MaleRectanglePowerLifter,
        /**
         * Female heaviest body type.
         */
        FemaleHeaviest,
        /**
         * Female average body type.
         */
        FemaleAverage,
        /**
         * Female heavy body type.
         */
        FemaleHeavy,
        /**
         * Female slim body type.
         */
        FemaleSlim,
        /**
         * Female fit body type.
         */
        FemaleFit,
        /**
         * Female heavier body type.
         */
        FemaleHeavier,
        /**
         * Female pear average body type.
         */
        FemalePearAverage,
        /**
         * Female pear XXL body type.
         */
        FemalePearXXL,
        /**
         * Female hourglass body builder body type.
         */
        FemaleHourGlassBodyBuilder,
    }

    /**
     * Enum representing different breast types for the avatar.
     */
    enum BreastType {
        /**
         * Average breast type.
         */
        Average,
        /**
         * Larger breast type.
         */
        Larger,
        /**
         * Smaller breast type.
         */
        Smaller,
    }

    /**
     * Enum representing different types of clothing
     */
    enum ClothingType {
        /**
         * Unset clothing type.
         */
        Unset,
        /**
         * Split clothing type.
         */
        SplitClothes,
        /**
         * Granular clothing type.
         */
        GranularClothes,
        /**
         * Full outfit type.
         */
        FullOutfit,
        /**
         * Detailed full outfit type.
         */
        DetailedFullOutfit,
    }

    /**
     * Enum representing avatar scope used in custom params of bitmoji3d options.
     */
    enum AvatarScope {
        /**
         * Unset scope.
         */
        Unset,
        /**
         * Full scope.
         */
        Full,
        /**
         * Head scope.
         */
        Head,
        /**
         * Body scope.
         */
        Body,
        /**
         * Hair scope.
         */
        Hair,
        /**
         * Glasses scope.
         */
        Glasses,
        /**
         * Hat hair scope.
         */
        Hathair,
        /**
         * Piercing scope.
         */
        Piercing,
        /**
         * Clothes scope.
         */
        Clothes,
        /**
         * Mannequin Head scope.
         */
        MannequinHead,
        /**
         * MannequinHeadFeatureless scope.
         */
        MannequinHeadFeatureless,
        /**
         * MannequinEarLeft scope.
         */
        MannequinEarLeft,
        /**
         * MannequinEarRight scope.
         */
        MannequinEarRight,
        /**
         * MannequinHeadFeaturelessWithBody scope.
         */
        MannequinHeadFeaturelessWithBody,
        /**
         * .GlassesWithSkeleton scope.
         */
        GlassesWithSkeleton,
    }

    /**
     * Enum representing different request types.
     */
    enum RequestType {
        /**
         * Used to request avatar.
         */
        Avatar,
        Animation,
        /**
         * Used to request custom asset of avatar
         */
        Custom,
    }

    /**
     * Set of parameters used to customize specific parts of avatar such as garment, outerwear etc.
     */
    class ParamSet extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Used to create the parameter set for customizing specific parts of avatar such as garment, outerwear etc.
         */
        static create(): Bitmoji3DOptions.ParamSet;
        /**
         * Unique identifier of the category defined using this ParamSet.
         */
        optionId: string;
        /**
         * Used to set the parameters.
         */
        params: {[key:string]:string | number | vec4};
    }

    /**
     * Optimization parameters for Bitmoji 3D assets.
     * Note: We currently don't support these optimizations for body scoped custom override requests.
     */
    class OptimizationParams extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates the optimization params.
         */
        static create(): Bitmoji3DOptions.OptimizationParams;
        /**
         * Controls mesh quality for the Bitmoji 3D asset.
         * Value range: 0.1 (lowest quality) to 1.0 (highest quality).
         * Lower values reduce polygon count but may affect visual quality.
         * Default: 1.0
         */
        meshQuality: number;
        /**
         * Controls texture quality for the Bitmoji 3D asset.
         * Value range: 0.1 (lowest quality) to 1.0 (highest quality).
         * Lower values reduce texture memory usage but may affect visual quality.
         * Default: 1.0
         */
        textureQuality: number;
    }

    /**
     * The custom params can be used for requesting bitmoji assets like garments. These can be set as custom params of Bitmoji3D options.
     */
    class CustomParams extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The rendering options can be used for customizing bitmoj3D avatars. These can be set as overridden options of Bitmoji3D options.
         */
        static create(): Bitmoji3DOptions.CustomParams;
        /**
         * Parameter set to customize the clothing tyoe of the avatar.
         */
        clothingType: Bitmoji3DOptions.ClothingType;
        /**
         * The {@link Bitmoji3DOptions.AvatarScope} to use for the request.
         */
        avatarScope: Bitmoji3DOptions.AvatarScope;
        /**
         * Parameter set to customize the top of the avatar.
         */
        top: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the outerwear of the avatar.
         */
        outerWear: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the bottom wear of the avatar.
         */
        bottomWear: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the foot wear of the avatar.
         */
        footWear: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the sock of the avatar.
         */
        sock: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the bag of the avatar.
         */
        bag: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the hat of the avatar.
         */
        hat: Bitmoji3DOptions.ParamSet | null;
        /**
         * Parameter set to customize the cranium of the avatar.
         */
        cranium: string | null;
        /**
         * Parameter set to customize the glasses of the avatar.
         */
        glasses: string | null;
    }

    /**
     * Body parameters for base Bitmoji avatar customization.
     * Used with `requestBaseBitmoji3DResourceWithOptions` to specify body type without relying on user avatar data.
     */
    class BaseBodyParams extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates a new BaseBodyParams instance for customizing base avatar body parameters.
         */
        static create(): Bitmoji3DOptions.BaseBodyParams;
        /**
         * The gender of the avatar.
         */
        gender: Bitmoji3DOptions.Gender | null;
        /**
         * The body type of the avatar.
         */
        bodyType: Bitmoji3DOptions.BodyType | null;
        /**
         * The breast type of the avatar.
         */
        breastType: Bitmoji3DOptions.BreastType | null;
    }

    /**
     * Used to set the animation params for the request type.
     */
    class AnimationParams extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates the animation params.
         */
        static create(): Bitmoji3DOptions.AnimationParams;
    }

}

declare namespace Bluetooth {
    /**
     * Defines how Bluetooth devices should be scanned. Used with {@link BluetoothCentralModule.startScan}.
     * 
     * @experimental
 * @snapOS
     */
    enum ScanMode {
        /**
         * The default setting.
         * 
         * @experimental
 * @snapOS
         */
        Unset,
        /**
         * Scan devices opportunistically.
         * 
         * @experimental
 * @snapOS
         */
        Opportunistic,
        /**
         * Scan devices with low power.
         * 
         * @experimental
 * @snapOS
         */
        LowPower,
        /**
         * Scan devices while balancing power and latency.
         * 
         * @experimental
 * @snapOS
         */
        Balanced,
        /**
         * Scan devices with low latency.
         * 
         * @experimental
 * @snapOS
         */
        LowLatency,
    }

    /**
     * State of a Bluetooth connection.
     * 
     * `Disconnected` The Bluetooth device is disconnected from Spectacles.
     * 
     * `Connected` The Bluetooth device is connected and bonded with Spectacles.
     * 
     * @experimental
 * @snapOS
     */
    enum ConnectionState {
        /**
         * State indicating that the device is disconnected.
         * 
         * @experimental
 * @snapOS
         */
        Disconnected,
        /**
         * State indicating that the device is successfully connected.
         * 
         * @experimental
 * @snapOS
         */
        Connected,
    }

    /**
     * The statuses for Bluetooth availability. Currently unsupported.
     * 
     * @experimental
 * @snapOS
     */
    enum BluetoothStatus {
        /**
         * Status indicating that the Bluetooth permissions or status have not been established.
         * 
         * @experimental
 * @snapOS
         */
        Unknown,
        /**
         * Status indicating that user has denied Bluetooth permissions.
         * 
         * @experimental
 * @snapOS
         */
        PermissionDenied,
        /**
         * Status indicating that Bluetooth functionality is not available.
         * 
         * @experimental
 * @snapOS
         */
        Unavailable,
        /**
         * Status indicating that Bluetooth is ready for use.
         * 
         * @experimental
 * @snapOS
         */
        Available,
    }

    /**
     * Properties of a {@link Bluetooth.BluetoothGattCharacteristic}.
     * 
     * @experimental
 * @snapOS
     */
    enum CharacteristicProperty {
        /**
         * Property indicating that the characteristic supports broadcasting.
         * 
         * @experimental
 * @snapOS
         */
        Broadcast,
        /**
         * Read and receive the current value of the characteristic.
         * 
         * @experimental
 * @snapOS
         */
        Read,
        /**
         * Write a new value to the characteristic without awaiting acknowledgment.
         * 
         * @experimental
 * @snapOS
         */
        WriteWithoutResponse,
        /**
         * Write a new value to the characteristic and await acknowledgment.
         * 
         * @experimental
 * @snapOS
         */
        Write,
        /**
         * Property indicating characteristic supports notifications.
         * 
         * @experimental
 * @snapOS
         */
        Notify,
        /**
         * Property indicating characteristic can send indications
         * 
         * @experimental
 * @snapOS
         */
        Indicate,
        /**
         * Property indicating characteristic supports signed write operations.
         * 
         * @experimental
 * @snapOS
         */
        SignedWrite,
        /**
         * Property indicating characteristic has extra properties.
         * 
         * @experimental
 * @snapOS
         */
        ExtendedProps,
        /**
         * Property indicating notifications must be encrypted.
         * 
         * @experimental
 * @snapOS
         */
        NotifyEncryptionRequired,
        /**
         * Property indicating indications must be encrypted.
         * 
         * @experimental
 * @snapOS
         */
        IndicateEncryptionRequired,
    }

    /**
     * Provides access to Bluetooth GATT devices. APIs include scanning for and connecting to these devices, and reading and writing to their descriptors and characteristics.
     */
    class BluetoothCentralModule extends Asset {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Start a scan for Bluetooth GATT devices. The first device which passes the predicate will be returned, at which point the scan will stop.
         * 
         * `filters` Filters to apply to the scan. If a device passes any filter then the predicate will be invoked for that device. If no filters are passed then the predicate will be invoked for all devices.
         * 
         * `settings` {@link Bluetooth.ScanSettings} to configure the scan.
         * 
         * `predicate` Predicate to select a device. Returning true will stop the scan and return the device.
         * 
         * __Returns:__ Promise resolving to the first device which passes the predicate. The promise is rejected if the scan times out.
         * 
         * ```javascript
         * var scanFilter = new Bluetooth.ScanFilter();
         * var scanSettings = new Bluetooth.ScanSettings();
         * scanSettings.timeoutSeconds = 30;
         * scanSettings.scanMode = Bluetooth.ScanMode.LowPower;
         * 
         * var scanResult = await script.bluetoothModule.startScan([scanFilter], scanSettings,
         *     function(result) {
         *         print("Running predicate on " + result.deviceName);
         *         return result.deviceName == "[DEVICE NAME]";
         *     }
         * );
         * 
         * print("Found GATT device " + scanResult.deviceName);
         * ```
         * 
         * @experimental
 * @snapOS
         */
        startScan(filters: Bluetooth.ScanFilter[], settings: Bluetooth.ScanSettings, predicate: (result: Bluetooth.ScanResult) => boolean): Promise<Bluetooth.ScanResult>;
        /**
         * Stop a scan for Bluetooth devices, if one is running.
         * 
         * @experimental
 * @snapOS
         */
        stopScan(): Promise<void>;
        /**
         * Connect to a GATT server on a given device address.
         * 
         * `deviceAddress` Address to which to connect. Received in {@link Bluetooth.ScanResult.deviceAddress}
         * 
         * __Returns:__ Promise resolving to a {Bluetooth.BluetoothGatt} object if successful. The Promise is rejected if the connection cannot be made.
         * 
         * @experimental
 * @snapOS
         */
        connectGatt(deviceAddress: Uint8Array): Promise<Bluetooth.BluetoothGatt>;
        /**
         * Get the current status of the Bluetooth adapter.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        status: Bluetooth.BluetoothStatus;
        /**
         * Event for Bluetooth status changes. _Currently unused_.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        onBluetoothStatusChangedEvent: event1<Bluetooth.BluetoothStatusChangedEvent, void>;
    }

    /**
     * Settings when scanning for Bluetooth devices via {@link BluetoothCentralModule.startScan}.
     */
    class ScanSettings extends ScriptObject {
                constructor();
        /**
         * Set the scanning timeout duration in seconds. After the timeout period the scan will stop and the promise will resolve.
         * 
         * @experimental
 * @snapOS
         */
        timeoutSeconds: number;
        /**
         * Specify whether to call the predicate function only for unique devices or not.
         * 
         * @experimental
 * @snapOS
         */
        uniqueDevices: boolean;
        /**
         * Set the scanning method.
         * 
         * @experimental
 * @snapOS
         */
        scanMode: Bluetooth.ScanMode;
    }

    /**
     * The results of a Bluetooth scan.
     */
    class ScanResult extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Address of the device.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        deviceAddress: Uint8Array;
        /**
         * Name of the advertised device, if available.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        deviceName: string | null;
        /**
         * ID of the device's manufacturer, if available.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        manufacturerId: number | null;
        /**
         * Signal strength of the received packet, measured in dBm.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        rssi: number | null;
        /**
         * Transmission power of the packet, measured in dBm.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        txPower: number | null;
        /**
         * Whether the device allows connections.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        isConnectable: boolean;
        /**
         * Data provided by the manufacturer, if available.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        manufacturerData: {[key:number]:Uint8Array};
        /**
         * Data related to the services offered by the device.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        serviceData: {[key:string]:Uint8Array};
    }

    /**
     * The filters to be used with {@link BluetoothCentralModule.startScan}.
     */
    class ScanFilter extends ScriptObject {
                constructor();
        /**
         * @experimental
 * @snapOS
         */
        deviceName: string | null;
        /**
         * Filter for devices based on a manufacturer ID. If undefined, no filtering on manufacturer ID is applied.
         * 
         * @experimental
 * @snapOS
         */
        manufacturerId: number | null;
        /**
         * Filter for devices based on a prefix of manufacturer data. If undefined, no filtering on manufacturer data is applied.
         * 
         * @experimental
 * @snapOS
         */
        manufacturerDataPrefix: Uint8Array | null;
        /**
         * Filter for devices based on a service UUID. If undefined, no filtering on service UUID is applied.
         * 
         * @experimental
 * @snapOS
         */
        serviceUUID: string | null;
    }

    /**
     * The event received when Maximum Transmission Unit (MTU) of a Bluetooth device has changed.
     * 
     * @experimental
 * @snapOS
     */
    class MtuChangedEvent extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The new Maximum Transmission Unit (MTU).
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        mtu: number;
    }

    /**
     * The event received when Bluetooth connection status has changed.
     * 
     * @experimental
 * @snapOS
     */
    class ConnectionStateChangedEvent extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The new state of the Bluetooth connection.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        state: Bluetooth.ConnectionState;
    }

    /**
     * The event received when Bluetooth status has changed. Currently unsupported.
     * 
     * @experimental
 * @snapOS
     */
    class BluetoothStatusChangedEvent extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The new Bluetooth status.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        status: Bluetooth.BluetoothStatus;
    }

    /**
     * Bluetooth GATT Services are collections of related {@link Bluetooth.BluetoothGattCharacteristic}s representing specific functions or features of a device. For example, a heart rate sensor might have a "Heart Rate" service, which in turn has characteristics like  "Heart Rate Measurement".
     */
    class BluetoothGattService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Retrieve a {@link Bluetooth.BluetoothGattCharacteristic} from this service using its UUID.
         * 
         * @experimental
 * @snapOS
         */
        getCharacteristic(characteristicUUID: string): Bluetooth.BluetoothGattCharacteristic;
        /**
         * Retrieve all {@link Bluetooth.BluetoothGattCharacteristic}s offered by this service.
         * 
         * @experimental
 * @snapOS
         */
        getCharacteristics(): Bluetooth.BluetoothGattCharacteristic[];
        /**
         * The UUID of the GATT service.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        uuid: string;
    }

    /**
     * Descriptors contain additional information and attributes of a {@link Bluetooth.BluetoothGattCharacteristic}.
     */
    class BluetoothGattDescriptor extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Read and receive the current value of the descriptor.
         * 
         * __Returns:__ The value in a `Uint8Array`
         * 
         * @experimental
 * @snapOS
         */
        readValue(): Promise<Uint8Array>;
        /**
         * Write a new value to the descriptor.
         * 
         * `value` The value in a `Uint8Array`
         * 
         * __Returns:__ Promise resolving to void when the value is successfully written.
         * 
         * @experimental
 * @snapOS
         */
        writeValue(value: Uint8Array): Promise<void>;
        /**
         * The UUID of the current descriptor.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        uuid: string;
    }

    /**
     * A characteristic of the Bluetooth GATT device.
     * 
     * Characteristics are the individual pieces of data within a {@link Bluetooth.BluetoothGattService} that provide specific information. For example, a heart rate sensor might have a Heart Rate service, and that service might have characteristics including "Heart Rate Measurement," "Sensor Location," etc.
     * 
     * __Value__ ({@link Bluetooth.BluetoothGattCharacteristic.readValue}, {@link Bluetooth.BluetoothGattCharacteristic.writeValue}): The actual data being exchanged.
     * 
     * __Properties__ ({@link Bluetooth.BluetoothGattCharacteristic.properties}): Define how the characteristic can be accessed (e.g., read, write, notify, indicate).
     * 
     * __Descriptors__ ({{@link Bluetooth.BluetoothGattCharacteristic.getDescriptor}, {@link Bluetooth.BluetoothGattCharacteristic.getDescriptors}): Provide additional information about the characteristic, such as its units or format.
     * 
     * __UUID__ ({@link Bluetooth.BluetoothGattCharacteristic.uuid}): A unique identifier that identifies the characteristic.
     * 
     * Common characteristics include battery level, heart rate, temperature, and device name.
     */
    class BluetoothGattCharacteristic extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Read and receive the current value of the characteristic.
         * 
         * __Returns:__ The value in a `Uint8Array`
         * 
         * @experimental
 * @snapOS
         */
        readValue(): Promise<Uint8Array>;
        /**
         * Write a new value to the characteristic.
         * 
         * `value` The value in a `Uint8Array`
         * 
         * __Returns:__ Promise resolving to void when the value is successfully written.
         * 
         * @experimental
 * @snapOS
         */
        writeValue(value: Uint8Array): Promise<void>;
        /**
         * Write a new value to the characteristic without awaiting acknowledgment.
         * 
         * `value` The value in a `Uint8Array`
         * 
         * @experimental
 * @snapOS
         */
        writeValueWithoutResponse(value: Uint8Array): Promise<void>;
        /**
         * Register the given callback to receive notifications. Registering a callback will unsubscribe any previous registration on this Characteristic.
         * 
         * `callback` The callback to register, which takes a single parameter `value` of type `Uint8Array`.
         * 
         * ```javascript
         * try {
         *     const value = await characteristic.registerNotifications();
         *     console.log("Received Uint8Array data: ", value);
         * } catch (error) {
         *     console.error("Failed to register notifications: ", error);
         * }
         * ```
         * 
         * __Returns:__ Promise resolving to void when the callback is successfully registered.
         * 
         * @experimental
 * @snapOS
         */
        registerNotifications(callback: (value: Uint8Array) => void): Promise<void>;
        /**
         * Unregister all notifications.
         * 
         * __Returns:__ Promise resolving to void when all notifications are successfully unregistered.
         * 
         * @experimental
 * @snapOS
         */
        unregisterNotifications(): Promise<void>;
        /**
         * Retrieve a specific {@link Bluetooth.BluetoothGattDescriptor} by its UUID from this characteristic.
         * 
         * @experimental
 * @snapOS
         */
        getDescriptor(descriptorUUID: string): Bluetooth.BluetoothGattDescriptor;
        /**
         * Retrieve all descriptors associated with this characteristic.
         * 
         * @experimental
 * @snapOS
         */
        getDescriptors(): Bluetooth.BluetoothGattDescriptor[];
        /**
         * The unique identifier of this characteristic.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        uuid: string;
        /**
         * The supported properties (e.g., read, write) of the characteristic, as an Array of {@link Bluetooth.CharacteristicProperty} values.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        properties: Bluetooth.CharacteristicProperty[];
    }

    /**
     * Provides access to the Bluetooth connection.
     */
    class BluetoothGatt extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Re-establish connection to the device. Asynchronous call: to detect when the device is connected listen on the {@link Bluetooth.BluetoothGatt.onConnectionStateChangedEvent}.
         * 
         * @experimental
 * @snapOS
         */
        connect(): void;
        /**
         * Unpair or disconnect from the device. Asynchronous call: to detect when the device is disconnected listen on the {@link Bluetooth.BluetoothGatt.onConnectionStateChangedEvent}.
         * 
         * @experimental
 * @snapOS
         */
        disconnect(): void;
        /**
         * Terminate the Bluetooth client connection, disconnection included if applicable.
         * 
         * @experimental
 * @snapOS
         */
        close(): void;
        /**
         * Retrieve a specific {@link Bluetooth.BluetoothGattService} using its UUID from the GATT server.
         * 
         * @experimental
 * @snapOS
         */
        getService(serviceUUID: string): Bluetooth.BluetoothGattService;
        /**
         * Retrieve all available services from the GATT server.
         * 
         * @experimental
 * @snapOS
         */
        getServices(): Bluetooth.BluetoothGattService[];
        /**
         * Event to observe changes in connection state.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        onConnectionStateChangedEvent: event1<Bluetooth.ConnectionStateChangedEvent, void>;
        /**
         * Event to observe changes in Maximum Transmission Unit (MTU).
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        onMtuChangedEvent: event1<Bluetooth.MtuChangedEvent, void>;
        /**
         * The state of the GATT connection represented as a {@link Bluetooth.ConnectionState} enum.
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        connectionState: Bluetooth.ConnectionState;
        /**
         * The current Maximum Transmission Unit (MTU).
         * 
         * @readonly
 * @experimental
 * @snapOS
         */
        mtu: number;
    }

}

declare namespace CameraModule {
    /**
     * A handle to specify which camera on the Spectacles to request from. Used with `CameraModule.createCameraRequest`.
     * 
     * @exposesUserData
 * @snapOS
     */
    enum CameraId {
        /**
         * The default color camera. On Spectacles (2024), the default color camera is located on the left side of the device.
         * 
         * @exposesUserData
 * @snapOS
         */
        Default_Color,
        /**
         * The color camera on the left side of the device.
         * 
         * @exposesUserData
 * @snapOS
         */
        Left_Color,
        /**
         * The color camera on the right side of the device.
         * 
         * @exposesUserData
 * @snapOS
         */
        Right_Color,
    }

    /**
     * An object that is used to request the desired camera ID. It should be passed to the CameraModule to get back a camera texture.
     * 
     * @exposesUserData
 * @snapOS
     */
    class CameraRequest extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The id of the camera to be accessed.
         * 
         * @exposesUserData
 * @snapOS
         */
        cameraId: CameraModule.CameraId;
        /**
         * The desired resolution of the received camera frame. If not specified, will use the system default resolution. It is recommended to use lowest resolution required for your use case to save on power and not overheat the device.
         * 
         * @exposesUserData
 * @snapOS
         */
        imageSmallerDimension: number | null;
    }

    /**
     * Spectacles: ImageRequest contains the parameterization for a still image request, which is a request for a high resolution image of the user's current camera stream.
     * 
     * @remarks
     * This object is created from the {@link CameraModule}. Currently there are no parameters that can be set for an ImageRequest.
     * 
     * @exposesUserData
 * @snapOS
     */
    class ImageRequest extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The resolution of the Image Request
         * 
         * @exposesUserData
 * @snapOS
         */
        resolution: vec2;
        /**
         * The crop of the Image Request.
         * 
         * @exposesUserData
 * @snapOS
         */
        crop: Rect;
    }

}

declare namespace Commerce {
    /**
     * Defines the type of product that can be purchased in a Lens.
     * 
     * @snapOS
     */
    enum ProductType {
        /**
         * A placeholder indicating an unknown product type, which usually suggests that the product catalog is not properly
         * configured.
         * 
         * @snapOS
         */
        Unknown,
        /**
         * A one-time purchase that grants permanent access or ownership to an item or feature.
         * Once purchased, it does not expire or need to be repurchased. Examples include unlocking a character, a specific
         * effect, or a permanent filter.
         * 
         * @snapOS
         */
        NonConsumable,
    }

    /**
     * Defines the possible outcomes of a purchase attempt in a Lens
     * 
     * @snapOS
     */
    enum ResponseCode {
        /**
         * The transaction was completed without any issues.
         * 
         * @snapOS
         */
        Success,
        /**
         * The user intentionally stopped the purchase process, typically by closing the payment interface or declining the
         * transaction. No purchase was made.
         * 
         * @snapOS
         */
        UserCanceled,
        /**
         * The user attempted to purchase an item they already own. This usually applies to non-consumable products that are
         * not meant to be purchased multiple times.
         * 
         * @snapOS
         */
        ItemAlreadyOwned,
        /**
         * Indicates that an attempt was made to consume or interact with an item that the user does not currently own.
         * This can happen if an item was previously consumed, refunded, or never purchased in the first place.
         * 
         * @snapOS
         */
        ItemNotOwned,
        /**
         * The requested item cannot be purchased at this time, possibly due to regional restrictions, being out of stock,
         * or not being published.
         * 
         * @snapOS
         */
        ItemUnavailable,
        /**
         * An error occurred with the user's payment method or during the payment processing stage.
         * This could be due to insufficient funds, an invalid payment method, or issues with the payment provider.
         * The user might need to check their payment details or try again with a different method.
         * 
         * @snapOS
         */
        PaymentUnavailable,
        /**
         * A general error occurred during the purchase process that doesn't fit into the other specific categories.
         * This could be due to various reasons, such as unexpected system issues, network problems, or other unhandled
         * exceptions during the transaction. You might need to check the `debugMessage` for more details.
         * 
         * @snapOS
         */
        Error,
        /**
         * The commerce backend service is temporarily down or experiencing issues. This is usually a transient problem,
         * and users should be advised to try again later.
         * 
         * @snapOS
         */
        ServiceUnavailable,
        /**
         * The connection to the commerce service was unexpectedly lost during an operation. This may be due to network
         * instability or the service becoming unavailable. You may need to attempt to re-establish the connection.
         * 
         * @snapOS
         */
        ServiceDisconnected,
        /**
         * An issue with the network connection prevented the operation from completing successfully. This could be due to
         * a lost internet connection or other network-related problems. Users should verify their network settings and try
         * again.
         * 
         * @snapOS
         */
        NetworkError,
    }

    /**
     * Represents the state of a purchase in a Lens.
     * 
     * @snapOS
     */
    enum PurchaseState {
        /**
         * The product is not currently in the user's purchase history, meaning it has not been purchased or is no longer
         * considered owned. For items that should be owned, this typically means the user has not yet acquired it.
         * 
         * @snapOS
         */
        Unset,
        /**
         * The product has been successfully bought and the transaction is complete. At this state, the user should have
         * access to the purchased item or feature.
         * 
         * @snapOS
         */
        Purchased,
        /**
         * The purchase has been invalidated, meaning it is no longer considered active or valid.
         * This can happen for several reasons, such as a refund being issued for the purchase, or other system-level
         * invalidations. When a purchase is invalidated, the user should no longer have access to the associated product
         * or feature.
         * 
         * @snapOS
         */
        Invalidated,
        /**
         * The purchase is currently in a state of waiting for further action or confirmation. This might occur if the
         * transaction requires additional verification, if there's a delay in payment processing, or for certain types of
         * payment methods. The purchase is not yet finalized, and the user may not have access to the item until its state
         * changes to `Purchased`. You should monitor for updates to this purchase through the
         * {@link ClientOptions}.onPurchasesUpdated.
         * 
         * @snapOS
         */
        Pending,
    }

    /**
     * Provides an immediate summary of the outcome of a purchase attempt.
     * It indicates whether the transaction was successful, canceled by the user, or if an error occurred.
     * This is the first place to look to understand the immediate result of a purchase flow.
     * 
     * @snapOS
     */
    class PurchaseResult extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Tells you if the purchase was successful or if something went wrong.
         * It's like a signal that gives you an immediate update on the transaction's outcome.
         * 
         * @readonly
 * @snapOS
         */
        responseCode: Commerce.ResponseCode;
        /**
         * If there was an issue with your purchase, this message provides more specific information to help you understand
         * what happened. It’s useful for troubleshooting and diagnosing problems that might occur during the purchase
         * process.
         * 
         * @readonly
 * @snapOS
         */
        debugMessage: string;
    }

    /**
     * Represents a completed or pending transaction for a product.
     * When a user buys something, or when their purchase history is retrieved, `Purchase` objects are received.
     * These objects contain important details like the unique ID of the purchase, the ID of the product that was bought,
     * when the purchase occurred, and its current state (e.g., purchased, pending, or invalidated).
     * 
     * @snapOS
     */
    class Purchase extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * A unique identifier generated by the payment system for the order.
         * It can be useful for linking purchases to specific order records in your backend or for support purposes.
         * 
         * @readonly
 * @snapOS
         */
        token: string;
        /**
         * The unique identifier for the product that was purchased.
         * It's the same ID you use to identify the product in the store or when querying for product details.
         * 
         * @readonly
 * @snapOS
         */
        productId: string;
        /**
         * Represents the exact moment the purchase was made, measured as the number of milliseconds since
         * January 1, 1970, UTC (Unix epoch time).
         * This timestamp is crucial for tracking purchase dates, managing subscriptions, and for reconciliation purposes.
         * 
         * @readonly
 * @snapOS
         */
        purchaseTime: number;
        /**
         * Indicates the current status of the transaction.
         * 
         * @readonly
 * @snapOS
         */
        purchaseState: Commerce.PurchaseState;
    }

    /**
     * Contains all the essential details about an item available for purchase in a Lens.
     * When products are queried, these objects are received, which include information like the product's unique ID,
     * its type (e.g., a non-consumable), its display name, a description, and its price.
     * This information is crucial for presenting products to users in a Lens's store or interface.
     * 
     * @snapOS
     */
    class Product extends ScriptObject {
                constructor(id: string, type: Commerce.ProductType, displayName: string, description: string, price: Commerce.Price, iconUri?: string, extras?: string);
        /**
         * A unique identifier for the product of the Lens. This is a crucial piece of information for referencing the
         * product within the commerce system and for internal tracking.
         * 
         * @readonly
 * @snapOS
         */
        id: string;
        /**
         * Specifies the category of the product, which impacts how it behaves in the store.
         * 
         * @readonly
 * @snapOS
         */
        type: Commerce.ProductType;
        /**
         * The name of the product as it will appear to users in the store or within your Lens.
         * It should be clear and appealing.
         * 
         * @readonly
 * @snapOS
         */
        displayName: string;
        /**
         * A brief explanation of what the product is, its features, or its benefits.
         * This text helps users understand what they are buying before they make a purchase.
         * 
         * @readonly
 * @snapOS
         */
        description: string;
        /**
         * The cost of the product, provided as a {@link Price} object.
         * This object holds the price as a standard decimal value, along with currency and country codes,
         * ensuring accurate and properly formatted display of prices to users.
         * 
         * @readonly
 * @snapOS
         */
        price: Commerce.Price;
        /**
         * An optional field that provides a URI to an image file that can serve as an icon for the product.
         * It's typically used to display a visual representation of the product within a store interface or other UI
         * elements, helping users quickly identify and differentiate items.
         * 
         * @readonly
 * @snapOS
         */
        iconUri: string | null;
        /**
         * Allows you to include any additional information or custom data related to the product.
         * It can be used to store JSON-encoded strings with extra metadata that is not covered by the other standard
         * fields. This is useful for flexible product configurations or displaying unique product attributes within your
         * Lens.
         * 
         * @readonly
 * @snapOS
         */
        extras: string | null;
    }

    /**
     * Represents the price of a product in a Lens.
     * 
     * @snapOS
     */
    class Price extends ScriptObject {
                constructor(price: number, displayPrice: string, currency: string);
        /**
         * The price of the product in cents (e.g., 1099 for $10.99 USD).
         * This format is commonly used for displaying prices.
         * 
         * @readonly
 * @snapOS
         */
        price: number;
        /**
         * Provides a pre-formatted string of the product's price, including the appropriate currency symbol and localized
         * formatting (e.g., "$10.99" in the US, "10,99 €" in Europe). This ensures prices are displayed clearly and
         * correctly to users worldwide without requiring manual formatting.
         * 
         * @readonly
 * @snapOS
         */
        displayPrice: string;
        /**
         * The standard three-letter code that indicates the currency of the price (e.g., "USD" for US Dollars,
         * "EUR" for Euros). It helps ensure that prices are displayed and processed correctly across different regions.
         * 
         * @readonly
 * @snapOS
         */
        currency: string;
    }

    /**
     * Specifies the configuration for creating a commerce client.
     * It defines important behaviors and callback functions, such as the `onPurchasesUpdated`,
     * which is essential for receiving real-time notifications about the status of user purchases.
     * 
     * @snapOS
     */
    class ClientOptions extends ScriptObject {
                constructor(onPurchasesUpdated: (result: Commerce.PurchaseResult, purchases: Commerce.Purchase[]) => void);
        /**
         * Essential for receiving real-time updates on the status of user purchases.
         * It is invoked when a purchase is completed, cancelled, or encounters an error, allowing your Lens to react
         * appropriately (e.g., granting access to a purchased item or displaying an error message).
         * The `result` parameter provides a summary of the outcome, and the optional `purchases` array contains details
         * of the transactions if successful.
         * 
         * @snapOS
         */
        onPurchasesUpdated: (result: Commerce.PurchaseResult, purchases: Commerce.Purchase[]) => void;
        /**
         * An optional field that intended for advanced configuration of the CommerceKit client and is not
         * recommended for general developer use. It accepts a JSON-formatted string to allow for flexible customization
         * of the commerce module's behavior, primarily through various settings or extra data, to meet specific internal
         * requirements or features.
         * 
         * @snapOS
         */
        extras: string | null;
    }

    /**
     * The primary interface for interacting with the commerce system within a Lens.
     * Once built and configured using the {@link CommerceKitModule}, its methods are used to perform all key commerce
     * operations. This includes initiating connections to the payment service, querying details about products,
     * launching purchase flows for users, checking a user's purchase history, and acknowledging completed purchases.
     * 
     * @snapOS
     */
    class Client extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Initiates a connection to the payment service, which is a necessary first step before you can perform any
         * commerce-related operations like querying products or launching purchase flows.
         * 
         * Returns: A Promise that resolves with no value when the connection is successfully established.
         * 
         * Throws: A `Error` if there's no network connection or if the payment service is temporarily unavailable.
         * You should handle these errors to provide appropriate feedback to the user.
         * 
         * @snapOS
         */
        startConnection(): Promise<void>;
        /**
         * Closes the connection to the payment service. It's good practice to call this method when you're finished with
         * commerce operations or when your Lens is being closed to free up resources.
         * There is no return value, and it doesn't throw exceptions, as it handles its own finalization.
         * 
         * @snapOS
         */
        endConnection(): void;
        /**
         * Allows you to retrieve detailed information about specific products from the commerce platform.
         * You provide a list of product IDs, and it returns all available details for those products, such as display name,
         * description, and price.
         * 
         * productIds: An array of strings, where each string is a unique identifier for a product you want to query.
         * 
         * Returns: A Promise that resolves to an array of {@link Product} objects. Each object in the array contains
         * comprehensive details about a product. If a product ID is not found, it might not be included in the returned
         * array, or an error might be thrown.
         * 
         * Throws: A `Error` if a product is not found, there's no network connection, or the service is unavailable.
         * 
         * @snapOS
         */
        queryProductDetails(productIds: string[]): Promise<Commerce.Product[]>;
        /**
         * Starts the process for a user to buy a specific product.
         * It will typically open a user interface where the user can confirm their purchase and enter payment details.
         * 
         * productId: The unique identifier of the product you want the user to purchase.
         * 
         * Returns: A Promise that resolves to a {@link PurchaseResult} object. This object indicates whether the purchase
         * flow was successfully launched, canceled by the user, or if an error occurred.
         * 
         * Throws: A `Error` if the product is not found, the user's payment method is invalid, there's no network
         * connection, or the service is unavailable.
         * 
         * @snapOS
         */
        launchPurchaseFlow(productId: string): Promise<Commerce.PurchaseResult>;
        /**
         * Fetches a record of all purchases the user has made previously.
         * This is particularly useful for ensuring that users retain access to products they've already bought, especially
         * for non-consumable items or subscriptions. It can also help verify past transactions.
         * 
         * Returns: A Promise that resolves to an array of {@link Purchase} objects. Each object in the array represents a
         * past transaction.
         * 
         * Throws: An `Error` if there's no network connection or if the service is unavailable.
         * 
         * @snapOS
         */
        queryPurchaseHistory(): Promise<Commerce.Purchase[]>;
        /**
         * Allows you to check the user's ownership or purchase status for products of a specific category.
         * For example, you can use it to see all "non-consumable" items the user has purchased.
         * It's useful for verifying if a user has already bought certain items or to retrieve details of their existing
         * purchases based on how the product is classified.
         * 
         * productType: The type of products you want to look up, like "non-consumable"
         * 
         * Returns: A list of {@link Purchase} objects that represent all transactions for products of the specified type.
         * If no purchases of that type are found, the list will be empty. If there's a problem connecting to the service,
         * it will show an error.
         * 
         * @snapOS
         */
        queryPurchase(productType: Commerce.ProductType): Promise<Commerce.Purchase[]>;
        /**
         * After a user makes a purchase, especially for consumable or subscription items, it's crucial to acknowledge that
         * purchase. This tells the payment system that you have successfully delivered the purchased item or service to the
         * user, and prevents the purchase from being automatically refunded.
         * 
         * purchaseToken: The unique identifier associated with the purchase requiring acknowledgment. This token is
         * received as part of the {@link Purchase} object.
         * 
         * Returns: A Promise that resolves with a {@link PurchaseResult} object that tells if the purchase has been
         * successfully acknowledged, canceled by the user, or if an error occurred.
         * 
         * Throws: A `Error` if the purchase has already been acknowledged, there's no network connection,
         * or the service is unavailable.
         * 
         * @snapOS
         */
        acknowledgePurchase(purchaseToken: string): Promise<Commerce.PurchaseResult>;
    }

}

declare namespace MappingSession {
    /**
     * Determines what data is included in the checkpoint of the @MappingSession.
     */
    enum MappingScope {
        /**
         * The checkpoint should contain all seen and tracked area.
         */
        All,
        /**
         * The checkpoint should only contain areas seen and tracked after the MappingSession was constructed.
         */
        New,
    }

    enum MappingThrottling {
        /**
         * No CPU usage; temporarily pause.
         */
        Off,
        /**
         * Minimum CPU usage while still mapping.
         */
        Background,
        /**
         * A default mapping method. Equivalent to 'Foreground' when mapping new and 'Background' when incremental mapping.
         */
        Auto,
        /**
         * Maximum CPU usage to mapping.
         */
        Foreground,
    }

}

declare namespace MotionController {
    /**
     * Defines a set of haptic feedback patterns that can be requested.
     * 
     * @wearableOnly
     */
    enum HapticFeedback {
        /**
         * Default value, same as `Tick`.
         * 
         * @wearableOnly
         */
        Default,
        /**
         * A brief, single haptic effect that simulates a ticking or clicking sensation.
         * 
         * @wearableOnly
         */
        Tick,
        /**
         * A subtle haptic effect used to confirm a selection or interaction.
         * 
         * @wearableOnly
         */
        Select,
        /**
         * A positive haptic pattern indicating that an action was completed successfully.
         * 
         * @wearableOnly
         */
        Success,
        /**
         * A negative haptic pattern indicating that an action failed or encountered an issue.
         * 
         * @wearableOnly
         */
        Error,
        /**
         * A gentle vibration for less intense feedback.
         * 
         * @wearableOnly
         */
        VibrationLow,
        /**
         * A moderate vibration for standard feedback intensity.
         * 
         * @wearableOnly
         */
        VibrationMedium,
        /**
         * A strong vibration for more pronounced feedback.
         * 
         * @wearableOnly
         */
        VibrationHigh,
    }

    /**
     * Enum for describing the motion type.
     * 
     * @wearableOnly
     */
    enum MotionType {
        /**
         * Transform of this object does not change.
         * 
         * @wearableOnly
         */
        NoMotion,
        /**
         * Only the rotation of the object is changed.
         * 
         * @wearableOnly
         */
        ThreeDoF,
        /**
         * Both position and rotation of the object are changed.
         * 
         * @wearableOnly
         */
        SixDoF,
    }

    /**
     * Describes Motion Controller tracking quality state, whether the data received from the Motion Controller is accurate or not.
     * 
     * @wearableOnly
     */
    enum TrackingQuality {
        /**
         * The tracking quality is unknown. This usually means that the controller is not available.
         * 
         * @wearableOnly
         */
        Unknown,
        /**
         * Transform tracking of the Motion Controller is providing optimal results.
         * 
         * @wearableOnly
         */
        Normal,
        /**
         * Transform tracking of the Motion Controller is providing limited quality results.
         * 
         * @wearableOnly
         */
        Limited,
    }

    /**
     * Enum that defines a current state of a touch interaction with the touchpad of the motion controller.
     * 
     * @wearableOnly
     */
    enum TouchPhase {
        /**
         * Indicates that a touch event has started. This is triggered when the user initially touches the interactive area.
         * 
         * @wearableOnly
         */
        Began,
        /**
         * Indicates that the touch event has moved. This is triggered when the user drags or slides their finger across the interactive area.
         * 
         * @wearableOnly
         */
        Moved,
        /**
         * Indicates that the touch event has ended. This occurs when the user lifts their finger off the interactive area, completing the touch interaction.
         * 
         * @wearableOnly
         */
        Ended,
        /**
         * Indicates that the touch event was interrupted or canceled, typically due to an error or the touch being outside the interactive area.
         * 
         * @wearableOnly
         */
        Canceled,
    }

    /**
     * Settings for configuring a motion controller.
     * 
     * @wearableOnly
     */
    class MotionControllerOptions extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates the configurations to be used with the {@link MotionController}
         * 
         * @wearableOnly
         */
        static create(): MotionController.MotionControllerOptions;
        /**
         * The unique identifier to connect to a motion controller. The only value currently supported is empty (`""`), which will result in the Mobile Controller being requested.
         * 
         * @wearableOnly
         */
        controllerId: string;
        /**
         * Represents the motion type of the motion controller.
         * 
         * @wearableOnly
         */
        motionType: MotionController.MotionType;
    }

    namespace Options {
        /**
         * Create a new options object.
         * 
         * @deprecated Use {@link MotionControllerOptions#create}
         * 
         * @deprecated
 * @wearableOnly
         */
        function create(): MotionController.MotionControllerOptions;
    }

    /**
     * Describes a request for haptic feedback.
     * 
     * @wearableOnly
     */
    class HapticRequest extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Create an instance of the Haptic Request.
         * 
         * @wearableOnly
         */
        static create(): MotionController.HapticRequest;
        /**
         * A type of haptic feedback.
         * 
         * @wearableOnly
         */
        hapticFeedback: MotionController.HapticFeedback;
        /**
         * How long the haptic request should last for.
         * 
         * @wearableOnly
         */
        duration: number;
    }

}

declare namespace ConnectedLensSessionOptions {
    /**
     * Type of the created Connected Lens session.
     */
    enum SessionCreationType {
        /**
         * New Session was created.
         */
        New,
        /**
         * Session was joined via invite.
         */
        MultiplayerReceiver,
        /**
         * A Connected Lens session with only the current user.
         */
        NewSoloMode,
    }

}

declare namespace RealtimeStoreCreateOptions {
    /**
     * The ownership model of a realtime store.
     */
    enum Ownership {
        /**
         * Indicates ownership of an entity. Only the owner can edit a store.
         */
        Owned,
        /**
         * Indicates ownership of an entity. Any user in the session can edit an unowned store.
         */
        Unowned,
    }

    /**
     * The persistence model for a realtime store.
     */
    enum Persistence {
        /**
         * Indicates that the entity will be deleted after it is broadcast.
         */
        Ephemeral,
        /**
         * Indicates that the entity will be deleted when the owner leaves.
         */
        Owner,
        /**
         * Indicates that the entity will be marked as unowned when the owner leaves. The Entity will be deleted when all clients leave.
         */
        Session,
        /**
         * Indicates that the entity will be marked as unowned when the owner leaves. The Entity will be created as unowned when any client rejoins.
         */
        Persist,
    }

}

declare namespace MachineLearning {
    /**
     * Timing options for when MLComponent should start or stop running. Used with `MLComponent.runScheduled()`.
     * For more information, see the [MLComponent Scripting](/lens-studio/features/snap-ml/ml-component/scripting-ml-component) guide.
     */
    enum FrameTiming {
        /**
         * Only valid as an end timing. There is no exact time specified when MLComponent should finish its run.
         */
        None,
        /**
         * Run during MLComponent update, before script update.
         */
        Update,
        /**
         * Run in MLComponent LateUpdate, after all scripts update, but before they get LateUpdate.
         */
        LateUpdate,
        /**
         * Run at a specific point during frame rendering.
         */
        OnRender,
    }

    /**
     * Inference modes used by `MLComponent.inferenceMode`. Each mode describes how the neural network will be run.
     */
    enum InferenceMode {
        /**
         * MLComponent will run the neural network on CPU. Available on all devices.
         */
        CPU,
        /**
         * MLComponent will attempt to run the neural network on GPU. If the device doesn't support it, CPU mode will be used instead.
         */
        GPU,
        /**
         * MLComponent will attempt to use a dedicated hardware accelerator to run the neural network. If the device doesn't support it, GPU mode will be used instead.
         */
        Accelerator,
        /**
         * MLComponent will automatically decide how to run the neural network based on what is supported. It will start with Accelerator, then fall back to GPU, then CPU.
         */
        Auto,
        /**
         * MLComponent will run the model on CPU using device native backend (like CoreML on Apple devices).
         */
        NativeCPU,
        /**
         * NativeCPUAndNPU: MLComponent will try to run the model using device Neural Processing Unit (e.g. Apple Neural Engine on Apple devices) if exists and model is supported, with fallback support for running on CPU.
         */
        NativeCPUAndNPU,
    }

    /**
     * Used with {@link BasePlaceHolder}.
     */
    enum DataLayout {
        /**
         * Layout where order is: batch, channels, height, width.
         */
        NCHW,
        /**
         * Layout where order is: batch, height, width, channels.
         */
        NHWC,
    }

    /**
     * Types of output used by OutputPlaceholder.
     */
    enum OutputMode {
        /**
         * The output will be in the form of a Float32Array.
         */
        Data,
        /**
         * The output will be in the form of a Texture.
         */
        Texture,
    }

    /**
     * Describes the current state of the MLComponent model.
     * For more information, see the [MLComponent Scripting](/lens-studio/features/snap-ml/ml-component/scripting-ml-component) guide.
     */
    enum ModelState {
        /**
         * Model is loading
         */
        Loading,
        /**
         * Model is running
         */
        Running,
        /**
         * Model is built and ready to run
         */
        Idle,
        /**
         * Model is not ready to run
         */
        NotReady,
        /**
         * An error was encountered while loading the model.
         */
        LoadingError,
    }

    /**
     * Creates a new InputBuilder object.
     */
    function createInputBuilder(): InputBuilder;
    /**
     * Creates a new OutputBuilder object.
     */
    function createOutputBuilder(): OutputBuilder;
    /**
     * Creates a new TransformerBuilder object.
     */
    function createTransformerBuilder(): TransformerBuilder;
    /**
     * Creates SamplerBuilder.
     */
    function createSamplerBuilder(): SamplerBuilder;
    /**
     * Creates a new SpectrogramBuilder object.
     */
    function createSpectrogramBuilder(): SpectrogramBuilder;
    /**
     * Creates a new MelSpectrogramBuilder object.
     */
    function createMelSpectrogramBuilder(): MelSpectrogramBuilder;
    /**
     * Creates a new MFCCBuilder object.
     */
    function createMFCCBuilder(): MFCCBuilder;
    /**
     * Creates a new DeltaBuilder object.
     */
    function createDeltaBuilder(): DeltaBuilder;
    /**
     * Creates a new DelayBuilder object.
     */
    function createDelayBuilder(): DelayBuilder;
    function createPitchShifterBuilder(): PitchShifterBuilder;
    function createNoiseReductionBuilder(): NoiseReductionBuilder;
}

declare namespace RemoteServiceHttpRequest {
    /**
     * The http method which should be used to send this http request.
     * 
     * @snapOS
 * @cameraKit
     */
    enum HttpRequestMethod {
        /**
         * Get method.
         * 
         * @snapOS
 * @cameraKit
         */
        Get,
        /**
         * Post method.
         * 
         * @snapOS
 * @cameraKit
         */
        Post,
        /**
         * Put method.
         * 
         * @snapOS
 * @cameraKit
         */
        Put,
        /**
         * Delete method.
         * 
         * @snapOS
 * @cameraKit
         */
        Delete,
        /**
         * Patch method.
         * 
         * @snapOS
 * @cameraKit
         */
        Patch,
    }

}

declare namespace ClothVisual {
    /**
     * Cloth bend mode to use for cloth simulation.
     */
    enum BendMode {
        Isometric,
        Linear,
    }

}

declare namespace TextToSpeech {
    namespace VoiceNames {
    }

    /**
     * Provides the configuration for the {@link TextToSpeechModule}.   It is used to control the language of the generated voice, the voice’s style and pace.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class Options extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates options for the {@link TextToSpeechModule}.
         * 
         * @deprecated
         */
        static create(): TextToSpeech.Options;
        /**
         * The name of the voice. If not set, the service will choose the default voice based on the chosen language.  Supported voice names: `Sasha`
         * 
         * @deprecated
         */
        voiceName: string;
    }

    /**
     * Parameter returned in the `onTTSCompleteHandler` callback providing timing details for word pronunciation.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class WordInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The time in milliseconds when the word started in the audio.
         * 
         * @deprecated
 * @readonly
         */
        startTime: number;
        /**
         * The time in milliseconds when the word ended in the audio.
         * 
         * @deprecated
 * @readonly
         */
        endTime: number;
        /**
         * The words the synthesized audio was generated for (as text might be expanded during the synthesize process, there might be a slight variation between the input text and the words returned).
         * 
         * @deprecated
 * @readonly
         */
        word: string;
    }

    /**
     * Provides a map of what phoneme is said at what time in the synthesized speech.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class PhonemeInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Phoneme start time in milliseconds.
         * 
         * @deprecated
 * @readonly
         */
        startTime: number;
        /**
         * Phoneme end time in milliseconds.
         * 
         * @deprecated
 * @readonly
         */
        endTime: number;
        /**
         * The phoneme found for the alloted time.
         * 
         * @deprecated
 * @readonly
         */
        phoneme: string;
        /**
         * Is the phonemes part of an abusive word.
         * 
         * @deprecated
 * @readonly
         */
        isAbusive: boolean;
    }

}

declare namespace TextInputSystem {
    /**
     * The different input style of keyboard input.
     */
    enum KeyboardType {
        /**
         * A keyboard type for entering normal text
         */
        Text,
        /**
         * A keyboard type for entering digits
         */
        Num,
        /**
         * A keyboard type for entering phone numbers
         */
        Phone,
        /**
         * A keyboard type for entering URLs
         */
        Url,
        /**
         * A keyboard type for entering passwords.
         * 
         * @wearableOnly
         */
        Password,
        /**
         * @wearableOnly
         */
        Pin,
    }

    /**
     * The return key style of keyboard input.
     */
    enum ReturnKeyType {
        /**
         * Return key label shows "Done"
         */
        Done,
        /**
         * Return key label shows "Go"
         */
        Go,
        /**
         * Return key label shows "Next"
         */
        Next,
        /**
         * Return key label shows "return"
         */
        Return,
        /**
         * Return key label shows "Search"
         */
        Search,
        /**
         * Return key label shows "Send"
         */
        Send,
    }

    /**
     * The settings used for how the input keyboard should work.
     */
    class KeyboardOptions {
                constructor();
        /**
         * Initial text to fill into the invisible text view.
         */
        initialText: string;
        /**
         * Initial selected text range to set on the inivisible text view.
         */
        initialSelectedRange: vec2;
        /**
         * Requested keyboard type.
         */
        keyboardType: TextInputSystem.KeyboardType;
        /**
         * Requested return key type.
         */
        returnKeyType: TextInputSystem.ReturnKeyType;
        /**
         * Sets whether a preview should be visible above the input keyboard.
         */
        enablePreview: boolean;
        /**
         * Callback to be invoked every time the user presses a (non-return) key.
         */
        onTextChanged: (text: string, range: vec2) => void;
        /**
         * Callback to be invoked when the user presses the return key.
         */
        onReturnKeyPressed: () => void;
        /**
         * Callback to be invoked when keyboard is shown or dismissed.
         */
        onKeyboardStateChanged: (keyboardIsOpen: boolean) => void;
        /**
         * Callback to be invoked when there is an error.
         */
        onError: (error: number, description: string) => void;
    }

}

declare namespace Physics {
    /**
     * Constraint type used by a {@link Constraint}.   See also: {@link Constraint}, {@link ConstraintComponent}.
     */
    enum ConstraintType {
        /**
         * Constrains colliders to fixed rotation and position. See {@link FixedConstraint}.
         */
        Fixed,
        /**
         * Constrains colliders to rotate around a single axis. See {@link HingeConstraint}.
         */
        Hinge,
        /**
         * Constrains colliders to rotate around a point. See {@link PointConstraint}.
         */
        Point,
    }

    /**
     * Type of force to use when applying force or torque to a {@link BodyComponent}.
     */
    enum ForceMode {
        /**
         * Continuous force (kg*cm/s^2), used for cases where force is applied over multiple frames.
         */
        Force,
        /**
         * Continuous acceleration (cm/s^2), applied without respect to mass, used for cases where force is applied over multiple frames.
         */
        Acceleration,
        /**
         * Instantaneous force impulse (kg*cm/s).
         */
        Impulse,
        /**
         * Instantaneous change in velocity (cm/s), applied without respect to mass.
         */
        VelocityChange,
    }

    /**
     * Get settings that apply to the implicit root world.
     */
    function getRootWorldSettings(): Physics.WorldSettingsAsset;
    /**
     * Create an intersection probe that spans all worlds.
     */
    function createGlobalProbe(): Probe;
    /**
     * Create an intersection probe for the implicit root world.
     */
    function createRootProbe(): Probe;
    namespace Constraint {
        /**
         * Create a constraint of the given type, with default settings.
         */
        function create(type: Physics.ConstraintType): Constraint;
    }

    /**
     * Script interface for applying collision filtering to colliders and ray/shape-casts.
     */
    class Filter extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Create an instance with default settings.
         */
        static create(): Physics.Filter;
        /**
         * Include static objects in intersection tests.
         */
        includeStatic: boolean;
        /**
         * Include dynamic objects in intersection tests.
         */
        includeDynamic: boolean;
        /**
         * Include intangible objects in intersection tests.
         */
        includeIntangible: boolean;
        /**
         * Include backface hits in raycast tests. When disabled (default), rays only hit front-facing surfaces. This setting only affects raycasts, not shapecasts.
         */
        includeBackfaces: boolean;
        /**
         * If non-empty, only perform collision with colliders in these layers. In other words: the set of layers to include when performing collision tests, excluding all others. If empty, this setting is disabled (effectively including all layers, minus skipLayers).
         */
        onlyLayers: LayerSet;
        /**
         * Skip collision with colliders in these layers. In other words: the set of layers to exclude when performing collision tests. This takes precedence over onlyLayers, so a layer that is in both is skipped.
         */
        skipLayers: LayerSet;
        /**
         * If non-empty, only perform collision with these colliders. In other words: the set of colliders to include when performing collision tests, excluding all others. If empty, this setting is disabled (effectively including all colliders, minus skipColliders).
         */
        onlyColliders: ColliderComponent[];
        /**
         * Skip collision with these colliders. In other words: the set of colliders to exclude when performing collision tests. This takes precedence over onlyColliders, so a collider that is in both is skipped.
         */
        skipColliders: ColliderComponent[];
    }

    /**
     * Stores reusable settings for a Physics {@link WorldComponent} such as gravity magnitude and direction.
     * 
     * @see {@link WorldComponent.worldSettings}.
     * @see [World Component](/lens-studio/features/physics/physics-component#physics-world) guide.
     */
    class WorldSettingsAsset extends Asset {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Create an instance with default settings.
         */
        static create(): Physics.WorldSettingsAsset;
        /**
         * Given 2 layer numbers A and B, returns true if colliders in A collide with colliders in B, and vice-versa. The layer numbers correspond to those used to form a `LayerSet` with `LayerSet.fromNumber()`. The relationship is symmetric, so if collision is disabled for (A, B), it is also disabled for (B, A). This accesses a flag in the "Layer Collision Matrix", as viewable in Studio. Note however that layer numbers are not the same as layer IDs. To get the number of a Studio-created layer, use `LayerSet.numbers`.
         */
        getLayersCollidable(layerNumberA: number, layerNumberB: number): boolean;
        /**
         * Given 2 layer numbers A and B, enables or disables collision between colliders in those layers. The layer numbers correspond to those used to form a `LayerSet` with `LayerSet.fromNumber()`. The relationship is symmetric, so if collision is disabled for (A, B), it is also disabled for (B, A). This accesses a flag in the "Layer Collision Matrix", as viewable in Studio. Note however that layer numbers are not the same as layer IDs. To get the number of a Studio-created layer, use LayerSet.numbers.
         */
        setLayersCollidable(layerNumberA: number, layerNumberB: number, enable: boolean): void;
        /**
         * Resets the layer collision matrix such that all layer pairs are enabled.
         */
        resetLayerCollisionMatrix(): void;
        /**
         * Default Matter used for colliders in the world. This is used for a collider when its matter field is unset.
         */
        defaultMatter: Matter;
        /**
         * Default Filter used for colliders in the world.
         */
        defaultFilter: Physics.Filter;
        /**
         * Gravity acceleration vector (cm/s^2). Defaults to real-world gravity of 980 cm/s^2, downward.
         */
        gravity: vec3;
        /**
         * Simulation rate, in steps per second. Larger values improve simulation accuracy at the cost of performance. This is limited to intervals of 30hz, in the range 30-240hz, with 60hz as the default.
         */
        simulationRate: number;
        /**
         * Slow down simulation step frequency (higher values are slower). Limited to >=1.0. This achieves a slow-motion effect by reducing the number of simulation steps each frame. Useful for debugging as large values will cause noticeably discrete steps.
         */
        slowDownStep: number;
        /**
         * Slow down simulation time (higher values are slower). This achieves a slow-motion effect by scaling simulation time. Unlike slowDownStep, it will maintain smooth motion, but has accuracy problems at large scales.
         */
        slowDownTime: number;
        /**
         * Speed limit, in world space cm/s. Set to 0 to disable this.
         */
        absoluteSpeedLimit: number;
        /**
         * Speed limit, relative to shape size. Set to 0 to disable this. The effective world space speed limit is scaled by simulation rate, so this is the maximum distance the object can move in a single step. The default of 0.5 only allows the object to move by half its size in a single step, which should prevent tunneling.
         */
        relativeSpeedLimit: number;
    }

}

declare namespace AnimationClip {
    /**
     * Used by {@link AnimationMixerLayer} for setting animation clip range type.
     *  @deprecated Use {@link AnimationPlayer} instead
     * 
     * @deprecated
     */
    enum RangeType {
        /**
         * Range is specified by start and end time, in seconds
         * @Deprecated Use {@link AnimationPlayer} instead
         * 
         * @deprecated
         */
        Time,
        /**
         * Range is specified by start and end frame numbers
         * @Deprecated Use {@link AnimationPlayer} instead
         * 
         * @deprecated
         */
        Frames,
    }

    /**
     * Used by {@link AnimationMixerLayer} for setting animation looping behavior.
     * 
     * @deprecated
     */
    enum PostInfinity {
        /**
         * The animation will restart from the beginning each time it loops.
         * @Deprecated Use {@link AnimationPlayer} instead
         * 
         * @deprecated
         */
        Cycle,
        /**
         * The animation will switch between normal and reverse playback each time it loops.
         * @Deprecated Use {@link AnimationPlayer} instead
         * 
         * @deprecated
         */
        Oscillate,
    }

}

declare namespace ConnectedLensModule {
    /**
     * Used by ConnectedLensModule to specify the session share type.
     */
    enum SessionShareType {
        /**
         * Share a session by inviting your friends, launching the "send to" screen.
         */
        Invitation,
        /**
         * Share session via Snapcode that your friends can scan.
         */
        Snapcode,
    }

    /**
     * Provides information about a user in a Connected Lens session.
     */
    class UserInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * A unique identifier for each participant of connected lens experience. It is unique per lens for each user.
         * 
         * @readonly
         */
        userId: string;
        /**
         * @readonly
         */
        connectionId: string;
        /**
         * The current display name of the user.
         * 
         * @readonly
         */
        displayName: string;
        /**
         * Provides the server timestamp (in milliseconds) that the user joined the session.
         * 
         * @readonly
         */
        joinServerTimeMilliseconds: number;
    }

    /**
     * Information that is bootstrapped to the user who just connected to the session.
     */
    class ConnectionInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Get the information about the local user.
         * 
         * @readonly
         */
        localUserInfo: ConnectedLensModule.UserInfo;
        /**
         * @readonly
         */
        hostUserInfo: ConnectedLensModule.UserInfo;
        /**
         * Get the information about all the other users connected to the same session.
         * 
         * @readonly
         */
        externalUsersInfo: ConnectedLensModule.UserInfo[];
        /**
         * Get all the Realtime Stores that are being used in the session.
         * 
         * @readonly
         */
        realtimeStores: GeneralDataStore[];
        /**
         * Provides creation info about every existing RealtimeStore.
         * 
         * @readonly
         */
        realtimeStoresCreationInfos: ConnectedLensModule.RealtimeStoreCreationInfo[];
    }

    /**
     * Gives information about the Realtime Store update operation.
     */
    class RealtimeStoreUpdateInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Get the information of the user who updated the store.
         * 
         * @readonly
         */
        updaterInfo: ConnectedLensModule.UserInfo;
        /**
         * Provides the server timestamp (in milliseconds) of when the store was updated.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
    }

    /**
     * Gives information about the Realtime Store delete operation.
     */
    class RealtimeStoreDeleteInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Get the information of the user who deleted the Store.
         * 
         * @readonly
         */
        deleterInfo: ConnectedLensModule.UserInfo;
        /**
         * Provides the server timestamp (in milliseconds) of when the store was deleted.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
    }

    /**
     * Provides extra context about a RealtimeStore's creation.
     */
    class RealtimeStoreCreationInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * A string that can be used to identify the RealtimeStore.
         * 
         * @readonly
         */
        storeId: string;
        /**
         * The persistence setting that the store was created with.
         * 
         * @readonly
         */
        persistence: RealtimeStoreCreateOptions.Persistence;
        /**
         * If true, ownership of the store can be claimed even if the store is already owned.
         * 
         * @readonly
         */
        allowOwnershipTakeOver: boolean;
        /**
         * Provides the server timestamp (in milliseconds) of the last time the store was updated.
         * 
         * @readonly
         */
        lastUpdatedServerTimestamp: number;
        /**
         * Provides the server timestamp (in milliseconds) of when the store was created.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
        /**
         * Provides the UserInfo of the current owner of the RealtimeStore. If the store is unowned, a UserInfo object with null fields will be returned.
         * 
         * @readonly
         */
        ownerInfo: ConnectedLensModule.UserInfo;
    }

    /**
     * Provides information about a RealtimeStore's ownership being updated.
     */
    class RealtimeStoreOwnershipUpdateInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Provides the server timestamp (in milliseconds) of when the store ownership was updated.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
    }

    /**
     * Provides information about a key being removed from a RealtimeStore.
     */
    class RealtimeStoreKeyRemovalInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The RealtimeStore that the key was removed from.
         * 
         * @readonly
         */
        store: GeneralDataStore;
        /**
         * Key of the property that was removed.
         * 
         * @readonly
         */
        key: string;
        /**
         * User that removed the key.
         * 
         * @readonly
         */
        removerInfo: ConnectedLensModule.UserInfo;
        /**
         * Provides the server timestamp (in milliseconds) of when the key was removed.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
    }

    /**
     * Information about the host update.
     */
    class HostUpdateInfo extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Information about the new host user.
         * 
         * @readonly
         */
        userInfo: ConnectedLensModule.UserInfo;
        /**
         * Provides the server timestamp (in milliseconds) of when the host was updated.
         * 
         * @readonly
         */
        sentServerTimeMilliseconds: number;
    }

}

declare namespace Leaderboard {
    /**
     * Describes how the leaderboard should be ordered.
     */
    enum OrderingType {
        /**
         * Results in a leaderboard where higher scores are better.
         */
        Descending,
        /**
         * Results in a leaderboard where lower scores are better.
         */
        Ascending,
    }

    /**
     * The type of user to be retrieved.
     */
    enum UsersType {
        /**
         * A friend of the Lens viewer.
         */
        Friends,
        /**
         * Both friend and non-friend of the Lens viewer.
         */
        Global,
    }

    /**
     * The options for the leaderboard to be made.
     */
    class CreateOptions extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Create the option.
         */
        static create(): Leaderboard.CreateOptions;
        /**
         * The name of the leaderboard.
         */
        name: string;
        /**
         * How long the leaderboard should last.
         */
        ttlSeconds: number;
        /**
         * How the leaderboard should be ordered.
         */
        orderingType: Leaderboard.OrderingType;
    }

    /**
     * Describes the context for the leaderboard to be requested.
     */
    class RetrievalOptions extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates the option.
         */
        static create(): Leaderboard.RetrievalOptions;
        /**
         * The type of users to be retrieved.
         */
        usersType: Leaderboard.UsersType;
        /**
         * The number of users to be retrieved. The number should be >= 0.
         */
        usersLimit: number;
    }

    /**
     * Information for a user who submitted a score to the leaderboard.
     */
    class UserRecord extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The user which submitted the score. Display name and user name will not be available for global non-friend users.
         * 
         * @readonly
         */
        snapchatUser: SnapchatUser;
        /**
         * The exact score of the user.
         * 
         * @readonly
         */
        score: number;
        /**
         * The percentile rank of the user in the global leaderboard.
         * 
         * @readonly
         */
        globalRankPercentile: number;
        /**
         * The numerical rank of the user in the global leaderboard.
         * 
         * @readonly
         */
        globalExactRank: number | null;
    }

}

declare namespace SnapOS {
}

declare namespace CustomObject3DSpecificData {
}

declare namespace CustomObject3DAsset {
}

declare namespace CompassTrackingData {
    enum Accuracy {
        NoContact,
        Unreliable,
        Low,
        Medium,
        High,
    }

}

declare namespace GestureModule {
    /**
     * The hand used in gesture detection with `GestureModule`.
     * 
     * @wearableOnly
     */
    enum HandType {
        /**
         * The left hand.
         * 
         * @wearableOnly
         */
        Left,
        /**
         * The right hand.
         * 
         * @wearableOnly
         */
        Right,
    }

}

declare namespace VideoRecorder {
    /**
     * Configuration options for {@link VideoRecorder}.
     */
    class Options {
                constructor(sourceTexture: Texture);
        /**
         * Whether to also save the first recorded frame as a still image to use as a placeholder when the VideoTextureProvider is not playing.
         */
        saveThumbnail: boolean;
        /**
         * A scalar on the resolution of the input Texture to the video. Can be used to scale down a large Texture during recording to avoid extra overhead.
         */
        textureScale: number;
        /**
         * Read back the Texture used to construct the Options.
         * 
         * @readonly
         */
        sourceTexture: Texture;
    }

}

declare namespace Utf8 {
    /**
     * Encodes a utf-16 string as a utf-8 Uint8Array
     */
    function encode(value: string): Uint8Array;
    /**
     * Decodes a utf-8 Uint8Array to a utf-16 string
     */
    function decode(data: Uint8Array): string;
}

declare enum Expressions {
    /**
     * Left eyelids closing
     */
    EyeBlinkLeft,
    /**
     * Right eyelids closing
     */
    EyeBlinkRight,
    /**
     * Left eye squinting
     */
    EyeSquintLeft,
    /**
     * Right eye squinting
     */
    EyeSquintRight,
    /**
     * Left eyelids downward look
     */
    EyeDownLeft,
    /**
     * Right eyelids downward look
     */
    EyeDownRight,
    /**
     * Left eyelids looking towards center
     */
    EyeInLeft,
    /**
     * Right eyelids looking towards center
     */
    EyeInRight,
    /**
     * Left eyelids opening
     */
    EyeOpenLeft,
    /**
     * Right eyelids opening
     */
    EyeOpenRight,
    /**
     * Left eyelids looking away from center
     */
    EyeOutLeft,
    /**
     * Right eyelids looking away from center
     */
    EyeOutRight,
    /**
     * Left eyelids upward look
     */
    EyeUpLeft,
    /**
     * Right eyelids upward look
     */
    EyeUpRight,
    /**
     * Left eyebrow downward movement
     */
    BrowsDownLeft,
    /**
     * Right eyebrow downward movement
     */
    BrowsDownRight,
    /**
     * Between eyebrows upward movement
     */
    BrowsUpCenter,
    /**
     * Left eyebrow upward movement
     */
    BrowsUpLeft,
    /**
     * Right eyebrow upward movement
     */
    BrowsUpRight,
    /**
     * Jaw forward movement
     */
    JawForward,
    /**
     * Jaw leftward movement
     */
    JawLeft,
    /**
     * Jaw opening
     */
    JawOpen,
    /**
     * Jaw rightward movement
     */
    JawRight,
    /**
     * Both lips leftward movement
     */
    MouthLeft,
    /**
     * Both lips rightward movement
     */
    MouthRight,
    /**
     * Left mouth corner downward movement
     */
    MouthFrownLeft,
    /**
     * Right mouth corner downward movement
     */
    MouthFrownRight,
    /**
     * Left mouth corner upward movement
     */
    MouthSmileLeft,
    /**
     * Right mouth corner upward movement
     */
    MouthSmileRight,
    /**
     * Left mouth corner back and leftward movement
     */
    MouthDimpleLeft,
    /**
     * Right mouth corner back and rightward movement
     */
    MouthDimpleRight,
    /**
     * Left side of mouth upward movement
     */
    MouthUpLeft,
    /**
     * Right side of mouth upward movement
     */
    MouthUpRight,
    /**
     * Upper lip moving towards and behind lower lip
     */
    UpperLipClose,
    /**
     * Lower lip moving towards and behind upper lip
     */
    LowerLipClose,
    /**
     * Left upper lip upward movement
     */
    UpperLipUpLeft,
    /**
     * Right upper lip upward movement
     */
    UpperLipUpRight,
    /**
     * Left lower lip downward movement
     */
    LowerLipDownLeft,
    /**
     * Right lower lip downward movement
     */
    LowerLipDownRight,
    /**
     * Lips forming open circular shape together
     */
    LipsFunnel,
    /**
     * Lips compressing together while closed
     */
    LipsPucker,
    /**
     * Lower lip upward movement
     */
    LowerLipRaise,
    /**
     * Upper lip upward movement
     */
    UpperLipRaise,
    /**
     * Both cheeks puffing outward movement
     */
    Puff,
    /**
     * Left cheek and below left eye upward movement
     */
    CheekSquintLeft,
    /**
     * Right cheek and below right eye upward movement
     */
    CheekSquintRight,
    /**
     * Left nostril raising
     */
    SneerLeft,
    /**
     * Right nostril raising
     */
    SneerRight,
    /**
     * Left side of mouth leftward movement
     */
    MouthStretchLeft,
    /**
     * Right side of mouth rightward movement
     */
    MouthStretchRight,
    /**
     * Lips moving together
     */
    MouthClose,
}

declare namespace VoiceMLModule {
    namespace SpeechRecognizer {
        /**
         * @deprecated
         */
        const Default: "Default";
    }
    type SpeechRecognizer = typeof SpeechRecognizer[keyof typeof SpeechRecognizer];

    /**
     * Status Codes for NLP Responses.
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    enum NlpResponsesStatusCodes {
        /**
         * Ok Status Code for NLP Responses, this indicates a successful processing of the NLP model.
         * 
         * @deprecated
         */
        OK,
        /**
         * Error Status Code for NLP Responses, this indicates an unsuccessful processing of the NLP model.
         * 
         * @deprecated
         */
        ERROR,
    }

    /**
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    enum AnswerStatusCodes {
        /**
         * Should never show up in javascript frontend. Default value.
         * 
         * @deprecated
         */
        UNSET,
        /**
         * Answer found
         * 
         * @deprecated
         */
        STATUS_OK,
        /**
         * User transcript was not a question
         * 
         * @deprecated
         */
        NOT_A_QUESTION,
        /**
         * There was a question, but we don't know the answer
         * 
         * @deprecated
         */
        NO_ANSWER_FOUND,
    }

}

declare namespace ScanModule {
    namespace Contexts {
        /**
         * Category containing objects.
         */
        const Objects: "Objects";
        /**
         * Category containing places.
         */
        const Places: "Places";
        /**
         * Category containing cars.
         */
        const Cars: "Cars";
        /**
         * Category containing dogs.
         * 
         * @deprecated Scanning for dog breeds is no longer supported.
         * 
         * @deprecated
         */
        const Dogs: "Dogs";
    }
    type Contexts = typeof Contexts[keyof typeof Contexts];

}

declare namespace CameraRollModule {
    /**
     * Configuration options for displaying the camera roll media picker.
     */
    class ShowOptions {
                constructor();
        /**
         * Maximum number of media items that can be selected (1-20, defaults to 10).
         */
        selectionLimit: number;
        showImages: boolean;
        showVideos: boolean;
    }

}

declare namespace AnimationPropertyLayer {
    /**
     * Accessor string for Transform Position property.
     */
    const TransformPosition: string;
    /**
     * Accessor string for Transform Rotation property.
     */
    const TransformRotation: string;
    /**
     * Accessor string for Transform Scale property.
     */
    const TransformScale: string;
    /**
     * Accessor string for BlendsShapes. In order to access a BlendShape track, use the accessor + the track name.
     * Ex. "BlendShapes.JNT_4_HEAD". The delimiter "." separates the accessor and the property name.
     */
    const BlendShapes: string;
    /**
     * Accessor string for VertexCache.
     */
    const VertexCache: string;
    /**
     * Accessor string for Visibility.
     */
    const Visibility: string;
}

declare namespace SnapData {
    /**
     * If a Snap is taken, the passed in user will be included in a mention sticker. Pass in `null` to remove any previously assigned users.
     */
    function addUserMention(user: SnapchatUser): void;
}

declare namespace GeoLocation {
    /**
     * Creates a new `LocationService`.
     */
    function createLocationService(): LocationService;
    /**
     * Calculates heading based on north aligned device orientation.
     */
    function getNorthAlignedHeading(northAlignedOrientation: quat): number;
    /**
     * Returns the GPS position of a custom location.
     */
    function getGeoPositionForLocation(location: LocationAsset): Promise<GeoPosition>;
}

declare namespace KeyboardManager {
    /**
     * Returns true if the specified key is currently pressed.
     */
    function isKeyPressed(key: Keys): boolean;
}

declare namespace Base64 {
    /**
     * Encode a byte array (Uint8Array) to Base64 string.
     */
    function encode(data: Uint8Array): string;
    /**
     * Encode a string to Base64 format.
     */
    function encodeString(str: string): string;
    /**
     * Encode a texture according to Base64 encoding algorithm, asynchronously.
     */
    function encodeTextureAsync(texture: Texture, onSuccess: (encodedTexture: string) => void, onFailure: () => void, compressionQuality: CompressionQuality, encodingType: EncodingType): void;
    /**
     * Decode a texture from Base64, asynchronously.
     */
    function decodeTextureAsync(value: string, onSuccess: (decodedTexture: Texture) => void, onFailure: () => void): void;
    /**
     * Decode a Base64 string to a byte array (Uint8Array).
     */
    function decode(value: string): Uint8Array;
}

declare namespace crypto {
    /**
     * Fills a provided Uint8Array with cryptographically secure random values. This method emulates `crypto.getRandomValues()` from the Web Crypto API.
     * 
     * `typedArray` A Uint8Array to fill with random values.
     * 
     * __Returns:__ Uint8Array The same array passed in after being filled with random values.
     */
    function getRandomValues(typedArray: Uint8Array): Uint8Array;
    /**
     * Generates a cryptographically secure UUID. This method mimics `crypto.randomUUID()` from the Web Crypto API.
     * 
     * __Returns:__ A securely generated UUID string.
     */
    function randomUUID(): string;
    namespace subtle {
        /**
         * Generates a cryptographic hash of the given data using the specified algorithm. This method replicates `crypto.subtle.digest()` from the Web Crypto API, suitable for SHA and other algorithms.
         * 
         * `algorithm` The hash algorithm to use (e.g., "SHA1", "SHA256", "SHA384", "SHA512").
         * 
         * `data` The data to hash.
         * 
         * __Returns:__ A Promise that resolves to the hashed output as an Uint8Array.
         */
        function digest(algorithm: string, data: Uint8Array): Promise<Uint8Array>;
    }

}

declare namespace TensorMath {
    enum BorderType {
        Constant,
        Replicate,
        Reflect,
        Reflect101,
    }

    enum ThresholdMethod {
        Binary,
        BinaryInv,
        Trunc,
        ToZero,
        ToZeroInv,
    }

    /**
     * Applies softMax function to `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
     * 
     * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 1, channels}.
     */
    function softMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void;
    /**
     * Applies softArgMax function to the `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
     * 
     * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
     */
    function softArgMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array, normalized: boolean): void;
    /**
     * Returns the indices of the maximum values along an the channels of `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
     * 
     * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
     */
    function argMax(inTensor: Float32Array, inShape: vec3, outTensor: Uint32Array): void;
    /**
     * Similar to `numpy.argsort()`, but in TensorMath, we have no kind and order parameters. Also, tensor is always 3D, and axis can be equal to 0(x), 1(y) or 2(z).
     */
    function argSort(inTensor: Float32Array, shape: vec3, axis: number, outTensor: Uint32Array): void;
    /**
     * Concatenates inTensorA and inTensorB along the specified axis and puts the result to the outTensor. Input arrays have to have same dimension along other 2 axes.
     */
    function concat(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, axis: number, outTensor: Float32Array): void;
    /**
     * Rearranges the inTensor of inShape according to the desired ordering and puts the result into outTensor.
     */
    function permute(inTensor: Float32Array, inShape: vec3, permuteAxis: vec3, outTensor: Float32Array): void;
    /**
     * Duplicates inTensor elements and store result in the outTensor.
     * 
     * Axis specifies the number of repeats along the axis e.g:
     * 
     * axis(1, 1, 1): outTensor will be the same as inTensor
     * 
     * axis(2, 1, 2): inTesnor = [1 2 3 | 4 5 6], inShape = [3 2 1] => 
     * 
     * outTensor = [[1 1 2 2 3 3 | 4 4 5 5 6 6] [1 1 2 2 3 3 | 4 4 5 5 6 6]] outShape = [6 2 2]
     */
    function repeat(inTensor: Float32Array, inShape: vec3, axis: vec3, outTensor: Float32Array): void;
    /**
     * Applies subpixelArgMax function to the `inTensor`, with the specified `inShape` and kernel size. The result is put into `outTensor`.
     * 
     * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
     */
    function subpixelArgMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array, kernelSize: number): void;
    /**
     * Estimates the object pose given a set of object points (`inObjectPoints`), their corresponding image projections (`inImagePoints`), and the intrinsic camera matrix (`transform`).
     * 
     * `inObjectPoints` - Float32Array of size (point count * 3). 3D points of the object
     * 
     * `inImagePoints` - Float32Array of size (point count * 2). 2D points which are projections of the points in `inObjectPoints`, with some applied transformation we are attempting to find
     * 
     * `imagePointsShape` - Should be {2, point count, 1}
     * 
     * `transform` - Intrinsic camera matrix
     * 
     * `flags` - Currently unused, can be left as 0. Further functionality may be added in the future.
     * 
     * `outRotTrans` - Float32Array of size 6 where results are written. Describes object transformation:
     * 
     * **vec3(outRotTrans[0], outRotTrans[1], outRotTrans[2])** - object rotation in Rodrigues format
     * 
     * **vec3(outRotTrans[3], outRotTrans[4], outRotTrans[5])** - object position in 3D space
     */
    function solvePnP(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, transform: mat3, flags: number, outRotTrans: Float32Array): boolean;
    /**
     * Estimates the object pose given a set of object points (inObjectPoints), their corresponding image projections (inImagePoints), and the intrinsic camera matrix (cameraIntrinsicsMatrix). Similar to solvePnP but has additional camera distortion coefficient settings.
     * 
     * `distortionCoeff` - Input vector of distortion coefficients. If the vector is null - the zero distortion coefficients are assumed. 
     * 
     * `distortionCoeffShape` - {numElements, 1, 1} where numElements can be 4, 5, 8 or 12.
     * 
     * `useExtrinsicGuess` - The function uses the provided outRotTrans values as initial approximations of the rotation and translation vectors and further optimizes them.
     */
    function solvePnPExtended(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, cameraIntrinsicsMatrix: mat3, distortionCoeff: Float32Array, distortionCoeffShape: vec3, useExtrinsicGuess: boolean, flags: number, outRotTrans: Float32Array): boolean;
    /**
     * `solvePnPRansac` is very similar to `solvePnPExtended` except that it uses Random Sample Consensus ( RANSAC ) for robustly estimating the pose.
     * 
     * `iterationsCount` - The number of times the minimum number of points are picked and the parameters estimated
     * 
     * `reprojectionError` - As mentioned earlier in RANSAC the points for which the predictions are close enough are called “inliers”. This parameter value is the maximum allowed distance between the observed and computed point projections to consider it an inlier.
     * 
     * `confidence` -  Number of inliers. If the algorithm at some stage finds more inliers than confidence, it finishes.
     * `outInliers` - Output array that contains indices of inliers in objectPoints and imagePoints .
     * outRotTrans
     */
    function solvePnPRansac(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, cameraIntrinsicsMatrix: mat3, distortionCoeff: Float32Array, distortionCoeffShape: vec3, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number, confidence: number, flags: number, outInliers: Uint8Array, outRotTrans: Float32Array): boolean;
    /**
     * Stabilizes image objects between two consecutive frames caused by camera or object movement.
     * Results are written to the `points` array.
     * 
     * `prevGrayscale` - Uint8Array of size (width * height). Grayscale data of previous frame
     * 
     * `grayscale` - Uint8Array of size (width * height). Grayscale data of current frame
     * 
     * `textureShape` - Should be {width, height, 1}
     * 
     * `prevPoints` - Float32Array of size (point count * 2). Positions of 2D points on the previous frame
     * 
     * `points` - Float32Array of size (point count * 2). Results are written here - positions of 2D points on the current frame
     * 
     * `pointsShape` - Should be {2, point count, 1}
     * 
     * `winSize` - Size of the search window for each pyramid level
     * 
     * `maxLevel` - Maximal pyramid level number, with zero based index
     * 
     * `maxCount` - Terminate if iteration count exceeds maxCount
     * 
     * `epsilon` - Terminate if window movement is less than epsilon
     */
    function opticalFlow(prevGrayscale: Uint8Array, grayscale: Uint8Array, textureShape: vec3, prevPoints: Float32Array, points: Float32Array, pointsShape: vec3, winSize: vec2, maxLevel: number, maxCount: number, epsilon: number): void;
    /**
     * Converts the texture to a set of 0-255 grayscale values, and outputs the result into `outTensor`.
     * 
     * `outTensor` should be a Uint8Array of shape {width, height, 1}.
     * 
     * @exposesUserData
     */
    function textureToGrayscale(texture: Texture, grayscaleBuffer: Uint8Array, grayscaleBufferShape: vec3): void;
    /**
     * Places the maximum values of `inTensor` into `outTensor`.
     * 
     * `outTensor` should have the shape {1, 1, channels}.
     */
    function max(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void;
    /**
     * Places the minimum values of `inTensor` into `outTensor`.
     * 
     * `outTensor` should have the shape {1, 1, channels}.
     */
    function min(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void;
    /**
     * Raises elements of `inTensor` to the power of `val`, and puts the results into `outTensor`.
     */
    function power(inTensor: Float32Array, val: number, outTensor: Float32Array): void;
    /**
     * Clamps all values of `inTensor` between `minVal` and `maxVal`, and puts the result into `outTensor`.
     */
    function clamp(inTensor: Float32Array, minVal: number, maxVal: number, outTensor: Float32Array): void;
    /**
     * Multiplies each element of `inTensor` by a scalar value and puts the result into `outTensor`.
     */
    function mulScalar(inTensor: Float32Array, scalar: number, outTensor: Float32Array): void;
    /**
     * Adds a scalar value to each element of `inTensor` and puts the result into `outTensor`.
     */
    function addScalar(inTensor: Float32Array, scalar: number, outTensor: Float32Array): void;
    /**
     * Calculate the sum of the inTensor elements and store result in the outTensor.
     * 
     * Axis specifies axis along which a sum is performed., e.g:
     * 
     * axis(0, 0, 0): the sum will be performed on the whole tensor
     * 
     * axis(0, 0, 1): the sum will be performed along the z axis. outTensor will store inShape.z values
     * 
     * axis(1, 1, 0): the sum will be performed along x and y axes. outTensor will store 
     * 
     * inShape.x * inShape.y values, where outTensor[y][x] is the sum of all inTensor[0..inShape.z-1][y][x] values
     */
    function sum(inTensor: Float32Array, inShape: vec3, axis: vec3, outTensor: Float32Array): void;
    /**
     * Converts inTensor from the power scale to the decibel scale.
     */
    function powerToDb(inTensor: Float32Array, topDb: number, outTensor: Float32Array): void;
    /**
     * Converts inTensor from the amplitude scale to the decibel scale.
     */
    function amplitudeToDb(inTensor: Float32Array, outTensor: Float32Array): void;
    /**
     * Adds `inTensorA` to `inTensorB` and puts the result into `outTensor`. See the broadcasting rules for elementwise operations.
     */
    function addTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void;
    /**
     * Subtracts `inTensorB` from `inTensorA` and puts the result into `outTensor`. See the broadcasting rules for elementwise operations.
     */
    function subTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void;
    /**
     * Multiplies `inTensorA` and `inTensorB` and puts the result into `outTensor`. See broadcasting rules for elementwise operations.
     */
    function mulTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void;
    /**
     * Divides `inTensorA` by `inTensorB` and puts the result into `outTensor`. See broadcasting rules for elementwise operations.
     */
    function divTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void;
    /**
     * Looks for contour points in a grayscale texture, or any one-channel tensor.
     * 
     * `grayscaledTexture` - Float32Array of size (width * height). Grayscale texture or one-channel tensor to evaluate
     * 
     * `textureShape` - Should be {width, height, 1}
     * 
     * `threshold` - Quality value threshold for found contour points
     * 
     * Each contour point found must satisfy these conditions:
     * 
     * 1. The point's quality value should be >= `threshold`
     * 
     * 2. The number of points which have values < `threshold` and lie in the rectangle with left corner vec2(x-`winSize`, y-`winSize`) and right corner vec2(x+`winSize`-1, y+`winSize`-1) should be <= `maxNearCount`
     * 
     * `outTensor` - Float32Array where results are written. Found contour points are written in the format: x0, y0, x1, y1, etc.
     * The number of points found will not exceed outTensor's size / 2.
     */
    function getContour(grayscaledTexture: Float32Array, textureShape: vec3, threshold: number, winSize: number, maxNearCount: number, outTensor: Float32Array): number;
    /**
     * Sorts 2D points by polar angle relative to the `center` point.
     * 
     * `inTensor` - Float32Array with size (point count * 2). 2D points to sort
     * 
     * `tensorShape` - Should be {2, point count, 1}
     * 
     * `center` - Center point to use for polar angle sorting
     */
    function polarSort2d(inTensor: Float32Array, tensorShape: vec3, center: vec2): void;
    /**
     * Smooths a polygon formed by input points. Works with points of any dimension count, for example `2` for 2D points or `3` for 3D points.
     * Results are written to `outTensor`.
     * 
     * `inTensor` - Float32Array of size (point dimension count * point count). Points of polygon to smooth out
     * 
     * `tensorShape` - Should be {point dimension count, point count, 1}
     * 
     * `step` - Smoothing value, higher value meaning higher smoothness
     * 
     * `outTensor` - Float32Array of size (point dimension count * point count). Smoothed points are written to this array
     */
    function smoothPoints(inTensor: Float32Array, tensorShape: vec3, step: number, outTensor: Float32Array): void;
    /**
     * Applies a rotation to each point in a set of 3D points, and places the results in `outPoints`.
     * 
     * `points` - Float32Array of size (point count * 3). Points to rotate
     * 
     * `pointsShape` - Should be {3, point count, 1}
     * 
     * `rotation` - Quaternion rotation to apply
     * 
     * `outPoints` - Float32Array of size (point count * 3). Resulting rotated points are placed here
     */
    function rotatePoints3d(points: Float32Array, pointsShape: vec3, rotation: quat, outPoints: Float32Array): void;
    /**
     * Checks for each 2D point whether it is inside of a rectangle.
     * 
     * `points` - Float32Array of size (point count * 2). 2D points to check
     * 
     * `pointsShape` - Should be {2, point count, 1}
     * 
     * `rect` - 2D rectangle points will be checked against
     * 
     * `output` - Uint8Array of size (point count). For each point, this will be filled with 1 if the point is inside the rectangle, or 0 otherwise.
     */
    function isInRectangle(points: Float32Array, pointsShape: vec3, rect: Rect, output: Uint8Array): void;
    /**
     * Finds minimum distances between each 2D point from one array, to 2D points in another array.
     * 
     * `from` - Float32Array of size ("from" point count * 2). 2D points from which min distances should be found
     * 
     * `fromShape` - Should be {2, "from" point count, 1}
     * 
     * `to` - Float32Array of size ("to" point count * 2). 2D points to which min distances should be found
     * 
     * `toShape` - Should be {2, "to" point count, 1}
     * 
     * `output` - Float32Array of size ("from" point count). For each point in the `from` array, the minimum distance to points from the `to` array will be written to this array.
     */
    function findMinDistancesBetween(from: Float32Array, fromShape: vec3, to: Float32Array, toShape: vec3, output: Float32Array): void;
    /**
     * If we consider the tensor as a 3D array, this function finds the indexes of the minimum element in each subarray of size `window`.
     * 
     * `tensor` - Float32Array of size (width * height * depth). 3D array of input data
     * 
     * `tensorShape` - Should be {width, height, depth}
     * 
     * `window` - Size of each subarray, in each of which will be found the index of the min element
     * 
     * `output` - Float32Array of size (width * height * depth). The index of the min value will be written into this array for each subarray.
     */
    function minInSlideWindow(tensor: Float32Array, tensorShape: vec3, window: vec3, output: Uint32Array): void;
    /**
     * If we consider the tensor as a 3D array, this function finds the indexes of the maximum element in each subarray of size `window`.
     * 
     * `tensor` - Float32Array of size (width * height * depth). 3D array of input data
     * 
     * `tensorShape` - Should be {width, height, depth}
     * 
     * `window` - Size of each subarray, in each of which will be found the index of the max element
     * 
     * `output` - Float32Array of size (width * height * depth). The index of the max value will be written into this array for each subarray.
     */
    function maxInSlideWindow(tensor: Float32Array, tensorShape: vec3, window: vec3, output: Uint32Array): void;
    /**
     * Calculates the length of all vectors in an array. Vectors can be of any dimension count.
     * 
     * `vectors` - Float32Array of size (vector dimension count * vector count). Vectors to measure the length of
     * 
     * `vectorsShape` - Should be {vector dimension count, vector count, 1}
     * 
     * `output` - Float32Array of size (vector count). For each vector in `vectors`, its length will be written to this array
     */
    function getVectorsLength(vectors: Float32Array, vectorsShape: vec3, output: Float32Array): void;
    /**
     * From the input points, finds the two points with the maximum distance between them and returns this distance. Works with points of any dimension count.
     * 
     * `points` - Float32Array of size (point dimension count * point count). Points to find the max distance between.
     * 
     * `pointsShape` - Should be {point dimension count, point count, 1}
     */
    function maxDistanceBetweenPoints(points: Float32Array, pointsShape: vec3): number;
    /**
     * Erodes an image by using a specific structuring element.
     */
    function erode(inTensor: Float32Array, inShape: vec3, kernelTensor: Float32Array, kernelShape: vec3, anchor: vec2, iterations: number, borderType: TensorMath.BorderType, borderValue: vec4, outTensor: Float32Array): void;
    /**
     * Dilates an image by using a specific structuring element.
     */
    function dilate(inTensor: Float32Array, inShape: vec3, kernelTensor: Float32Array, kernelShape: vec3, anchor: vec2, iterations: number, borderType: TensorMath.BorderType, borderValue: vec4, outTensor: Float32Array): void;
    /**
     * Returns contours. Note that: contours are sorted from the largest to the smallest; 2) We cannot return Array of TypedArray-s, so all contours data is stored in single outTensor and Array with sizes of each contour is returned.
     */
    function findContours(inTensor: Uint8Array, inShape: vec3, mode: number, method: number, offset: vec2, outTensor: Int32Array): number[];
    /**
     * Return TensorMath's format of RotatedRect.
     */
    function minAreaRect(inTensor: Float32Array, inShape: vec3): RotatedRect;
    function getRotatedRectPoints(rotatedRect: RotatedRect, outTensor: Float32Array): void;
    /**
     * Fills a convex polygon.
     */
    function fillConvexPoly(imgTensor: Float32Array, imgShape: vec3, pointsTensor: Int32Array, pointsShape: vec3, color: vec4, lineType: number, shift: number): void;
    /**
     * Fills a polygon. Note that you should pass an Array of Int32Array-s (polygonsTensors).
     */
    function fillPoly(imgTensor: Float32Array, imgShape: vec3, polygonsTensors: Int32Array[], color: vec4, lineType: number, shift: number, offset: vec2): void;
    /**
     * Draws a line segment connecting two points.
     */
    function drawLine(imgTensor: Float32Array, imgShape: vec3, point1: vec2, point2: vec2, color: vec4, thickness: number, lineType: number, shift: number): void;
    /**
     * Multiply a matrix by a set of points through an efficient batch operation.
     */
    function mulMatToPoints(pointsTensor: Float32Array, pointsShape: vec3, matrix: mat4, outTensor: Float32Array): void;
    /**
     * Project 3D points into 2D space using an efficient batch operation.
     */
    function projectPoints(pointsTensor: Float32Array, pointsShape: vec3, projectionMatrix: mat4, outTensor: Float32Array): void;
    /**
     * Blurs an image tensor using the box filter.
     */
    function applyBoxFilter(inTensor: Float32Array, inShape: vec3, kernelSize: vec2, anchor: vec2, normalize: boolean, borderType: TensorMath.BorderType, outTensor: Float32Array): void;
    /**
     * Applies a fixed-level threshold to each array element.
     */
    function applyThreshold(inTensor: Float32Array, threshold: number, maxValue: number, type: TensorMath.ThresholdMethod, outTensor: Float32Array): void;
    /**
     * Approximates a polygonal curve with the specified precision.
     */
    function approximatePolygonalCurve(inTensor: Float32Array, inShape: vec3, epsilon: number, closed: boolean, outTensor: Float32Array): number;
    /**
     * Applies a list of indices of a tensor in sorted order of their corresponding values in the tensor to the given outTensor. Only indices whose corresponding values are not equal to 0 in the provided mask will be returned. Indices from the original tensor, before applying the mask, will be returned in the provided array. Returns the size of the list of indices applied to the outTensor (note: this will be equal to the number of non-zero values provided in the mask). eg:
     *  
     * ```js
     * var inTensor = [5.0, 2.0, 1.0, 3.0, 7.0, -1.0, -5.0]; 
     * var mask = [1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0]; 
     * var outTensor = new Uint32Array(7); 
     * var order = SortOrder.Ascending;
     * var size = TensorMath.argSortMasked(inTensor, mask, outTensor, order); 
     * print(outTensor.subarray(size)); // Expected: [2, 1, 3, 0, 4]
     * ```
     */
    function argSortMasked(inTensor: Float32Array, mask: Float32Array, outTensor: Uint32Array, order: SortOrder): number;
    function applyNMS(inTensor: Float32Array, inShape: vec3, scores: Float32Array, scoreThreshold: number, iouThreshold: number, outTensor: Uint32Array): number;
}

declare namespace Studio {
    /**
     * Prints out a message to the Logger window in Studio. When running on a device paired to Lens Studio, it will send the message directly to the Logger window in Studio to help with debugging.
     */
    function log(message: any): void;
}

declare namespace VoiceML {
    /**
     * The parameter when the callback registered on from `VoiceMLModule.onListeningUpdate` is called. This is to mark the input audio transcription (and possibly NlpModels as a result) was updated.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class ListeningUpdateEventArgs extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * In case a keyword detection model used, returns results from the keywords model.
         * 
         * @deprecated
         */
        getKeywordResponses(): VoiceML.NlpKeywordResponse[];
        /**
         * In case an NLP intent model used, returns intent response from the ML engine.
         * 
         * @deprecated
         */
        getIntentResponses(): VoiceML.NlpIntentResponse[];
        /**
         * In case `enableSystemCommands()` function used, returns the command executed by the system.
         * 
         * @deprecated
         */
        getCommandResponses(): VoiceML.NlpCommandResponse[];
        /**
         * Returns an array of QnaResponse elements, each representing an answer to the question in the eventArgs.transcript. It has properties answer(a string with the ML's response) and answerStatusCode, which can take values
         * 
         * @deprecated
         */
        getQnaResponses(): VoiceML.QnaResponse[];
        /**
         * Returns the transcription from the Automatic Speech Recognition.
         * 
         * @deprecated
 * @readonly
         */
        transcription: string;
        /**
         * Specifies whether the transcription returned is final, or partial (interim) which can be updated later as the sentence continues.
         * 
         * @deprecated
 * @readonly
         */
        isFinalTranscription: boolean;
    }

    /**
     * ListeningErrorEventArgs object returns in onListeningError callback. It contains the error code and description of the error.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class ListeningErrorEventArgs extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Returns the Error code number.
         * 
         * @deprecated
 * @readonly
         */
        error: number;
        /**
         * Returns the description of the error.
         * 
         * @deprecated
 * @readonly
         */
        description: string;
    }

    /**
     * The abstract base class all NlpResponses inherit from. NlpResponses are used as the result from the VoiceML NLP engine with information after processing the transcript of the input audio.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class BaseNlpResponse extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Name of the model that sent the response.  In current studio release, you can expect the result to contain either  `VOICE_ENABLED_UI` like described in {@link VoiceML.NlpIntentModel}.  If using `enableSystemCommands()`, `SYSTEM_COMMANDS` will be returned as well.
         * 
         * @deprecated
 * @readonly
         */
        modelName: string;
        /**
         * Additional params to send in the response.
         * 
         * @deprecated
 * @readonly
         */
        additionalParams: VoiceML.AdditionalParam[];
        /**
         * The status of the NLP response. in case of successful result, the value should be `VoiceMLModule.NlpResponsesStatusCodes.OK`, in case of failure, the value should be `VoiceMLModule.NlpResponsesStatusCodes.ERROR`.
         * 
         * @deprecated
 * @readonly
         */
        status: VoiceML.NlpResponseStatus;
    }

    /**
     * NlpKeywordResponse will be returned if KeywordModel has been supplied as an input model in the ListeningOptions.  The keyword model allows detection of keywords (or short phrases) in an input audio.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpKeywordResponse extends BaseNlpResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The keywords detected by the NLP keyword detection model.  In addition, the following values could be returned:
         * 
         * * `#SNAP_ERROR_INCONCLUSIVE`: two or more intents detected.
         * * `#SNAP_ERROR_INDECISIVE`: no intent detected.
         * * `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
         * * `#SNAP_ERROR_SILENCE`: silence was detected.
         * 
         * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored
         * 
         * @deprecated
 * @readonly
         */
        keywords: string[];
    }

    /**
     * Returned when {@link NlpIntentModel} was specificed in the ListeningOptions, it contains the results of the NLP Intent model classification on the last sentence. `NlpIntentResponse` will only run on complete sentences (`isFinalTranscription = true`).
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpIntentResponse extends BaseNlpResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The classification result of the NLP intent model for the sentence. For example for the sentence "show me the next item" with the model `VOICE_ENABLED_UI`, the result will be `next` for `VOICE_ENABLED_UI` the following intents are valid: `next`, `back`, `left`, `right`, `up`, `down`, `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`, `eighth`, `ninth`, `tenth`. In addition, the following values could be returned:
         * 
         * * `#SNAP_ERROR_INCONCLUSIVE`: two or more intents detected.
         * * `#SNAP_ERROR_INDECISIVE`: no intent detected.
         * * `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
         * * `#SNAP_ERROR_SILENCE`: silence was detected.
         * 
         * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored.
         * 
         * @deprecated
 * @readonly
         */
        intent: string;
    }

    /**
     * May be returned when [enableSystemCommands()](api/classes/VoiceMLModule/#enableSystemCommands) API is used.
     * The NlpCommandResponse contains the results of the servers' NLP command model classification on the last sentence and indicates that a predetermined system command was detected.
     * Current supported commands:
     * 
     * * “Take a Snap”: takes a snapshot.
     * * “Start Recording”: starts a video recording if not already started.
     * * "Stop Recording”: stops an ongoing video recording, if applicable.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpCommandResponse extends BaseNlpResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The classification result of the NLP command model for the sentence. For example, for the sentence "Take a snap!" with the {@link VoiceMLModule.enableSystemCommands} API enabled, the result will be a {@link VoiceML.NlpCommandResponse} holding a `take a snap` {@link VoiceML.NlpCommandResponse#command}. In addition, the following values could be returned:
         * 
         * - `#SNAP_ERROR_INCONCLUSIVE`: two or more commands detected.
         * - `#SNAP_ERROR_INDECISIVE`: no command detected.
         * - `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
         * - `#SNAP_ERROR_SILENCE`: silence was detected.
         * 
         * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored.
         * 
         * @deprecated
 * @readonly
         */
        command: string;
    }

    /**
     * The NLP Response Status indicates whether the NLP was successful in parsing the sentence
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpResponseStatus extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Nlp status code coming from the ML engine.
         * 
         * @deprecated
 * @readonly
         */
        code: number;
        /**
         * Nlp status description coming from the ML engine.
         * 
         * @deprecated
 * @readonly
         */
        description: string;
    }

    /**
     * NlpModels are used to provide the VoiceML NLP engine information about how the transcript of the input audio should be processed. BaseNlpModels is the abstract base class all NlpModels ({@link NlpKeywordModel}, {@link NlpIntentModel}) inherit from.
     * 
     * You can specify multiple NlpModels to process the same audio, all of their results will be returned in {@link VoiceML.ListeningUpdateEventArgs}.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class BaseNlpModel extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Adds additional params to set in the ML engine.
         * 
         * @deprecated
         */
        addParam(key: string, value: string): void;
    }

    /**
     * Used to detect usage of certain keywords from the input audio.
     * 
     * Keyword detection (whose results will be returned in {@link VoiceML.NlpKeywordResponse}) in the {@link VoiceML.ListeningUpdateEventArgs} can happen in the mid input sentence (and in such case the the isFinalTranscription=`false`) or can happen at the end of the sentence (isFinalTranscription=`true`). Mid sentence detection have closer proximity to the time the word was spoken, but might be less accurate.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpKeywordModel extends BaseNlpModel {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Adds a keyword group to the keywords model, the group name will be returned in NlpKeywordResponse to indicate one of the keywords in the group has been detected. Groups are used to include synonyms, or context similar words.  `addKeywordGroup("walk", ["walk", "jog", "strolls"])`.
         * 
         * @deprecated
         */
        addKeywordGroup(name: string, keywords: string[]): void;
        /**
         * Holds group of keywords to be used in the ML model.
         * 
         * @deprecated
 * @readonly
         */
        keywordGroups: VoiceML.KeywordModelGroup[];
    }

    namespace NlpKeywordModelOptions {
        /**
         * Creates a new NlpKeywordModel.
         * 
         * @deprecated
         */
        function create(): VoiceML.NlpKeywordModel;
    }

    /**
     * Specifies which NLP Intent model should run to classify the transcription of the input audio. NLP Intent classification meant to extract the meaning of a sentence rather than detecting certain keywords. Multiple intent models can be used on the same transcription, and will run only on complete sentences (`isFinalTranscription = True`). Supported intent models: `VOICE_ENABLED_UI`.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class NlpIntentModel extends BaseNlpModel {
        
        /** @hidden */
        protected constructor()
        
        /**
         * A list of the intents the `Intent ML` engine should use when classifying the sentence, for example `["back", "next"]`, in case no list provided, all possible intents of the model are used.
         * 
         * Supported intents for `VOICE_ENABLED_UI`: `next`, `back`, `left`, `right`, `up`, `down`, `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`, `eighth`, `ninth`, `tenth`.
         * 
         * @deprecated
         */
        possibleIntents: string[];
    }

    namespace NlpIntentsModelOptions {
        /**
         * Creates a new NlpIntentModel.
         * 
         * @deprecated
         */
        function create(intentModelName: string): VoiceML.NlpIntentModel;
    }

    /**
     * Additional parameters are used to provide additional data for NlpModels and NlpResponses.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class AdditionalParam extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The key of the additional parameter.
         * 
         * @deprecated
 * @readonly
         */
        key: string;
        /**
         * The value of the additional parameter.
         * 
         * @deprecated
 * @readonly
         */
        value: string;
    }

    /**
     * An NLP model used to detect keywords in the transcript of the input audio.  For example, you can have keyword detection which will trigger every time the word "red" is said, and another trigger for the word "yellow".
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class KeywordModelGroup extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Name of the keyword group.
         * 
         * @deprecated
 * @readonly
         */
        name: string;
        /**
         * Array of keywords that are being sent to the ML model for detection with similar meaning. For example, putting the word "yellow" would trigger a response in the sentence "I saw a yellow bird". The keyword detection model supports slight variation in the word transcription. We recommend adding possible synonyms of the same keyword. So for example, should you want to detect "movie", you might want to consider adding "video" and possibly "feature" and "flick" as well to the list resulting in `["movie", "video", "feature","flick"]` as different people might express themselves differently.
         * 
         * @deprecated
 * @readonly
         */
        keywords: string[];
    }

    /**
     * Speech context is used in cases where specific words are expected from the users, the transcription accuracy of these words can be improved, by straightening their likelihood in context. The strength is scaled 1-10 (10 being the strongest increase) the default value is 5.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class SpeechContext extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Array of keyword to enhance by the ML engine.
         * 
         * @deprecated
 * @readonly
         */
        phrases: string[];
        /**
         * The strength is scaled 1-10 (10 being the strongest increase) the default value is 5.
         * 
         * @deprecated
 * @readonly
         */
        boost: number;
    }

    /**
     * The `PostProcessingAction` is the base class for `QnaAction` and other post processing actions that need to processed after the transcription phase.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class PostProcessingAction extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

    /**
     * The QnaAction class is a post-processing action that encapsulates context text for Dialog ML processing within VoiceML operations.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class QnaAction extends PostProcessingAction {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Parameter: string context. Creates a QnaAction object with a given context i.e. source text for the Dialog ML.
         * 
         * @deprecated
         */
        static create(context: string): VoiceML.QnaAction;
        /**
         * The context passed to the QnaAction. The QnaAction is passed to VoiceML.listeningOptions to use the DialogML within the VoiceML automatically
         * 
         * @deprecated
         */
        context: string;
    }

    /**
     * The `PostProcessingActionResponse` is the base class for `QnaActionRespose` and other post processing actions responses. It holds the id and status properties for all deriving objects.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class PostProcessingActionResponse extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The id of the `PostProcessingAction` so returning results can be tied to post processing actions
         * 
         * @deprecated
 * @readonly
         */
        id: number;
        /**
         * The status holds the description and code for the post processing actions. In case of success the description will be empty and the code will be 0
         * 
         * @deprecated
 * @readonly
         */
        status: VoiceML.PostProcessingActionResponseStatus;
    }

    /**
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class QnaResponse extends PostProcessingActionResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The response string the module came up with in response to the eventArgs.transcript
         * 
         * @deprecated
 * @readonly
         */
        answer: string;
        /**
         * The status of the QnaResponse
         * 
         * @deprecated
 * @readonly
         */
        answerStatusCode: number;
    }

    /**
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class PostProcessingActionResponseStatus extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * @deprecated
 * @readonly
         */
        code: number;
        /**
         * @deprecated
 * @readonly
         */
        description: string;
    }

    /**
     * Provides the configuration for the audio input processing output. This can either include NLP processing using the {@link VoiceML.BaseNlpModel} or directly retrieving the transcription.  `speechContext` provides the ability to further improve the transcription accuracy given an assumed context.
     * 
     * @deprecated VoiceML capabilities are no longer supported. For Spectacles see options on {@link ASRModule}.
     * 
     * @deprecated
     */
    class ListeningOptions extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * Creates voice command options.
         * 
         * @deprecated
         */
        static create(): VoiceML.ListeningOptions;
        /**
         * In cases where specific words are expected from the users, the transcription accuracy of these words can be improved, by strengthening their likelihood in context. The strength is scaled `1-10` (10 being the strongest increase) the default value is `5`.
         * 
         * @deprecated
         */
        addSpeechContext(phrases: string[], boost: number): void;
        /**
         * An optional attribute to specify which speech recognizer ML model to use when transcribing.  When creating a new `ListeningOptions` the value of this attrbute is defaulted to `SPEECH_RECOGNIZER`.   The supported values are: `SPEECH_RECOGNIZER`.
         * 
         * @deprecated
         */
        speechRecognizer: string;
        /**
         * The language which VoiceML should listen to.
         * 
         * @deprecated
         */
        languageCode: string;
        /**
         * Options for the ML model to be used.
         * 
         * @deprecated
         */
        nlpModels: VoiceML.BaseNlpModel[];
        /**
         * Supports multiple speech contexts for increased transcription accuracy.
         * 
         * @deprecated
         */
        speechContexts: VoiceML.SpeechContext[];
        /**
         * Should complete transcription returned. Such transcriptions after the user stopped speaking. This transcription is marked with `isFinalTranscription=true` in the `OnListeningUpdate`.
         * 
         * @deprecated
         */
        shouldReturnAsrTranscription: boolean;
        /**
         * Should interim transcription returned. Such transcriptions are returned while the user still speaks, however they may be less accurate, and can be changed on following transcriptions. This interim results are marked with `isFinalTranscription=false` in the `OnListeningUpdate`.
         * 
         * @deprecated
         */
        shouldReturnInterimAsrTranscription: boolean;
        /**
         * An array of VoiceML.QnaAction elements. It is used to pass the context in each QnaAction to the DialogML.
         * 
         * @deprecated
         */
        postProcessingActions: VoiceML.PostProcessingAction[];
    }

}

declare namespace Dialog {
    /**
     * Provides answer information in response to `DialogModule.askQuestions()`.
     */
    class Answer extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
         * The index of the question this is answering in the questions array.
         * 
         * @readonly
         */
        questionId: number;
        /**
         * The answer to the question.
         * 
         * @readonly
         */
        answer: string;
        /**
         * Status of the question response.
         * 
         * @readonly
         */
        status: number;
    }

}

declare namespace ObjectTracking3D {
    /**
     * Strategies for updating attached objects. Used by the {@link ObjectTracking3D} component.
     */
    enum TrackingMode {
        /**
         * Update the local transform's rotation and scale
         */
        ProportionsAndPose,
        /**
         * Update the local transform's rotation only
         */
        PoseOnly,
        /**
         * Applies world position and world rotation by default, and optionally world scale. Additionally, the world rotation can be opt-out via the `attachmentModeInheritRotation` property
         */
        Attachment,
    }

}

declare namespace BodyTrackingAsset {
    /**
     * Key for Hips attachment point.
     */
    const Hips: "Hips";
    /**
     * Key for Spine attachment point.
     */
    const Spine: "Spine";
    /**
     * Key for Spine1 attachment point.
     */
    const Spine1: "Spine1";
    /**
     * Key for Spine2 attachment point.
     */
    const Spine2: "Spine2";
    /**
     * Key for Neck attachment point.
     */
    const Neck: "Neck";
    /**
     * Key for Head attachment point.
     */
    const Head: "Head";
    /**
     * Key for Left Shoulder attachment point.
     */
    const LeftShoulder: "LeftShoulder";
    /**
     * Key for Left Arm attachment point.
     */
    const LeftArm: "LeftArm";
    /**
     * Key for Left Forearm attachment point.
     */
    const LeftForeArm: "LeftForeArm";
    /**
     * Key for Left Hand attachment point.
     */
    const LeftHand: "LeftHand";
    /**
     * Key for Right Shoulder attachment point.
     */
    const RightShoulder: "RightShoulder";
    /**
     * Key for Right Arm attachment point.
     */
    const RightArm: "RightArm";
    /**
     * Key for Right Forearm attachment point.
     */
    const RightForeArm: "RightForeArm";
    /**
     * Key for Right Hand attachment point.
     */
    const RightHand: "RightHand";
    /**
     * Key for Upper Left Leg attachment point.
     */
    const LeftUpLeg: "LeftUpLeg";
    /**
     * Key for Left Leg attachment point.
     */
    const LeftLeg: "LeftLeg";
    /**
     * Key for Left Foot attachment point.
     */
    const LeftFoot: "LeftFoot";
    /**
     * Key for Left Toe Base attachment point.
     */
    const LeftToeBase: "LeftToeBase";
    /**
     * Key for Upper Right Leg attachment point.
     */
    const RightUpLeg: "RightUpLeg";
    /**
     * Key for Right Leg attachment point.
     */
    const RightLeg: "RightLeg";
    /**
     * Key for Right Foot attachment point.
     */
    const RightFoot: "RightFoot";
    /**
     * Key for Right Toe Base attachment point.
     */
    const RightToeBase: "RightToeBase";
    /**
     * Key for Left Hand Thumb 1 attachment point.
     */
    const LeftHandThumb1: "LeftHandThumb1";
    /**
     * Key for Left Hand Thumb 2 attachment point.
     */
    const LeftHandThumb2: "LeftHandThumb2";
    /**
     * Key for Left Hand Thumb 3 attachment point.
     */
    const LeftHandThumb3: "LeftHandThumb3";
    /**
     * Key for Left Hand Index 1 attachment point.
     */
    const LeftHandIndex1: "LeftHandIndex1";
    /**
     * Key for Left Hand Index 2 attachment point.
     */
    const LeftHandIndex2: "LeftHandIndex2";
    /**
     * Key for Left Hand Index 3 attachment point.
     */
    const LeftHandIndex3: "LeftHandIndex3";
    /**
     * Key for Left Hand Middle 1 attachment point.
     */
    const LeftHandMiddle1: "LeftHandMiddle1";
    /**
     * Key for Left Hand Middle 2 attachment point.
     */
    const LeftHandMiddle2: "LeftHandMiddle2";
    /**
     * Key for Left Hand Middle 3 attachment point.
     */
    const LeftHandMiddle3: "LeftHandMiddle3";
    /**
     * Key for Left Hand Ring 1 attachment point.
     */
    const LeftHandRing1: "LeftHandRing1";
    /**
     * Key for Left Hand Ring 2 attachment point.
     */
    const LeftHandRing2: "LeftHandRing2";
    /**
     * Key for Left Hand Ring 3 attachment point.
     */
    const LeftHandRing3: "LeftHandRing3";
    /**
     * Key for Left Hand Pinky 1 attachment point.
     */
    const LeftHandPinky1: "LeftHandPinky1";
    /**
     * Key for Left Hand Pinky 2 attachment point.
     */
    const LeftHandPinky2: "LeftHandPinky2";
    /**
     * Key for Left Hand Pinky 3 attachment point.
     */
    const LeftHandPinky3: "LeftHandPinky3";
    /**
     * Key for Right Hand Thumb 1 attachment point.
     */
    const RightHandThumb1: "RightHandThumb1";
    /**
     * Key for Right Hand Thumb 2 attachment point.
     */
    const RightHandThumb2: "RightHandThumb2";
    /**
     * Key for Right Hand Thumb 3 attachment point.
     */
    const RightHandThumb3: "RightHandThumb3";
    /**
     * Key for Right Hand Index 1 attachment point.
     */
    const RightHandIndex1: "RightHandIndex1";
    /**
     * Key for Right Hand Index 2 attachment point.
     */
    const RightHandIndex2: "RightHandIndex2";
    /**
     * Key for Right Hand Index 3 attachment point.
     */
    const RightHandIndex3: "RightHandIndex3";
    /**
     * Key for Right Hand Middle 1 attachment point.
     */
    const RightHandMiddle1: "RightHandMiddle1";
    /**
     * Key for Right Hand Middle 2 attachment point.
     */
    const RightHandMiddle2: "RightHandMiddle2";
    /**
     * Key for Right Hand Middle 3 attachment point.
     */
    const RightHandMiddle3: "RightHandMiddle3";
    /**
     * Key for Right Hand Ring 1 attachment point.
     */
    const RightHandRing1: "RightHandRing1";
    /**
     * Key for Right Hand Ring 2 attachment point.
     */
    const RightHandRing2: "RightHandRing2";
    /**
     * Key for Right Hand Ring 3 attachment point.
     */
    const RightHandRing3: "RightHandRing3";
    /**
     * Key for Right Hand Pinky 1 attachment point.
     */
    const RightHandPinky1: "RightHandPinky1";
    /**
     * Key for Right Hand Pinky 2 attachment point.
     */
    const RightHandPinky2: "RightHandPinky2";
    /**
     * Key for Right Hand Pinky 3 attachment point.
     */
    const RightHandPinky3: "RightHandPinky3";
}

declare namespace global {
    /**
     * Returns the global {@link ScriptScene} object, which offers information and controls for the current scene.
     */
    const scene: ScriptScene;
    /**
     * Returns the global {@link TouchDataProvider}, which controls how the Lens handles touch events.
     */
    const touchSystem: TouchDataProvider;
    /**
     * Returns the global {@link PersistentStorageSystem}, which allows data to persist between Lens sessions.
     */
    const persistentStorageSystem: PersistentStorageSystem;
    /**
     * Returns the global {@link GeneralDataStore} for Launch Params, which provides any special data passed in when the Lens is launched.
     */
    const launchParams: GeneralDataStore;
    /**
     * Returns the global {@link DeviceInfoSystem}, which provides information about the device running the Lens.
     */
    const deviceInfoSystem: DeviceInfoSystem;
    /**
     * Returns the global {@link LocalizationSystem}, which helps convert times, dates, and other units to user friendly strings.
     */
    const localizationSystem: LocalizationSystem;
    /**
     * Returns the {@link HapticFeedbackSystem}, which provides methods to trigger the device's haptic system.
     */
    const hapticFeedbackSystem: HapticFeedbackSystem;
    /**
     * Returns the {@link DebugRender}, which provides methods to draw primitive visuals for debugging.
     */
    const debugRenderSystem: DebugRender;
    /**
     * Returns the {@link TextInputSystem}, which provides methods to access the device's keyboard and typing systems. and typing systems.
     */
    const textInputSystem: TextInputSystem;
    /**
     * Returns the global {@link UserContextSystem}, which provides information about the user such as display name, birthday, and even current weather.
     */
    const userContextSystem: UserContextSystem;
}

interface ComponentNameMap {
    "Animation": Animation;
    "AnimationMixer": AnimationMixer;
    "AnimationPlayer": AnimationPlayer;
    "AudioChainComponent": AudioEffectComponent;
    "AudioComponent": AudioComponent;
    "AudioEffectComponent": AudioEffectComponent;
    "AudioListenerComponent": AudioListenerComponent;
    "AudioPlayer": AudioComponent;
    "BaseMeshVisual": BaseMeshVisual;
    "BlendShapes": BlendShapes;
    "BlurNoiseEstimation": BlurNoiseEstimation;
    "BodyComponent": BodyComponent;
    "Camera": Camera;
    "Canvas": Canvas;
    "ClearDepth": ClearDepth;
    "ClearScreen": ClearDepth;
    "ClothVisual": ClothVisual;
    "ColliderComponent": ColliderComponent;
    "ColocatedTrackingComponent": ColocatedTrackingComponent;
    "Component": Component;
    "Component.Animation": Animation;
    "Component.AnimationMixer": AnimationMixer;
    "Component.AnimationPlayer": AnimationPlayer;
    "Component.AudioChainComponent": AudioEffectComponent;
    "Component.AudioComponent": AudioComponent;
    "Component.AudioEffectComponent": AudioEffectComponent;
    "Component.AudioListenerComponent": AudioListenerComponent;
    "Component.AudioPlayer": AudioComponent;
    "Component.BaseMeshVisual": BaseMeshVisual;
    "Component.BlendShapes": BlendShapes;
    "Component.BlurNoiseEstimation": BlurNoiseEstimation;
    "Component.BodyComponent": BodyComponent;
    "Component.Camera": Camera;
    "Component.Canvas": Canvas;
    "Component.ClearDepth": ClearDepth;
    "Component.ClearScreen": ClearDepth;
    "Component.ClothVisual": ClothVisual;
    "Component.ColliderComponent": ColliderComponent;
    "Component.ColocatedTrackingComponent": ColocatedTrackingComponent;
    "Component.Component": Component;
    "Component.ConstraintComponent": ConstraintComponent;
    "Component.CustomLocationGroupComponent": CustomLocationGroupComponent;
    "Component.DepthSetter": DepthSetter;
    "Component.DeviceLocationTrackingComponent": DeviceLocationTrackingComponent;
    "Component.DeviceTracking": DeviceTracking;
    "Component.EyeColorVisual": EyeColorVisual;
    "Component.FaceInsetVisual": FaceInsetVisual;
    "Component.FaceMaskVisual": FaceMaskVisual;
    "Component.FaceStretchVisual": FaceStretchVisual;
    "Component.FaceSubVisual": FaceMaskVisual;
    "Component.GaussianSplattingVisual": GaussianSplattingVisual;
    "Component.Gyroscope": Gyroscope;
    "Component.HairSimulationColliderComponent": ColliderComponent;
    "Component.HairVisual": HairVisual;
    "Component.Head": Head;
    "Component.Hints": HintsComponent;
    "Component.HintsComponent": HintsComponent;
    "Component.Image": Image;
    "Component.InteractionComponent": InteractionComponent;
    "Component.Label": Label;
    "Component.LightSource": LightSource;
    "Component.LiquifyVisual": LiquifyVisual;
    "Component.LocatedAtComponent": LocatedAtComponent;
    "Component.LookAtComponent": LookAtComponent;
    "Component.MLComponent": MLComponent;
    "Component.ManipulateComponent": ManipulateComponent;
    "Component.MarkerTrackingComponent": MarkerTrackingComponent;
    "Component.MaskingComponent": MaskingComponent;
    "Component.MaterialMeshVisual": MaterialMeshVisual;
    "Component.MeshVisual": RenderMeshVisual;
    "Component.ObjectTracker2D": ObjectTracking;
    "Component.ObjectTracking": ObjectTracking;
    "Component.ObjectTracking3D": ObjectTracking3D;
    "Component.PinToMeshComponent": PinToMeshComponent;
    "Component.PostEffectVisual": PostEffectVisual;
    "Component.RectangleSetter": RectangleSetter;
    "Component.RenderMeshVisual": RenderMeshVisual;
    "Component.RetouchVisual": RetouchVisual;
    "Component.ScreenRegionComponent": ScreenRegionComponent;
    "Component.ScreenTransform": ScreenTransform;
    "Component.Script": ScriptComponent;
    "Component.ScriptComponent": ScriptComponent;
    "Component.Skin": Skin;
    "Component.SplineComponent": SplineComponent;
    "Component.SpriteAligner": SpriteAligner;
    "Component.SpriteVisual": SpriteVisual;
    "Component.SpriteVisualV2": Image;
    "Component.Text": Text;
    "Component.Text3D": Text3D;
    "Component.TextVisual": Label;
    "Component.Touch": InteractionComponent;
    "Component.TouchComponent": InteractionComponent;
    "Component.TrackedPointComponent": TrackedPointComponent;
    "Component.VFXComponent": VFXComponent;
    "Component.VertexCache": VertexCache;
    "Component.Visual": Visual;
    "Component.WorldComponent": WorldComponent;
    "Component.WorldTracking": DeviceTracking;
    "ConstraintComponent": ConstraintComponent;
    "CustomLocationGroupComponent": CustomLocationGroupComponent;
    "DepthSetter": DepthSetter;
    "DeviceLocationTrackingComponent": DeviceLocationTrackingComponent;
    "DeviceTracking": DeviceTracking;
    "EyeColorVisual": EyeColorVisual;
    "FaceInsetVisual": FaceInsetVisual;
    "FaceMaskVisual": FaceMaskVisual;
    "FaceStretchVisual": FaceStretchVisual;
    "FaceSubVisual": FaceMaskVisual;
    "GaussianSplattingVisual": GaussianSplattingVisual;
    "Gyroscope": Gyroscope;
    "HairSimulationColliderComponent": ColliderComponent;
    "HairVisual": HairVisual;
    "Head": Head;
    "Hints": HintsComponent;
    "HintsComponent": HintsComponent;
    "Image": Image;
    "InteractionComponent": InteractionComponent;
    "Label": Label;
    "LightSource": LightSource;
    "LiquifyVisual": LiquifyVisual;
    "LocatedAtComponent": LocatedAtComponent;
    "LookAtComponent": LookAtComponent;
    "MLComponent": MLComponent;
    "ManipulateComponent": ManipulateComponent;
    "MarkerTrackingComponent": MarkerTrackingComponent;
    "MaskingComponent": MaskingComponent;
    "MaterialMeshVisual": MaterialMeshVisual;
    "MeshVisual": RenderMeshVisual;
    "ObjectTracker2D": ObjectTracking;
    "ObjectTracking": ObjectTracking;
    "ObjectTracking3D": ObjectTracking3D;
    "Physics.BodyComponent": BodyComponent;
    "Physics.ColliderComponent": ColliderComponent;
    "Physics.ConstraintComponent": ConstraintComponent;
    "Physics.WorldComponent": WorldComponent;
    "PinToMeshComponent": PinToMeshComponent;
    "PostEffectVisual": PostEffectVisual;
    "RectangleSetter": RectangleSetter;
    "RenderMeshVisual": RenderMeshVisual;
    "RetouchVisual": RetouchVisual;
    "ScreenRegionComponent": ScreenRegionComponent;
    "ScreenTransform": ScreenTransform;
    "Script": ScriptComponent;
    "ScriptComponent": ScriptComponent;
    "Skin": Skin;
    "SplineComponent": SplineComponent;
    "SpriteAligner": SpriteAligner;
    "SpriteVisual": SpriteVisual;
    "SpriteVisualV2": Image;
    "Text": Text;
    "Text3D": Text3D;
    "TextVisual": Label;
    "Touch": InteractionComponent;
    "TouchComponent": InteractionComponent;
    "TrackedPointComponent": TrackedPointComponent;
    "VFXComponent": VFXComponent;
    "VertexCache": VertexCache;
    "Visual": Visual;
    "WorldComponent": WorldComponent;
    "WorldTracking": DeviceTracking;
}

interface EventNameMap {
    "BrowsLoweredEvent": BrowsLoweredEvent;
    "BrowsRaisedEvent": BrowsRaisedEvent;
    "BrowsReturnedToNormalEvent": BrowsReturnedToNormalEvent;
    "CameraBackEvent": CameraBackEvent;
    "CameraFrontEvent": CameraFrontEvent;
    "ConnectedLensEnteredEvent": ConnectedLensEnteredEvent;
    "DelayedCallbackEvent": DelayedCallbackEvent;
    "DoubleTapEvent": DoubleTapEvent;
    "FaceFoundEvent": FaceFoundEvent;
    "FaceLostEvent": FaceLostEvent;
    "FaceTrackingEvent": FaceTrackingEvent;
    "HoverEndEvent": HoverEndEvent;
    "HoverEvent": HoverEvent;
    "HoverStartEvent": HoverStartEvent;
    "KeyPressEvent": KeyPressEvent;
    "KeyReleaseEvent": KeyReleaseEvent;
    "KissFinishedEvent": KissFinishedEvent;
    "KissStartedEvent": KissStartedEvent;
    "LateUpdateEvent": LateUpdateEvent;
    "ManipulateEndEvent": ManipulateEndEvent;
    "ManipulateStartEvent": ManipulateStartEvent;
    "MouthClosedEvent": MouthClosedEvent;
    "MouthOpenedEvent": MouthOpenedEvent;
    "OnAwakeEvent": OnAwakeEvent;
    "OnDestroyEvent": OnDestroyEvent;
    "OnDisableEvent": OnDisableEvent;
    "OnEnableEvent": OnEnableEvent;
    "OnPauseEvent": OnPauseEvent;
    "OnResumeEvent": OnResumeEvent;
    "OnStartEvent": OnStartEvent;
    "OnTimeStartEvent": OnTimeStartEvent;
    "SceneEvent": SceneEvent;
    "SceneObjectEvent": SceneObjectEvent;
    "SmileFinishedEvent": SmileFinishedEvent;
    "SmileStartedEvent": SmileStartedEvent;
    "SnapImageCaptureEvent": SnapImageCaptureEvent;
    "SnapRecordStartEvent": SnapRecordStartEvent;
    "SnapRecordStopEvent": SnapRecordStopEvent;
    "TapEvent": TapEvent;
    "TouchEndEvent": TouchEndEvent;
    "TouchMoveEvent": TouchMoveEvent;
    "TouchStartEvent": TouchStartEvent;
    "TriggerPrimaryEvent": TriggerPrimaryEvent;
    "TurnOffEvent": TurnOffEvent;
    "TurnOnEvent": TurnOnEvent;
    "UpdateEvent": UpdateEvent;
    "WorldTrackingMeshesAddedEvent": WorldTrackingMeshesAddedEvent;
    "WorldTrackingMeshesRemovedEvent": WorldTrackingMeshesRemovedEvent;
    "WorldTrackingMeshesUpdatedEvent": WorldTrackingMeshesUpdatedEvent;
    "WorldTrackingPlanesAddedEvent": WorldTrackingPlanesAddedEvent;
    "WorldTrackingPlanesRemovedEvent": WorldTrackingPlanesRemovedEvent;
    "WorldTrackingPlanesUpdatedEvent": WorldTrackingPlanesUpdatedEvent;
    "WorldTrackingResetEvent": WorldTrackingResetEvent;
}

interface event0<R> {
    add(callback: () => R): EventRegistration
    remove(eventRegistration: EventRegistration): void
}

interface event1<T0,R> {
    add(callback: (arg0:T0) => R): EventRegistration
    remove(eventRegistration: EventRegistration): void
}

interface event2<T0,T1,R> {
    add(callback: (arg0:T0, arg1:T1) => R): EventRegistration
    remove(eventRegistration: EventRegistration): void
}

interface event3<T0,T1,T2,R> {
    add(callback: (arg0:T0, arg1:T1, arg2:T2) => R): EventRegistration
    remove(eventRegistration: EventRegistration): void
}

interface event4<T0,T1,T2,T3,R> {
    add(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3) => R): EventRegistration
    remove(eventRegistration: EventRegistration): void
}

declare var script: ScriptComponent;

type Filter = Physics.Filter
