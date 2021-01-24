const entries = require('../entries')

test('check whether entries are being stored', () => {
    entry = {
        name: 'Abhishek Panigrahi',
        email: '123@gmail.com',
        message: 'I would love to work with you',
    }
    entries.putEntry(entry)
    fetchedEntries = entries.getEntries()
    expect(fetchedEntries.pop()).toBe(entry)
})
