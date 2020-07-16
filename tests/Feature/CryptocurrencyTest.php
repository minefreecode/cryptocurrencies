<?php

namespace Tests\Feature;

use App\Cryptocurrency;
use App\User;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Str;

class CryptocurrencyTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function setUp(): void
    {
        parent::setUp();

    }

    public function testBasicTest()
    {
        $response = $this->get('/cryptocurrencies');

        $response->assertStatus(200);
    }


    private function seedCrypto($num = 15)
    {
        factory(Cryptocurrency::class, $num)->create([
            'name' => 'Bitcoin',
            'symbol' => 'BTC',
            'description' =>'Первая и самая популярная криптовалюта с наибольшей рыночной капитализацией.',
            'image' => 'https://commons.wikimedia.org/wiki/File:Bitcoin_Digital_Currency_Logo.png'
        ]);
    }

    /** @test */
    public function that_load_all_Crypto()
    {
        $this->seedCrypto();

        $Crypto = Cryptocurrency::get();

        $this->assertCount(15, $Crypto);
    }


    /** @test */
    public function that_crypto_changed()
    {
        $this->seedCrypto(5);

        $date = Carbon::now()->format('Y-m-d');

        $article = Cryptocurrency::where('published', false)->first();
        $article->name = 'Ethereum';
        $article->symbol = 'ETH';
        $article->description = 'Поддерживает Тьюринг-полные умные контракты.';

        $article->save();

        $this->assertEquals($article->name, 'Ethereum');
        $this->assertEquals($article->symbol, 'ETH');
        $this->assertEquals($article->description, 'Поддерживает Тьюринг-полные умные контракты.');

        $Crypto = Cryptocurrency::where('name', 'Ethereum')->get();

        $this->assertEquals($Crypto->count(), 1);
    }


}
