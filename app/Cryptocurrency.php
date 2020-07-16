<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cryptocurrency extends Model
{
    /**
     * Таблица, ассоциированная с моделью
     *
     * @var string
     */
    protected $table = 'cryptocurrencies';

    protected $fillable = ['name', 'symbol', 'description', 'image',];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        return !empty($this->image) ? 'images\\cryptocurrency_images\\' . $this->image : '';
    }
}
