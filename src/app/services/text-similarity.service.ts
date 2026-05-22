import { Injectable } from "@angular/core"

export interface TextSimilarityResult {
    percentage: number
    characterSimilarity: number
    wordSimilarity: number
    normalizedA: string
    normalizedB: string
}

@Injectable({
    providedIn: "root",
})
export class TextSimilarityService {
    compare(textA: string, textB: string): TextSimilarityResult {
        const normalizedA = this.normalizeText(textA)
        const normalizedB = this.normalizeText(textB)

        if (!normalizedA && !normalizedB) {
            return {
                percentage: 100,
                characterSimilarity: 100,
                wordSimilarity: 100,
                normalizedA,
                normalizedB,
            }
        }

        if (!normalizedA || !normalizedB) {
            return {
                percentage: 0,
                characterSimilarity: 0,
                wordSimilarity: 0,
                normalizedA,
                normalizedB,
            }
        }

        const characterSimilarity = this.getCharacterSimilarity(normalizedA, normalizedB)
        const wordSimilarity = this.getWordSimilarity(normalizedA, normalizedB)

        const finalScore = characterSimilarity * 0.6 + wordSimilarity * 0.4

        return {
            percentage: Math.round(finalScore * 100) / 100,
            characterSimilarity: Math.round(characterSimilarity * 100) / 100,
            wordSimilarity: Math.round(wordSimilarity * 100) / 100,
            normalizedA,
            normalizedB,
        }
    }

    private normalizeText(text: string): string {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // retire les accents
            .replace(/[^a-z0-9\s]/g, " ") // retire ponctuation et caractères spéciaux
            .replace(/\s+/g, " ")
            .trim()
    }

    private getCharacterSimilarity(a: string, b: string): number {
        const distance = this.levenshteinDistance(a, b)
        const maxLength = Math.max(a.length, b.length)

        if (maxLength === 0) {
            return 100
        }

        return (1 - distance / maxLength) * 100
    }

    private levenshteinDistance(a: string, b: string): number {
        const rows = a.length + 1
        const cols = b.length + 1

        const matrix: number[][] = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => 0),
        )

        for (let i = 0; i < rows; i++) {
            matrix[i][0] = i
        }

        for (let j = 0; j < cols; j++) {
            matrix[0][j] = j
        }

        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1

                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // suppression
                    matrix[i][j - 1] + 1, // insertion
                    matrix[i - 1][j - 1] + cost, // substitution
                )
            }
        }

        return matrix[a.length][b.length]
    }

    private getWordSimilarity(a: string, b: string): number {
        const wordsA = new Set(this.tokenize(a))
        const wordsB = new Set(this.tokenize(b))

        if (wordsA.size === 0 && wordsB.size === 0) {
            return 100
        }

        const intersection = new Set([...wordsA].filter((word) => wordsB.has(word)))

        const union = new Set([...wordsA, ...wordsB])

        return (intersection.size / union.size) * 100
    }

    private tokenize(text: string): string[] {
        return text
            .split(" ")
            .map((word) => word.trim())
            .filter((word) => word.length > 0)
    }
}
